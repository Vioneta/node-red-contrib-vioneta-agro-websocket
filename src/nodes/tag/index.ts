import { createControllerDependencies } from '../../common/controllers/helpers';
import ClientEvents from '../../common/events/ClientEvents';
import EventsStatus from '../../common/status/EventStatus';
import { RED } from '../../globals';
import { migrate } from '../../helpers/migrate';
import { getExposeAsConfigNode, getServerConfigNode } from '../../helpers/node';
import { getHomeAssistant, HaEvent } from '../../homeAssistant';
import {
    BaseNode,
    BaseNodeProperties,
    OutputProperty,
} from '../../types/nodes';
import TagController from './TagController';

export interface TagNodeProperties extends BaseNodeProperties {
    tags: string[];
    devices?: string[];
    outputProperties: OutputProperty[];
    exposeAsEntityConfig: string;
}

export interface TagNode extends BaseNode {
    config: TagNodeProperties;
}

export default function tagNode(this: TagNode, config: TagNodeProperties) {
    RED.nodes.createNode(this, config);

    this.config = migrate(config);
    const serverConfigNode = getServerConfigNode(this.config.server);
    const homeAssistant = getHomeAssistant(serverConfigNode);
    const exposeAsConfigNode = getExposeAsConfigNode(
        this.config.exposeAsEntityConfig,
    );
    const clientEvents = new ClientEvents({
        node: this,
        emitter: homeAssistant.eventBus,
    });

    const status = new EventsStatus({
        clientEvents,
        config: serverConfigNode.config,
        exposeAsEntityConfigNode: exposeAsConfigNode,
        node: this,
    });
    clientEvents.setStatus(status);
    exposeAsConfigNode?.integration.setStatus(status);
    const controllerDeps = createControllerDependencies(this, homeAssistant);

    const controller = new TagController({
        node: this,
        status,
        ...controllerDeps,
    });
    controller.setExposeAsConfigNode(exposeAsConfigNode);

    clientEvents.addListener(
        `ha_events:${HaEvent.TagScanned}`,
        controller.onTagScanned.bind(controller),
    );
}
