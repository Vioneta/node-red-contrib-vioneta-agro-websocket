import { EditorNodeDef, EditorNodeProperties, EditorRED } from 'node-red';

import { EntityType, NodeType } from '../../../const';
import ha, { NodeCategory } from '../../../editor/ha';
import {
    defaultHaConfigOptions,
    HaConfigOption,
    haConfigOptions,
} from './data';
import { createRow, setEntityType } from './helpers';

declare const RED: EditorRED;

type HaConfig = {
    property: string;
    value: string | number | string[];
};

interface EntityConfigEditorNodeProperties extends EditorNodeProperties {
    version: number;
    server: string;
    deviceConfig: string;
    entityType: string;
    haConfig: HaConfig[];
    resend: boolean;
    debugEnabled: boolean;
}

const rows = {
    binary_sensor: ['resend'],
    sensor: ['resend'],
};

const EntityConfigEditor: EditorNodeDef<EntityConfigEditorNodeProperties> = {
    category: NodeCategory.Config,
    defaults: {
        server: {
            value: '',
            type: NodeType.Server,
            required: true,
        },
        deviceConfig: {
            value: '',
            type: NodeType.DeviceConfig,
            required: false,
        },
        name: { value: '' },
        version: { value: RED.settings.get('haEntityConfigVersion', 0) },
        entityType: {
            value: 'binary_sensor',
            required: true,
        },
        haConfig: {
            value: [],
            validate: function (v) {
                // Options are required for select entity types
                if ($('#node-config-input-entityType').val() === 'select') {
                    const properties = v as unknown as HaConfig[];
                    const options = properties.find(
                        (c) => c.property === 'options',
                    );
                    if (
                        !options ||
                        !Array.isArray(options.value) ||
                        !options.value.length
                    ) {
                        return false;
                    }
                }
                return true;
            },
        },
        resend: { value: false },
        debugEnabled: { value: false },
    },
    label: function () {
        return this.name || `${this.entityType} ${this.id}`;
    },
    oneditprepare: function () {
        ha.setup(this);

        if (!this.deviceConfig) {
            $('#node-config-input-deviceConfig').val('_ADD_');
        }

        setEntityType();

        const $container = $('#ha-config-rows');
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        $('#node-config-input-entityType').on('change', function () {
            const value = $(this).val() as keyof typeof haConfigOptions;
            $('.ha-config-row').remove();

            // Show/hide rows optional-row based on the rows map
            $('#node-config-dialog-edit-form .ha-optional-row').each(
                function () {
                    const $this = $(this);
                    const id = $this.attr('id');
                    if (id && $this.hasClass('ha-optional-row')) {
                        $this.toggle(
                            rows[value]?.includes(id.replace(/-row$/, '')),
                        );
                    }
                },
            );

            const mergedOptions: HaConfigOption[] = [
                ...defaultHaConfigOptions,
                ...(haConfigOptions[value] ?? []),
            ];
            mergedOptions.forEach((o) => {
                const val =
                    self.haConfig.find((c) => c.property === o.id)?.value ?? '';

                $container.append(createRow(val, o));
            });

            // Sensor/number node changes unit of measurement based on the selected device class
            if (value === EntityType.Number || value === EntityType.Sensor) {
                $('#ha-config-device_class').on('change', function () {
                    const val =
                        self.haConfig.find(
                            (c) => c.property === 'unit_of_measurement',
                        )?.value ?? '';

                    const values =
                        mergedOptions.find(
                            (i) => i.id === 'unit_of_measurement',
                        )?.values ?? [];

                    $('#ha-config-unit_of_measurement')
                        .parent()
                        .replaceWith(
                            createRow(val, {
                                id: 'unit_of_measurement',
                                type: 'unit_of_measurement',
                                values,
                            }),
                        );
                });
            }
        });
    },
    oneditsave: function () {
        const haConfig: HaConfig[] = [];
        $('.ha-config-row').each(function () {
            const $this = $(this);
            const type = $this.data('type');
            switch (type) {
                case 'datetime':
                case 'date': {
                    const id = $this.find('input').data('property') as string;
                    const value = $this.find('input').val() as string;
                    if (value === '') return;
                    const date = new Date(value);
                    haConfig.push({ property: id, value: date.toISOString() });
                    break;
                }
                case 'editableList': {
                    const $ol = $this.find('ol');
                    const $options = $ol.editableList('items');
                    const options: string[] = [];
                    $options.each(function () {
                        const $text = $(this).find('input');
                        options.push($text.val() as string);
                    });

                    haConfig.push({ property: 'options', value: options });
                    break;
                }
                case 'number': {
                    const id = $this.find('input').data('property') as string;
                    const text = $this.find('input').val() as string;
                    const value = text.length ? Number(text) : '';
                    haConfig.push({ property: id, value });
                    break;
                }
                case 'string': {
                    const id = $this.find('input').data('property') as string;
                    const value = $this.find('input').val() as string;
                    haConfig.push({ property: id, value });
                    break;
                }
                case 'select': {
                    const $select = $this.find('select');
                    const id = $select.data('property') as string;
                    const value = $select.val() as string;
                    haConfig.push({ property: id, value });
                    break;
                }
                case 'unit_of_measurement': {
                    const $ele = $this.find('select, input');
                    const id = $ele.data('property') as string;
                    const value = $ele.val() as string;
                    haConfig.push({ property: id, value });
                    break;
                }
            }
        });
        this.haConfig = haConfig;
    },
};

export default EntityConfigEditor;
