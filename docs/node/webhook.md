# Webhook

Outputs the data received from the created webhook in Vioneta Agro

::: warning
_Needs [Custom Integration](https://github.com/Vioneta/hass-node-red) installed
in Vioneta Agro for this node to function_
:::

## Configuration

### ID <Badge text="required"/>

- Type: `string`

A string to be used for the webhook URL in Vioneta Agro.

### Allowed Methods <Badge text="required"/>

- Type: `list`

A list of allowed methods that Vioneta Agro will accept for the webhook. At least one method must be selected.

### Expose as

- Type: `string`

When an entity is selected a switch entity will be created in Vioneta Agro. Turning on and off this switch will disable/enable the nodes in Node-RED.

## Outputs

Value types:

- `received data`: The parsed body from the webhook request
- `trigger id`: webhook id
- `headers`: entity state of the triggered entity
- `params`: Query string parameters
- `config`: config properties of the node
