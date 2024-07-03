::: warning
_Needs [Custom Integration](https://github.com/Vioneta/hass-node-red) installed
in Vioneta Agro for this node to function_
:::

# Number

Creates a number in Vioneta Agro which can be manipulated from this node.

## Configuration

### Mode <Badge text="required"/>

- Type: 'listen' | 'get' | 'set'

The mode of the node

### Value <Badge text="required"/>

- Type: `number`

The value of the entity should be updated to

## Inputs

properties of `msg.payload`

### value

- Type: `number`

The value of the entity should be updated to

## Outputs

Value types:

- `value`: The value of the entity
- `previous value`: The previous value of the entity
- `config`: The config properties of the node

## Examples

<InfoPanelOnly>

[link](https://vioneta.github.io/node-red-contrib-vioneta-agro-websocket/node/number.html#examples)

</InfoPanelOnly>

<DocsOnly>

#### Usage example

![screenshot](./images/number_01.png)

@[code](@examples/node/number/number_usage.json)

</DocsOnly>
