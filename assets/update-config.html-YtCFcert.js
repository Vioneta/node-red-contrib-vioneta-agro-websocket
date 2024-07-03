import{_ as k,r as t,o as u,c as i,a as s,d as n,b as a,w as o,e}from"./app-DncVqQOV.js";const y="/node-red-contrib-vioneta-agro-websocket/assets/update_config_use01-BXE5av9O.png",d={},g=e('<h1 id="update-config" tabindex="-1"><a class="header-anchor" href="#update-config" aria-hidden="true">#</a> Update Config</h1><p>This node allows you to update the Vioneta Agro configuration of a node from within a flow. This is useful if you want to change the configuration of a node based on the state of an entity or some other event.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> Name</h3><ul><li>Type: <code>string</code></li></ul><p>A name for the node.</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h3><ul><li>Type: <code>string</code></li></ul>',8),h=s("h3",{id:"entity-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#entity-config","aria-hidden":"true"},"#"),n(" Entity Config")],-1),f=s("ul",null,[s("li",null,[n("Type: "),s("code",null,"string")])],-1),m=s("code",null,"payload.id",-1),b=e(`<h2 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs" aria-hidden="true">#</a> Inputs</h2><p>All properties must be under <code>msg.payload</code> and will be ignored if not.</p><h3 id="example-input" tabindex="-1"><a class="header-anchor" href="#example-input" aria-hidden="true">#</a> Example input</h3><p>Example of the <code>msg.payload</code> object.</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d9d27ac6b4ebf78f&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mdi:lightbulb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Light&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;entityPicture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/local/images/my_light.png&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>Type: <code>string</code></li></ul><p>The node id of an entity config.</p><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><ul><li>Type: <code>string</code></li></ul><p>The icon to use for the entity.</p><h3 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1" aria-hidden="true">#</a> name</h3><ul><li>Type: <code>string</code></li></ul><p>The friendly name to use for the entity.</p><h3 id="entitypicture" tabindex="-1"><a class="header-anchor" href="#entitypicture" aria-hidden="true">#</a> entityPicture</h3><ul><li>Type: <code>string</code></li></ul><p>The entity picture to use for the entity.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>`,18),_={href:"https://vioneta.github.io/node-red-contrib-vioneta-agro-websocket/node/update-config.html#examples",target:"_blank",rel:"noopener noreferrer"},v=s("h4",{id:"usage-example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage-example","aria-hidden":"true"},"#"),n(" Usage example")],-1),x=s("p",null,[s("img",{src:y,alt:"screenshot"})],-1),T=s("div",{class:"language-json","data-ext":"json"},[s("pre",{class:"language-json"},[s("code",null,[s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"f74eb5b7233cf386"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"inject"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"props"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"payload"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"topic"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"vt"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"str"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"repeat"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"crontab"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"once"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"onceDelay"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0.1"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"topic"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payload"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payloadType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"date"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"828"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"192"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"f01a6d954835e535"'),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"f01a6d954835e535"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"ha-sensor"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"example one"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"entityConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"e4293de95073f8cd"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"version"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"state"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"$round($random() * 100, 0)"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"stateType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"jsonata"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"attributes"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"inputOverride"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"allow"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"outputProperties"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"1002"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"192"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"fa343985973ac02b"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"ha-update-config"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"server"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"bf5874816710d0c7"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"entityConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"d18ff4919779da55"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"version"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"outputProperties"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"1016"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"288"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"d9d27ac6b4ebf78f"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"inject"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"override id"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"props"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"payload"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"topic"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"vt"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"str"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"repeat"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"crontab"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"once"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"onceDelay"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0.1"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"topic"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payload"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},`"(\\t   $icons := [\\t       'mdi:home-assistant',\\t       'mdi:home',\\t       'mdi:home-outline',\\t       'mdi:home-variant',\\t       'mdi:home-variant-outline',\\t       'mdi:home-city'\\t       ];\\t   $simpsons := [\\t       \\"homer\\",\\t       \\"marge\\",\\t       \\"bart\\",\\t       \\"lisa\\",\\t       \\"maggie\\"\\t   ];\\t   $character := $shuffle($simpsons)[0];\\t   {\\t       \\"name\\": $character,\\t       \\"id\\": \\"e4293de95073f8cd\\",\\t       \\"icon\\": $shuffle($icons)[0],\\t        \\"entityPicture\\": \\"/local/\\" & $character & \\".png\\"\\t       }\\t)"`),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payloadType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"jsonata"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"828"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"336"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"fa343985973ac02b"'),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"4171499cb42d4c08"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"inject"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"use default id"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"props"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"payload"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"topic"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"vt"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"str"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"repeat"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"crontab"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"once"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"onceDelay"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0.1"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"topic"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payload"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"(\\t    $simpsons := [\\"homer\\", \\"marge\\", \\"bart\\", \\"lisa\\", \\"maggie\\"];\\t    {\\"name\\": $shuffle($simpsons)[0] ,\\"icon\\":\\"\\"}\\t)"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payloadType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"jsonata"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"834"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"288"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"fa343985973ac02b"'),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"94e86f1c0b4f113d"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"ha-sensor"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"example two"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"entityConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"d18ff4919779da55"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"version"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"state"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"$round($random() * 100, 0)"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"stateType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"jsonata"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"attributes"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"inputOverride"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"allow"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"outputProperties"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"1002"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"240"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0d31aa0621b4fe6f"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"inject"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"z"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"0cd8900387d67b70"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"props"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"payload"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"p"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"topic"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"vt"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"str"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"repeat"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"crontab"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"once"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"onceDelay"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"0.1"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"topic"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payload"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"payloadType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"date"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"x"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"828"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"y"'),s("span",{class:"token operator"},":"),s("span",{class:"token number"},"240"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"wires"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"94e86f1c0b4f113d"'),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"e4293de95073f8cd"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"ha-entity-config"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"server"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"bf5874816710d0c7"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"deviceConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"example one"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"version"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"6"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"entityType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"sensor"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"haConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"name"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"Node-RED example one"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"icon"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"entity_category"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"entity_picture"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"device_class"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"unit_of_measurement"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"state_class"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"resend"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"debugEnabled"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"id"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"d18ff4919779da55"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"type"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"ha-entity-config"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"server"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"bf5874816710d0c7"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"deviceConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"name"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"example two"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"version"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"6"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"entityType"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"sensor"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"haConfig"'),s("span",{class:"token operator"},":"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"name"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"Node-RED example one"'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"icon"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"entity_category"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"entity_picture"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"device_class"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"unit_of_measurement"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"‎ "'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),s("span",{class:"token punctuation"},"{"),s("span",{class:"token property"},'"property"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'"state_class"'),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"value"'),s("span",{class:"token operator"},":"),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"resend"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},","),s("span",{class:"token property"},'"debugEnabled"'),s("span",{class:"token operator"},":"),s("span",{class:"token boolean"},"false"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),n(`
`)])])],-1);function w(j,q){const p=t("RouterLink"),c=t("ExternalLinkIcon"),r=t("InfoPanelOnly"),l=t("DocsOnly");return u(),i("div",null,[g,s("p",null,[n("The node id of a "),a(p,{to:"/node/config-server.html"},{default:o(()=>[n("Server Config")]),_:1}),n(" node.")]),h,f,s("p",null,[n("The node id of an "),a(p,{to:"/node/entity-config.html"},{default:o(()=>[n("entity config")]),_:1}),n(". This can be overridden by the "),m,n(" property on the msg object.")]),b,a(r,null,{default:o(()=>[s("p",null,[s("a",_,[n("link"),a(c)])])]),_:1}),a(l,null,{default:o(()=>[v,x,T]),_:1}),n(" ``` ")])}const C=k(d,[["render",w],["__file","update-config.html.vue"]]);export{C as default};
