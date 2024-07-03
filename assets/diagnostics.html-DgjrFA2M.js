import{_ as p,r as e,o as r,c,a as s,d as n,b as o,e as a}from"./app-DncVqQOV.js";const u="/node-red-contrib-vioneta-agro-websocket/assets/diagnostics_04-Df7nsYrl.png",l="/node-red-contrib-vioneta-agro-websocket/assets/diagnostics_05-BT6Gqs0E.gif",i="/node-red-contrib-vioneta-agro-websocket/assets/diagnostics_01-BGDg5hGH.png",k="/node-red-contrib-vioneta-agro-websocket/assets/diagnostics_02-BCb_i0sN.png",q="/node-red-contrib-vioneta-agro-websocket/assets/diagnostics_03-DLYbYdSd.png",d={},g=a('<h1 id="diagnostics-information" tabindex="-1"><a class="header-anchor" href="#diagnostics-information" aria-hidden="true">#</a> Diagnostics Information</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>To assist with troubleshooting, a button has been added to the Node-RED editor that will run a diagnostics flow and copy the output to the clipboard. This output can then be pasted into a GitHub issue or a support forum.</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Before version 0.62.0, the diagnostics flow was a separate flow that had to be imported into Node-RED. This flow is still available and can be found <a href="#before-version-0-62-0">here</a>.</p></div><p><img src="'+u+'" alt="screenshot of buton location"></p><p><img src="'+l+'" alt="gif for finding button"></p><h2 id="before-version-0-62-0" tabindex="-1"><a class="header-anchor" href="#before-version-0-62-0" aria-hidden="true">#</a> Before version 0.62.0</h2>',7),h={href:"https://nodered.org/docs/user-guide/editor/workspace/import-export",target:"_blank",rel:"noopener noreferrer"},f=a('<h3 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> Flow</h3><p><img src="'+i+`" alt="screenshot"></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;83159f9ffc81a5fd&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;inject&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;a3f996b014aea8a5&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;get environment info&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;props&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;repeat&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;crontab&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;once&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;onceDelay&quot;</span><span class="token operator">:</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token property">&quot;topic&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">226</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">608</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;11f9ee4206596633&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;607c82ab3a273e93&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;debug&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;a3f996b014aea8a5&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;copy info from debug tab&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;active&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;tosidebar&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token property">&quot;console&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;tostatus&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;complete&quot;</span><span class="token operator">:</span><span class="token string">&quot;payload&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;targetType&quot;</span><span class="token operator">:</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusVal&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;statusType&quot;</span><span class="token operator">:</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">582</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">608</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;11f9ee4206596633&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;http request&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;z&quot;</span><span class="token operator">:</span><span class="token string">&quot;a3f996b014aea8a5&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ret&quot;</span><span class="token operator">:</span><span class="token string">&quot;txt&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;paytoqs&quot;</span><span class="token operator">:</span><span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;url&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://localhost:1880/homeassistant/diagnostics&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;tls&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;persist&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;insecureHTTPParser&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;authType&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;senderr&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token property">&quot;headers&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;x&quot;</span><span class="token operator">:</span><span class="token number">390</span><span class="token punctuation">,</span><span class="token property">&quot;y&quot;</span><span class="token operator">:</span><span class="token number">608</span><span class="token punctuation">,</span><span class="token property">&quot;wires&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;607c82ab3a273e93&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>This flow can also be imported directly from the examples section in Node-RED.</p>`,4),b={href:"https://nodered.org/docs/user-guide/editor/workspace/import-export",target:"_blank",rel:"noopener noreferrer"},y=a('<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><ol><li><p>Import the flow into Node-RED.</p></li><li><p>Deploy the flow.</p></li><li><p>Click the <code>Inject</code> node to run the flow.</p></li></ol><p><img src="'+k+'" alt="screenshot of debug window"></p><ol start="4"><li>Copy the output from the <code>Debug</code> tab.</li></ol><p><img src="'+q+'" alt="screenshot of debug window"></p><ol start="5"><li>Paste the output into a GitHub issue or a support ticket.</li></ol>',6);function m(_,w){const t=e("ExternalLinkIcon");return r(),c("div",null,[g,s("p",null,[n("The supplied diagnostics flow serves as a valuable tool for collecting data about the runtime and the system environment. This flow can be "),s("a",h,[n("imported"),o(t)]),n(" into Node-RED and run. By doing so, it compiles crucial information regarding the runtime and the system environment, enabling users to easily share this data when addressing issues.")]),f,s("ul",null,[s("li",null,[s("a",b,[n("How to import a flow"),o(t)])])]),y])}const x=p(d,[["render",m],["__file","diagnostics.html.vue"]]);export{x as default};
