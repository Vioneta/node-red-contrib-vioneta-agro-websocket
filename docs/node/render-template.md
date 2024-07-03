# Render Template

Can either set the template in the node configuration or pass in the `msg.template` property of the incoming message. Passing template via `msg.template` will override the template string set in node configuration.

::: tip NOTE:
The node will output any Vioneta Agro API errors for catching with the 'catch-all'
node
:::

## Configuration

### template

- Type: `string`

Jinja template to be rendered, discarded if `msg.template` is provided via input msg

### Template Location

Customizable location to output original template

### Results

Customizable location to output rendered template

## Inputs

### template

- Type: `string`

Jinja template to be rendered

## Outputs

### template

- Type: `string`

The original template sent to Vioneta Agro for rendering

### payload

- Type: `string`

The rendered template

## References

- [Vioneta Agro Template Docs](https://vioneta.com/docs/configuration/templating/)
- [Jinja Docs](http://jinja.pocoo.org/docs/dev/templates/)
