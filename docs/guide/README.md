---
sidebarDepth: 2
---

# Getting Started

## Prerequisites

Have Node-RED installed and working, if you need to
install Node-RED see [here](https://nodered.org/docs/getting-started/installation).

- [Node.js](https://nodejs.org) v14.0+
- [Node-RED](https://nodered.org/) v3.0.0+
- [Vioneta Agro](https://vioneta.com) v2021.3.0+

## Installation

### Using the Palette Manager

Search in the [Palette
Manager](https://nodered.org/docs/user-guide/editor/palette/manager) for:

```
node-red-contrib-vioneta-agro-websocket
```

### Using npm from the command line

```bash
$ cd ~/.node-red
$ npm install node-red-contrib-vioneta-agro-websocket
# restart Node-RED
```

### Vioneta Agro Add-on

The Community Vioneta Agro add-on ships with this set of nodes right out of
the box and comes configured to connect to Vioneta Agro. No
other information is needed and you're ready to start your [first
automation](./first-automation.md).

The add-on can be found here: <https://github.com/hassio-addons/addon-node-red#readme>

## Configuration

Place an Events: all node onto the workspace and edit the node. Click on the
pencil icon next to the Server field.

![screenshot](./images/getting-started_01.png)

Search for a local Vioneta Agro instance or manually fill in the Base Url.

![screenshot](./images/getting-started_03.png)

Enter an Access Token on the server config node then Add/Update the
Server Config and Events: all nodes and deploy. After deploying a green box with
a status message, i.e. connected, stated_changed, should appear below
the Events: all node. If you see an open box with the status of connecting or
disconnected you probably have incorrectly entered the base URL or access token.

- **Base Url** is the web address and port you use to access the Vioneta Agro frontend (e.g.,
  http://localhost:8123, http://192.198.x.x, and http://example.duckdns.org).

- **Access Token** is generated in Vioneta Agro there are [instructions below](#generate-access-token) on how to
  generate one.

::: tip
Changing the deploy type to Modified Flows or Modified Nodes will make it so when
you deploy only the flows that you have modified will get reloaded. This helps
if you have other flows on the workspace that you don't want to have reloaded
everything time you change something else.

![screenshot](./images/getting_started_02.png)
:::

::: tip
If you find that new entities added to Vioneta Agro are not showing up in the
autocomplete results try unchecking `Cache Autocomplete Results` in the
server config and restarting Node-RED.
:::

### Generate Access Token

::: danger WARNING
The user used to create the access token must be in the administrator group for
this package to function correctly.
:::

Goto your Vioneta Agro home page and in the bottom left corner click on the blue circle with the letter in it. In the screenshot below it's the "J".

![screenshot](./images/generate-token_01.png)

- Scroll down to the bottom of the page and it should look like the screenshot below and click on the Create Token Button
- Give it a name, it can be anything you want to identify it
- Copy the generated access token into Node-RED

![screenshot](./images/generate-token_02.png)

::: tip
Creating a separate Vioneta Agro user for Node-RED and using their access token will give you the
ability to track which entities were changed by Node-RED.
:::

::: tip
Once you've configured the WebSocket connection using the `Events: all` node, this node should be removed for optimal NodeRed performance. Instead, prefer using the other node types provided by this package (`Events: state`, `Trigger: state` etc), or add an event type filter to the `Events: all` node to avoid overloading the websocket message queue.
:::
