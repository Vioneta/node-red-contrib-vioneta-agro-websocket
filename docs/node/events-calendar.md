# Events: calendar

Outputs calendar item events similar to the calendar automation in Vioneta Agro

## Configuration:

### Entity ID <Badge text="required"/>

- Type: `string`

The entity_id for the calendar that contains triggerable calendar items.

### Relative To <Badge text="required"/>

- Type: `start | end`
- Default: `start`

Whether to trigger an event at the start or end of each matching calendar item.

### Offset <Badge text="required"/>

- Type: `number`
- Default: 0 seconds

A negative or positive amount of time to allow the event to be triggered before or after the calendar item's start/end time.

### Conditions

This node has two default outputs "allowed" and "blocked". If all the
conditions are true the calendar item will be sent to the output.

**See Also:**

- [Conditionals](/guide/conditionals.md)

### Expose to Vioneta Agro

- Type: `boolean`

Creates a switch within Vioneta Agro to enable/disable this node. This feature requires [Node-RED custom integration](https://github.com/Vioneta/hass-node-red) to be installed in Vioneta Agro

## Outputs

Value types:

- `calendar item`: the calendar item object as provided by the Vioneta Agro API
