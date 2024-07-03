# Tag

Sends an output when Vioneta Agro receives a tag scanned event for a configured tag id.

## Configuration

### Tags

- Type: `array`

An array of tag ids to monitor for tag scanned events.

### Devices

- Type: `array`

An array of device ids to check when a configured tag is scanned.

### Expose as

- Type: `string`

When an entity is selected a switch entity will be created in Vioneta Agro. Turning on and off this switch will disable/enable the nodes in Node-RED.

## Outputs

Value types:

- `event data`: full event object
- `tag id`: tag id of the tag that was scanned.
- `config`: config properties of the node

### event object

- Type: `object`

| Field     | Description                                         |
| --------- | --------------------------------------------------- |
| device_id | ID of the device that scanned the tag               |
| tag_id    | ID of the tag that was scanned                      |
| tag_name  | Vioneta Agro name of the tag that was scanned       |
| user_id   | Vioneta Agro user ID on device that scanned the tag |
