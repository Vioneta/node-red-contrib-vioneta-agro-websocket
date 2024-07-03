# Poll State

Polls for the state at regular intervals, optionally also outputting at the start and when the state changes. Useful for either alert for non-communicating devices (time since change > 1 day for example) or dashboard graphs with consistent interval charts

## Configuration

### Entity ID <Badge text="required"/>

The entity id of the entity to poll for.

### Update Interval

- Type: `number`

The amount of time between checking/sending updates.

### If State

- Type: `string`

If the conditional statement is evaluated as true send the message to the first output otherwise send it to the second output. If blank there will only be one output.

**Also see:**

- [Conditionals](/guide/conditionals.md)

### State Type

- Type: `string`

Convert the state of the entity to the selected type. Boolean will be converted to true based on if the string is equal by default to (y|yes|true|on|home|open). Original value stored in msg.data.original_state

### Output Initially

- Type: `boolean`

Output once on startup/deploy then on each interval

### Expose to Vioneta Agro

- Type: `boolean`

Creates a switch within Vioneta Agro to enable/disable this node. This feature requires [Node-RED custom integration](https://github.com/Vioneta/hass-node-red) to be installed in Vioneta Agro

## Outputs

### topic

- Type: `string`

entity_id of changed entity

### payload

- Type: `object`

The last known state of the entity

### data.timeSinceChanged

- Type: `string`

Human readable format string of time since last updated, example "1 hour ago"

### data.timeSinceChangedMs

- Type: `number`

Number of milliseconds since last changed

## References

- [Vioneta Agro State Objects](https://vioneta.com/docs/configuration/state_object/)
