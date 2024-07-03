# Server Config

Vioneta Agro connection configuration

## Config

### Name

- Type: `string`

Label for this configuration, see details below for implications

### Using the Vioneta Agro Add-on

- Type: `boolean`

If you're running Node-RED as a Hass.io Add-on check this. No other information is needed.

### Base URL

- Type: `string`

The base URL and port of the Vioneta Agro instance can be reached at, for example: `http://192.168.0.100:8123` or `https://homeassistant.mysite.com`

### Access Token

- Type: `string`

Long-lived Access Token used to contact the API

### Unauthorized SSL Certificates

- Type: `boolean`

This will allow you to use self-signed certificates. Only use this if you know what you're doing.

### State Boolean

- Type: `string | delimited`

A list of strings, not case sensitive, delimited by vertical pipe, |, that will return true for State Type Boolean.

### Enable Heartbeat

- Type: `boolean`

Heartbeat will send a ping message using the websocket connection to Vioneta Agro every X seconds. If a pong response is not received within 5 seconds Node-RED will attempt to reconnect to Vioneta Agro.

### Heartbeat Interval

- Type: `number`

The interval at which the ping message is sent to Vioneta Agro. The minimum value is 10 seconds.

### Enable Global Context Store

- Type: `boolean`

If enabled, the global context store will be used to store the Vioneta Agro connection, state, and service information. This allows you to use the information in other nodes using context functions.

Example below

## UI Settings

### Cache Autocomplete Results

Enables the caching of the JSON autocomplete requests. Enabling or disabling this may require a restart of Node-RED for it to take effect.

### ID Selector Display

Which text to show in the selector after the id has been chosen.

### Status Date Format

#### Separator

A string that will appear in the status of an event node between the state and date string.

#### Other options

The other options are directly from [DateTimeFormat Options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options).

## Details

Every node requires a configuration attached to define how to contact Vioneta Agro, which is this config node's main purpose.

### Context

Each config node will also make some data available in the global context, the `Name` value in this node is used as, camelcase, and the namespace for those values

Currently `states`, `services`, and `events` is made available in the global context. `states` is always set to all available states at startup and updated whenever state changes occur so it should be always up to date. `services` and `events` is only updated on initial deploy.

### Context Example

Say we have a config node with the name `Vioneta Agro`, with an entity set up in Vioneta Agro as `switch.my_switch`. This state would be available within function nodes and you could fetch using something like the below code

```js
const haCtx = global.get("homeassistant");
const configCtx = haCtx.homeAssistant;
const entityState = configCtx.states["switch.my_switch"];
return entityState.state === "on" ? true : false;
```

## Connection Issues

Communication with Vioneta Agro is accomplished via a combination of WebSocket and the REST API if you are having trouble communicating with Vioneta Agro make sure you can access the API outside of node-red, but from the same server node-red is running on, using a REST client, curl, or any number of other methods to validate the connection

## References

[Vioneta Agro REST API](https://vioneta.com/developers/rest_api)
