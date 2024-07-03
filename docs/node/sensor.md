::: warning
_Needs [Custom Integration](https://github.com/Vioneta/hass-node-red) installed
in Vioneta Agro for this node to function_
:::

# Sensor

Creates a sensor in Vioneta Agro which can be manipulated from this node.

## Configuration

### State <Badge text="required"/>

- Type: `string | number | boolean`

The state the entity should be updated to

### Attributes

- Type: `Object`

Key/Value pair of attributes to update. The key should be a string and the value can be a [string | number | boolean | object]

### Input Override

- Type: `string`
- Values: `accept | merge | block`

Determine how input values will be handled. When merge is selected the message object values will override the configuration values.

### Resend state and attributes

- Type: `boolean`

When creating the entity in Vioneta Agro this will also send the last updated state and attributes then node sent to Vioneta Agro

## Inputs

properties of `msg.payload`

### state

- Type: `string | number | boolean`

The state the entity should be updated to

### attributes

- Type: `Object`

Key/Value pair of attributes to update. The key should be a string and the value can be a `[string | number | boolean | object]`
