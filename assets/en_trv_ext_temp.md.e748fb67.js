import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.f1c0562b.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/trv_ext_temp.md","filePath":"en/trv_ext_temp.md"}'),s={name:"en/trv_ext_temp.md"},l=o(`<p>It is possible to use an external temperature sensor for TRV thermostat (Model TS0601).</p><ol><li><p>Set an object name in the <code>SB rule</code> column to the <code>temperature</code> state of the external temperature sensor. For example: <code>room1.temperature</code></p></li><li><p>Set the onChange script for that object in <code>init.lua</code>. For example:</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">obj.onChange(&#39;room1.temperature&#39;, &#39;room1_trv_calibration.lua&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">obj.onChange(&#39;room1.temperature&#39;, &#39;room1_trv_calibration.lua&#39;)</span></span></code></pre></div><ol start="3"><li>Add the script <code>room1_trv_calibration.lua</code>:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">trv = &quot;0x84FD27FFFE2Dxxxx&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">ext_temperature = obj.get(&quot;room1.temperature&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">ext_temperature = math.floor(ext_temperature * 10 + 0.5) / 10</span></span>
<span class="line"><span style="color:#e1e4e8;">local_temperature_calibration = zigbee.value(trv, &quot;local_temperature_calibration&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local_temperature_calibration = math.floor(local_temperature_calibration * 10 + 0.5) / 10</span></span>
<span class="line"><span style="color:#e1e4e8;">--[ Workaround: set local_temperature_calibration to update local_temperature ]</span></span>
<span class="line"><span style="color:#e1e4e8;">zigbee.set(trv, &quot;local_temperature_calibration&quot;, local_temperature_calibration)</span></span>
<span class="line"><span style="color:#e1e4e8;">local_temperature = zigbee.value(trv, &quot;local_temperature&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">local_temperature = math.floor(local_temperature * 10 + 0.5) / 10</span></span>
<span class="line"><span style="color:#e1e4e8;">if ext_temperature ~= local_temperature then</span></span>
<span class="line"><span style="color:#e1e4e8;">  local_temperature_calibration = local_temperature_calibration + ext_temperature - local_temperature</span></span>
<span class="line"><span style="color:#e1e4e8;">  zigbee.set(trv, &quot;local_temperature_calibration&quot;, local_temperature_calibration)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">trv = &quot;0x84FD27FFFE2Dxxxx&quot;</span></span>
<span class="line"><span style="color:#24292e;">ext_temperature = obj.get(&quot;room1.temperature&quot;)</span></span>
<span class="line"><span style="color:#24292e;">ext_temperature = math.floor(ext_temperature * 10 + 0.5) / 10</span></span>
<span class="line"><span style="color:#24292e;">local_temperature_calibration = zigbee.value(trv, &quot;local_temperature_calibration&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local_temperature_calibration = math.floor(local_temperature_calibration * 10 + 0.5) / 10</span></span>
<span class="line"><span style="color:#24292e;">--[ Workaround: set local_temperature_calibration to update local_temperature ]</span></span>
<span class="line"><span style="color:#24292e;">zigbee.set(trv, &quot;local_temperature_calibration&quot;, local_temperature_calibration)</span></span>
<span class="line"><span style="color:#24292e;">local_temperature = zigbee.value(trv, &quot;local_temperature&quot;)</span></span>
<span class="line"><span style="color:#24292e;">local_temperature = math.floor(local_temperature * 10 + 0.5) / 10</span></span>
<span class="line"><span style="color:#24292e;">if ext_temperature ~= local_temperature then</span></span>
<span class="line"><span style="color:#24292e;">  local_temperature_calibration = local_temperature_calibration + ext_temperature - local_temperature</span></span>
<span class="line"><span style="color:#24292e;">  zigbee.set(trv, &quot;local_temperature_calibration&quot;, local_temperature_calibration)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><p>Note update <code>trv = &quot;0x84FD27FFFE2Dxxxx&quot;</code> with ieeeAddr of your thermostat. Note update <code>ext_temperature = obj.get(&quot;room1.temperature&quot;)</code> with your object name.</p><ol start="4"><li>If you are using <a href="https://slsys.io/action/supported_devices.html?device=65" target="_blank" rel="noreferrer">this thermostat</a> note it does not report the current temperature (<code>local_temperature</code>) itself for now (30.10.2021). I recommend to add the following code to the minute timer <code>OneMinTimer.lua</code>:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if Event.Time.min % 15 == 0 then</span></span>
<span class="line"><span style="color:#e1e4e8;">  dofile(&quot;/int/room1_trv_calibration.lua&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if Event.Time.min % 15 == 0 then</span></span>
<span class="line"><span style="color:#24292e;">  dofile(&quot;/int/room1_trv_calibration.lua&quot;)</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><p>If your thermostat reports the current temperature (<code>local_temperature</code>), then do not add the timer and remove the following 2 lines from <code>room1_trv_calibration.lua</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">--[ Workaround: set local_temperature_calibration to update local_temperature ]</span></span>
<span class="line"><span style="color:#e1e4e8;">zigbee.set(trv, &quot;local_temperature_calibration&quot;, local_temperature_calibration)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">--[ Workaround: set local_temperature_calibration to update local_temperature ]</span></span>
<span class="line"><span style="color:#24292e;">zigbee.set(trv, &quot;local_temperature_calibration&quot;, local_temperature_calibration)</span></span></code></pre></div>`,10),n=[l];function r(p,c,i,u,_,m){return a(),t("div",null,n)}const h=e(s,[["render",r]]);export{b as __pageData,h as default};