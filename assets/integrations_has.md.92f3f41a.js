import{_ as t,a}from"./chunks/int_ha_discovery.4fc9d023.js";import{_ as e,o as s,c as r,Q as o}from"./chunks/framework.6d94f49f.js";const k=JSON.parse('{"title":"Интеграция с Home Assistant","description":"","frontmatter":{},"headers":[],"relativePath":"integrations/has.md","filePath":"integrations/has.md"}'),i={name:"integrations/has.md"},n=o('<h1 id="интеграция-с-home-assistant" tabindex="-1">Интеграция с Home Assistant <a class="header-anchor" href="#интеграция-с-home-assistant" aria-label="Permalink to &quot;Интеграция с Home Assistant&quot;">​</a></h1><p>Шлюз SLS может быть легко интегрирован с системой домашней автоматизации <a href="www.home-assistant.io">Home Assistant</a>.</p><p><img src="'+t+'" alt="koridor"></p><h2 id="подготовительные-меропрития" tabindex="-1">Подготовительные меропрития <a class="header-anchor" href="#подготовительные-меропрития" aria-label="Permalink to &quot;Подготовительные меропрития&quot;">​</a></h2><p>Home Assistant интегрируется с SLS по протоколу MQTT (MQ Telemetry Transport).</p><p>Необходимо подготовить mosqutto брокер на <a href="https://robot-on.ru/articles/ystanovka-mqtt-brokera-mosquitto-raspberry-orange-pi" target="_blank" rel="noreferrer">raspberry Pi</a>, <a href="https://smartideal.net/ustanovka-i-zapusk-mqtt-brokera-mosquitto/" target="_blank" rel="noreferrer">linux</a> или <a href="https://mosquitto.org/download/" target="_blank" rel="noreferrer">Windows</a></p><h2 id="discovery" tabindex="-1">Discovery <a class="header-anchor" href="#discovery" aria-label="Permalink to &quot;Discovery&quot;">​</a></h2><p>Режим Discovery позволяет автоматически добавлять в систему новые устройства. Устройства в HAS создаются в момент первой записи состояния. Если устройства были сопряжены до включения данной настройки, необходимо провести процедуру пересопряжения.</p><p>В меню <code>Settings -&gt; Link -&gt; MQTT Setup</code> настроить:</p><ul><li>включить чекбокс Home Assistant MQTT Discovery</li><li>указать топик НА: <code>homeassistant</code></li></ul><p><img src="'+a+'" alt="Home Assistant MQTT Discovery"></p>',11),l=[n];function c(m,p,h,_,d,u){return s(),r("div",null,l)}const b=e(i,[["render",c]]);export{k as __pageData,b as default};
