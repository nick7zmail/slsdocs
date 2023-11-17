import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.6d94f49f.js";const b=JSON.parse('{"title":"Подключение шлюза SLS в качестве удаленного координатора","description":"","frontmatter":{},"headers":[],"relativePath":"bridge_rus.md","filePath":"bridge_rus.md"}'),r={name:"bridge_rus.md"},o=t(`<h1 id="подключение-шлюза-sls-в-качестве-удаленного-координатора" tabindex="-1">Подключение шлюза SLS в качестве удаленного координатора <a class="header-anchor" href="#подключение-шлюза-sls-в-качестве-удаленного-координатора" aria-label="Permalink to &quot;Подключение шлюза SLS в качестве удаленного координатора&quot;">​</a></h1><p>С помоью bridge прошивки SLS шлюз можно использовать как беспроводной мост для подключения zigbee устройств к софтовому координатору <a href="https://www.zigbee2mqtt.io/how_tos/how_to_connect_to_a_remote_adapter.html" target="_blank" rel="noreferrer">zigbee2mqtt</a></p><p>Сылка на прошивку <a href="https://github.com/slsys/Gateway/tree/master/rom/2020.08.05d1-bridge.bin" target="_blank" rel="noreferrer">bridge</a>. Для подключения используйте порт 8881.</p><p>Пример файла конфигурации configuration.yaml:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">serial:</span></span>
<span class="line"><span style="color:#e1e4e8;">    port: &#39;tcp://192.168.1.13:8881&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">serial:</span></span>
<span class="line"><span style="color:#24292e;">    port: &#39;tcp://192.168.1.13:8881&#39;</span></span></code></pre></div>`,5),n=[o];function p(i,l,c,_,d,h){return a(),s("div",null,n)}const m=e(r,[["render",p]]);export{b as __pageData,m as default};