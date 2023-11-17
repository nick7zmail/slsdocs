import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.f1c0562b.js";const m=JSON.parse('{"title":"Additional message structure of the SLS Zigbee Gateway","description":"","frontmatter":{},"headers":[],"relativePath":"en/slscommand.md","filePath":"en/slscommand.md"}'),o={name:"en/slscommand.md"},n=s('<h1 id="additional-message-structure-of-the-sls-zigbee-gateway" tabindex="-1">Additional message structure of the SLS Zigbee Gateway <a class="header-anchor" href="#additional-message-structure-of-the-sls-zigbee-gateway" aria-label="Permalink to &quot;Additional message structure of the SLS Zigbee Gateway&quot;">​</a></h1><p>The data are presented in the format ** topic {payload} **</p><h2 id="reboot" tabindex="-1">Reboot <a class="header-anchor" href="#reboot" aria-label="Permalink to &quot;Reboot&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ZigBeeXXXX/reboot {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ZigBeeXXXX/reboot {}</span></span></code></pre></div><h2 id="gateway-backlight-management" tabindex="-1">Gateway backlight management <a class="header-anchor" href="#gateway-backlight-management" aria-label="Permalink to &quot;Gateway backlight management&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ZigBeeXXXX/led {“mode”: ”manual”, ”hex”: ”#FFFFFF”}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ZigBeeXXXX/led {“mode”: ”manual”, ”hex”: ”#FFFFFF”}</span></span></code></pre></div><h2 id="sensor-friendly-name-changing" tabindex="-1">Sensor friendly_name changing <a class="header-anchor" href="#sensor-friendly-name-changing" aria-label="Permalink to &quot;Sensor friendly_name changing&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ZigBeeXXXX/bridge/config/rename {&quot;old&quot;: &quot;0x00158D0001&quot;, &quot;new&quot;: &quot;water3&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ZigBeeXXXX/bridge/config/rename {&quot;old&quot;: &quot;0x00158D0001&quot;, &quot;new&quot;: &quot;water3&quot;}</span></span></code></pre></div>',8),i=[n];function l(c,r,d,p,h,g){return a(),t("div",null,i)}const b=e(o,[["render",l]]);export{m as __pageData,b as default};
