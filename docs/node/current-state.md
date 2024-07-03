# Current State

Returns the current state of an entity. Useful for using conditional logic to automation flows.

## Configuration

### Entity ID <Badge text="required"/>

- Type: `string`
- Accepts [Mustache Templates](/guide/mustache-templates.md)

The id of the entity to return.

### If State

- Type: `string`

If the conditional statement is evaluated as true send the message to the first
output otherwise send it to the second output. If blank there will only be one
output.

**Also see:**

- [Conditionals](/guide/conditionals.md)

### For

- Type: `number`

The amount of time the entity state needs to have been constant for the "If state" to be `true`

### State Type

- Type: `string`
- Values: `string|number|boolean`
- Default: `string`

Convert the state of the entity to the selected type. Boolean will be converted to true based on if the string is equal by default to (`y|yes|true|on|home|open`). Original value stored in `msg.data.original_state`

### Block Input Overrides

- Type: `boolean`
- Default: `false`

Stop msg.payload values from overriding local config

## Inputs

### payload.entityId

- Type : `string`

  Overrides or sets the entity id for which the current state is being fetched

## Outputs

Value types:

- `entity`: full entity object
- `entity id`: entity id of the triggered entity
- `entity state`: entity state of the triggered entity
- `config`: config properties of the node

## References

- [Vioneta Agro State Objects](https://vioneta.com/docs/configuration/state_object/)
