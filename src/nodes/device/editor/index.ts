import { EditorNodeDef, EditorRED } from 'node-red';

import { EntityType, NodeType } from '../../../const';
import * as haOutputs from '../../../editor/components/output-properties';
import { select2DefaultOptions } from '../../../editor/components/select2';
import * as haData from '../../../editor/data';
import * as exposeNode from '../../../editor/exposenode';
import ha, { NodeCategory, NodeColor } from '../../../editor/ha';
import * as haServer from '../../../editor/haserver';
import { i18n } from '../../../editor/i18n';
import { HassNodeProperties, OutputProperty } from '../../../editor/types';
import * as haUtils from '../../../editor/utils';
import {
    HassArea,
    HassDeviceAction,
    HassDeviceCapabilities,
    HassDeviceTrigger,
    HassTranslation,
} from '../../../types/home-assistant';
import { saveEntityType } from '../../entity-config/editor/helpers';
import * as action from './action';
import * as trigger from './trigger';
import * as deviceUI from './ui';

declare const RED: EditorRED;
declare global {
    interface JQuery {
        maximizeSelect2Height: () => void;
    }
}

const getDevice = (type: string) => (type === 'action' ? action : trigger);

const validateCapabilities = (capabilities: any) => {
    if (!Array.isArray(capabilities)) return true;

    for (const capability of capabilities) {
        switch (capability.type) {
            case 'float':
                if (!Number.isFinite(Number(capability.value))) {
                    return false;
                }
                break;
            case 'positive_time_period_dict': {
                const sign = Math.sign(capability.value);
                if (sign === -1) return false;
                break;
            }
        }
    }

    return true;
};

interface DeviceEditorNodeProperties extends HassNodeProperties {
    deviceType: string;
    device: string;
    event?: string;
    capabilities?: any[];
    outputProperties: OutputProperty[];
    exposeAsEntityConfig: string;

    // deprecated but still needed for migration
    exposeToHomeAssistant: undefined;
    haConfig: undefined;
}

const defaultOutputProperties: OutputProperty[] = [
    {
        property: 'payload',
        propertyType: 'msg',
        value: '',
        valueType: 'eventData',
    },
    {
        property: 'topic',
        propertyType: 'msg',
        value: '',
        valueType: 'triggerId',
    },
];

const DeviceEditor: EditorNodeDef<DeviceEditorNodeProperties> = {
    category: NodeCategory.HomeAssistant,
    color: NodeColor.Alpha,
    inputs: 0,
    outputs: 1,
    icon: 'font-awesome/fa-cube',
    paletteLabel: 'device',
    label: function () {
        return this.name || `device ${this.deviceType}`;
    },
    labelStyle: ha.labelStyle,
    defaults: {
        name: { value: '' },
        server: { value: '', type: NodeType.Server, required: true },
        version: { value: RED.settings.get('haDeviceVersion', 0) },
        exposeAsEntityConfig: {
            value: '',
            type: NodeType.EntityConfig,
            // @ts-ignore - DefinitelyTyped is missing this property
            filter: (config) => config.entityType === EntityType.Switch,
            required: false,
        },
        // @ts-ignore - DefinitelyTyped sets property to unchangable
        inputs: { value: 0 },
        deviceType: { value: 'trigger' },
        device: { value: '' },
        event: { value: undefined, validate: (v) => v !== undefined },
        capabilities: { value: [], validate: validateCapabilities },
        outputProperties: {
            value: defaultOutputProperties,
            validate: haOutputs.validate,
        },

        // deprecated but still needed for migration
        exposeToHomeAssistant: { value: undefined },
        haConfig: { value: undefined },
    },
    oneditprepare: function () {
        ha.setup(this);
        haServer.init(this, '#node-input-server');
        exposeNode.init(this);
        const SERVER_ADD = '_ADD_';
        const $server = $('#node-input-server');
        const $type = $('#node-input-deviceType');
        const $device = $('#node-input-device');
        const $event = $('#event');
        let event = getDevice($type.val() as string);
        let translations: HassTranslation;
        saveEntityType(EntityType.Switch, 'exposeAsEntityConfig');

        $device.on('select2:select', function () {
            updateEvents($(this).val() as string);
        });

        $event.on('change', function (e) {
            const value = (e.target as HTMLSelectElement).value;
            if (value === '__NONE__') return;
            const data = $event.data('events');
            updateCapabilities(data[value]);
        });

        const sortDevices = (a: any, b: any) => {
            const aName = haUtils.deepFind('text', a);
            const bName = haUtils.deepFind('text', b);
            if (aName === bName) return 0;
            if (typeof aName !== 'string') return 1;

            return aName.localeCompare(bName);
        };

        const resetElements = () => {
            clearEventSelect();
            clearDeviceExtras();
        };

        const fetchTranslations = async () => {
            const lang = RED.i18n.lang();
            try {
                translations = await haServer.fetch('translations', {
                    cat: 'device_automation',
                    lang,
                });
            } catch (err) {
                RED.notify('Error retrieving translations.', 'error');
            }
        };

        const getAreaName = (areas: HassArea[], areaId?: string) => {
            if (areaId && areas?.length) {
                const area = areas.find((a) => a.area_id === areaId);
                if (area) {
                    return area.name;
                }
            }

            return i18n('ha-device.ui.no_area');
        };

        const populateDevices = (deviceId?: string) => {
            const serverId = $server.val() as string;
            if (serverId === SERVER_ADD) return;

            const devices = haData.getDevices(serverId);
            if (!devices) return;

            const areas = haData.getAreas(serverId);

            $device.empty();
            $device
                .select2({
                    ...select2DefaultOptions,
                    ...{
                        data: devices
                            .map((d) => {
                                return {
                                    id: d.id,
                                    text: d.name_by_user || d.name,
                                    selected: d.id === deviceId,
                                    title: getAreaName(areas, d.area_id),
                                };
                            })
                            .sort(sortDevices),
                    },
                })
                .maximizeSelect2Height();
        };

        const onServerChange = async () => {
            resetElements();
            if ($server.val() === SERVER_ADD) return;
            fetchTranslations();
            populateDevices();
            updateEvents($device.val() as string);
        };

        const onTypeChange = (e: JQueryEventObject) => {
            const deviceId = $device.val() as string;
            const type = (e.target as HTMLSelectElement).value as
                | 'action'
                | 'trigger';

            clearDeviceExtras();
            if (deviceId) {
                event = getDevice(type);
                updateEvents(deviceId);
            }
            haOutputs.setTypes(getExtraTypes(type));
            const propertiesList =
                type === 'trigger' ? defaultOutputProperties : [];
            const defaultProperties = event.setDefaultOutputs(propertiesList);
            haOutputs.loadData(defaultProperties);

            $('#event').prev().text(type);

            $('#node-input-exposeAsEntityConfig')
                .closest('div.form-row')
                .toggle(type === 'trigger');
        };

        $server.one('change', () => {
            resetElements();
            populateDevices(this.device);
            if ($server.val() !== SERVER_ADD) {
                fetchTranslations();
                updateEvents(this.device, this.event, this.capabilities);
            }
            setTimeout(() => {
                $server.on('change', onServerChange);
                $type.on('change', onTypeChange);
            }, 100);
        });

        const clearEventSelect = () => {
            $event
                .html(`<option value="__NONE__">No ${$type.val()}s</option>`)
                .trigger('change')
                .prop('disabled', true);
        };

        const clearDeviceExtras = () => {
            $('.deviceExtra').remove();
        };

        const updateEvents = async (
            deviceId: string,
            selected?: string,
            capabilities?: any,
        ) => {
            if (!deviceId) return;
            const data = await event.getEventList(deviceId);
            let selectedIndex;
            if (data.length === 0) {
                clearEventSelect();
                clearDeviceExtras();
                selectedIndex = 0;
            } else {
                // ignore if selected device has already changed
                if (data[0].device_id !== $device.val()) return;

                const deviceType = $type.val() as string;
                $event.data('events', data).empty().prop('disabled', false);
                const options: HTMLOptionElement[] = [];
                for (let index = 0; index < data.length; index++) {
                    const str = await localizeDeviceEvent(
                        deviceType,
                        data[index],
                    );
                    options.push(new Option(str, index.toString()));
                }
                $event.append(options);

                selectedIndex = data.findIndex((item) =>
                    haUtils.compareObjects(selected, item),
                );
                selectedIndex = selectedIndex === -1 ? 0 : selectedIndex;
                updateCapabilities(data[selectedIndex], capabilities);
            }
            $('option', $event).eq(selectedIndex).prop('selected', true);
        };

        const updateCapabilities = async (
            action: HassDeviceTrigger | HassDeviceAction,
            capabilities?: HassDeviceCapabilities,
        ) => {
            clearDeviceExtras();
            const data = await event.getCapabilitiesList(action);
            if (data?.length) {
                $event.data('capabilities', data);
                const html = deviceUI.createDeviceExtraFields(
                    data,
                    capabilities,
                );
                $event.parent().after(html);
            }
        };

        const localizeDeviceEvent = async (
            eventType: string,
            event: Record<string, any>,
        ) => {
            const translateKey = (type = 'type') =>
                `component.${event.domain}.device_automation.${eventType}_${type}.${event[type]}`;
            let desc =
                translations?.[translateKey()] ??
                (event.subtype
                    ? `"${event.subtype}" ${event.type}`
                    : event.type);

            const vars = {
                entity_name: async (): Promise<string> => {
                    if (!event.entity_id) return '<unknown>';

                    const entity = haData.getEntity(
                        $server.val() as string,
                        event.entity_id,
                    );

                    if (!entity) return '';

                    return !entity.attributes ||
                        entity.attributes.friendly_name === undefined
                        ? event.entity_id.split('.')[1].replace(/_/g, ' ')
                        : entity.attributes.friendly_name || '';
                },
                subtype: (): string =>
                    translations[translateKey('subtype')] || event.subtype,
            };
            const objKeys = Object.keys(vars) as (keyof typeof vars)[];
            for (const key of objKeys) {
                const str = `{${key}}`;
                if (desc.indexOf(str) !== -1) {
                    const value = await vars[key]();
                    desc = desc.replace(str, value);
                }
            }

            return desc;
        };

        const getExtraTypes = (type: 'action' | 'trigger') => {
            const extraTypes = {
                action: ['sentData'],
                trigger: ['eventData', 'triggerId'],
            };
            return extraTypes[type];
        };

        $('#dialog-form').prepend(ha.alphaWarning(367));
        haOutputs.createOutputs(this.outputProperties, {
            extraTypes: getExtraTypes($type.val() as 'action' | 'trigger'),
        });
    },
    oneditsave: function () {
        const event = getDevice($('#node-input-deviceType').val() as string);
        const $event = $('#event');
        const eventType = $event.val() as string;

        // @ts-ignore - DefinitelyTyped is wrong
        this.inputs = event.inputCount;
        if (eventType !== '__NONE__') {
            const events = $event.data('events');
            const capabilities = $event.data('capabilities');
            this.event = events[eventType];
            this.capabilities = deviceUI.getCapabilities(capabilities);
        }
        this.outputProperties = haOutputs.getOutputs();
    },
};

export default DeviceEditor;
