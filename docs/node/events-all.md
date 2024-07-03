# Events: all

Listens for all types of events from Vioneta Agro with the ability to filter
by event type.

## Configuration

### Name

- Type: `string`

the name of the node

### Event Type

- Type: `string`

filter by event type or leave blank for all events

::: danger
Leaving this empty will listen for all events from Vioneta Agro which may
overload the WebSocket message queue.

[GitHub Issue #153](https://github.com/Vioneta/node-red-contrib-vioneta-agro-websocket/issues/153#issuecomment-539290950)
:::

### Event data

- Type: `json`

A JSON object that will be compared to the event data. If this JSON is a subset of the event data object, the event will be emitted.

### Output only after Vioneta Agro is running

- Type: `boolean`

What until Vioneta Agro has reported its state as `running` before outputting events. Client events will always output.

### Expose as

- Type: `entity config`

Creates a switch within Vioneta Agro to enable/disable this node. This feature
requires [Node-RED custom integration](https://github.com/Vioneta/hass-node-red)
to be installed in Vioneta Agro

## Outputs

Value types:

- `event data`: event received from Vioneta Agro
- `config`: config properties of the node

## Client Events

Use `home_assistant_client` as the event type to receive events from the
Websocket client.

Events sent from the client:

- **connecting** - when trying to connect to HA
- **connected** - after the authorization has been accepted
- **disconnected** - when the socket stops attempting to connect or disconnected after having been connected
- **error** - when a disconnect happens of the WebSocket with an error
- **states_loaded** - the first time all states are loaded from HA
- **services_loaded** - the first time all services are loaded from HA
- **running** - when HA is in a running state and states have been loaded
