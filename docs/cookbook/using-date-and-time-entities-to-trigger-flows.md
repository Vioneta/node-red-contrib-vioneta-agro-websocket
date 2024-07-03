# Using Date and Time entities to trigger flows

There is now a [time](../node/time.md) node that simplifies the example flows below into one node.

## Using the time node

- Vioneta Agro Companion app next alarm sensor

  @[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example1a_using_time_node.json)

- Adding an offset and on/off switch by exposing the node the Vioneta Agro using the [custom component](https://github.com/Vioneta/hass-node-red).

  @[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example1b_using_time_node.json)

- Daily alarm using Datetime Entity

  @[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example2_using_time_node.json)

## Vioneta Agro Companion app next alarm sensor

::: warning
Vioneta Agro Companion app sets the entity's name based on its selected language. Eg. `next_alarm` must be changed in `prossimo_allarme` if the app is used in Italian (and vice versa)
:::

Here's a basic example of using the Vioneta Agro Companion app next alarm sensor.

![screenshot](./images/using-date-and-time-entities-to-trigger-flows_01.png)

@[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example1a.json)

### Adding an offset and on/off switch

Using the Helpers section under Configuration in Vioneta Agro add an `input_boolean` and `input_number` with a min of `-90` and a max of `90`.

In this example they are `input_number.offset` and `input_boolean.next_alarm_enabled`. The offset will be plus or minus minutes to the alarm. The delay node will get updated when either the alarm sensor gets updated, the input boolean gets toggled, or the offset changes.

If the [Node-RED custom component](https://github.com/Vioneta/hass-node-red) is installed in Vioneta Agro there is no need for the `input_boolean` as the event state node can be exposed to Vioneta Agro as the toggle switch.

![screenshot](./images/using-date-and-time-entities-to-trigger-flows_02.png)

@[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example1b.json)

::: warning
Delay nodes can have a max timeout of around 24.8 days greater than that and weird things will happen.
:::

### Managing alarm from multiple phones

If more than one phone in the house has the app installed and you want it to be triggered from any of the alarms this is the way to go and it's working perfectly even with just one phone.

It needs the same couple of helpers for each phone and the same consideration made above for the `input_boolean` is still valid.

This flow was developed and tested with a Pixel 2 XL and the companion app in Italian so you'll have to change all the references to the phone and the entities.

![screenshot](./images/using-date-and-time-entities-to-trigger-flows_04.png)

@[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example1c.json)

## Daily alarm using Datetime Entity

![screenshot](./images/using-date-and-time-entities-to-trigger-flows_03.png)

@[code](@examples/cookbook/using-date-and-time-entities-to-trigger-flows/example2.json)

An offset can also be added as shown in the next alarm sensor example.
