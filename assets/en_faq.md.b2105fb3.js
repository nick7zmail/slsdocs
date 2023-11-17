import{_ as a,o,c as i,Q as t,k as e}from"./chunks/framework.f1c0562b.js";const g=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"en/faq.md","filePath":"en/faq.md"}'),s={name:"en/faq.md"},n=t(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="question-what-equipment-is-needed-for-the-2530-gateway" tabindex="-1">Question: What equipment is needed for the 2530 gateway <a class="header-anchor" href="#question-what-equipment-is-needed-for-the-2530-gateway" aria-label="Permalink to &quot;Question: What equipment is needed for the 2530 gateway&quot;">​</a></h2><p>Answer: A selection from Aliexpress for assembling a gateway without soldering:</p><ol><li><a href="http://ali.pub/3sy77r" target="_blank" rel="noreferrer">ESP32 module 16Mb Flash 8Mb SRAM for firmware via OTA or ESP32 module with 4Mb flash for firmware without OTA</a></li><li><a href="http://ali.pub/3sy5g6" target="_blank" rel="noreferrer">CC2530 module without an amplifier but with an external antenna</a></li><li><a href="http://ali.pub/3sy6nx" target="_blank" rel="noreferrer">Debugger CC debugger for CC2530 module firmware</a></li><li><a href="http://ali.pub/3sy6y1" target="_blank" rel="noreferrer">A set of wires</a></li></ol><h2 id="question-what-equipment-is-needed-for-the-2538-gateway" tabindex="-1">Question: What equipment is needed for the 2538 gateway? <a class="header-anchor" href="#question-what-equipment-is-needed-for-the-2538-gateway" aria-label="Permalink to &quot;Question: What equipment is needed for the 2538 gateway?&quot;">​</a></h2><p>Answer: A selection from Aliexpress for assembling a gateway with a minimum of soldering (wiring only):</p><ol><li><a href="http://ali.pub/485yaa" target="_blank" rel="noreferrer">ESP32 16Mb Flash 8Mb SRAM module for OTA firmware or ESP32 module with 4Mb flash for OTA-free firmware</a></li><li><a href="http://ali.pub/485zeq" target="_blank" rel="noreferrer">CC2538 module with CC2592 amplifier</a></li><li><a href="http://ali.pub/485zyk" target="_blank" rel="noreferrer">J-Link V9 Programmer</a></li><li><a href="http://ali.pub/3sy6y1" target="_blank" rel="noreferrer">A set of wires</a></li></ol><h2 id="question-why-is-a-ss2538-based-gateway-better-than-ss2530" tabindex="-1">Question: Why is a ss2538-based gateway better than ss2530? <a class="header-anchor" href="#question-why-is-a-ss2538-based-gateway-better-than-ss2530" aria-label="Permalink to &quot;Question: Why is a ss2538-based gateway better than ss2530?&quot;">​</a></h2><p>Answer: Modules based on ss2530 have a limit on the number of direct connections (up to 10pcs, depending on the firmware). The ss2530 also has a limited amount of available memory. Chika SDK is out of date. These problems are solved on the new chips <a href="https://github.com/Koenkk/zigbee2mqtt/issues/1568" target="_blank" rel="noreferrer">ss2538</a> and <a href="https://github.com/Koenkk/zigbee2mqtt/issues/1429" target="_blank" rel="noreferrer">ss2652r</a></p><h2 id="question-are-there-any-differences-in-the-operation-of-the-gateway-on-chips-from-ti-and-nxp" tabindex="-1">Question: Are there any differences in the operation of the gateway on chips from TI and NXP? <a class="header-anchor" href="#question-are-there-any-differences-in-the-operation-of-the-gateway-on-chips-from-ti-and-nxp" aria-label="Permalink to &quot;Question: Are there any differences in the operation of the gateway on chips from TI and NXP?&quot;">​</a></h2><p>Answer: The SDK is significantly different.</p><h2 id="question-is-it-possible-to-purchase-finished-equipment" tabindex="-1">Question: Is it possible to purchase finished equipment? <a class="header-anchor" href="#question-is-it-possible-to-purchase-finished-equipment" aria-label="Permalink to &quot;Question: Is it possible to purchase finished equipment?&quot;">​</a></h2><p>Answer: At present, prototypes for individual applications are being distributed. After debugging the whole process, it will be possible to purchase finished equipment in the online store.</p><h2 id="question-what-firmware-to-choose-for-the-zigbee-module" tabindex="-1">Question: What firmware to choose for the ZigBee module <a class="header-anchor" href="#question-what-firmware-to-choose-for-the-zigbee-module" aria-label="Permalink to &quot;Question: What firmware to choose for the ZigBee module&quot;">​</a></h2><p>Answer: It all depends on what module and amplifier you have. The firmware must necessarily be based on Z-Stack 3.0.</p><p>For firmware via CC Debugger:</p><p><a href="https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.0.x/bin/CC2530_20190523.zip" target="_blank" rel="noreferrer">Firmware for CC2530 module without amplifier</a></p><p><a href="https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.0.x/bin/CC2530_CC2591_20190523.zip" target="_blank" rel="noreferrer">Firmware for CC2530 module with CC2591 amplifier</a></p><p><a href="https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.0.x/bin/CC2530_CC2592_20190523.zip" target="_blank" rel="noreferrer">Firmware for CC2530 module with CC2592 amplifier</a></p><p>For firmware via J-Link: <a href="https://github.com/antst/CC2538-ZNP-Coordinator-firmware/files/3678300/CC2538ZNP-UART-without-SBL-cc2592.hex.zip" target="_blank" rel="noreferrer">Firmware for CC2538 module with CC2592 amplifier</a></p><h2 id="question-how-to-flash-esp32" tabindex="-1">Question: How to flash ESP32 <a class="header-anchor" href="#question-how-to-flash-esp32" aria-label="Permalink to &quot;Question: How to flash ESP32&quot;">​</a></h2><p>For initial firmware:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. Download the archive with the flasher (full)</span></span>
<span class="line"><span style="color:#e1e4e8;">2. Connect the ESP32 to the computer via USB</span></span>
<span class="line"><span style="color:#e1e4e8;">3. Run the firmware via Flash.bat</span></span>
<span class="line"><span style="color:#e1e4e8;">4. Sometimes the batch file does not correctly determine the port, then it can be added to the batch file --port COM7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. Download the archive with the flasher (full)</span></span>
<span class="line"><span style="color:#24292e;">2. Connect the ESP32 to the computer via USB</span></span>
<span class="line"><span style="color:#24292e;">3. Run the firmware via Flash.bat</span></span>
<span class="line"><span style="color:#24292e;">4. Sometimes the batch file does not correctly determine the port, then it can be added to the batch file --port COM7</span></span></code></pre></div><p>For further updates:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. Download the archive with the current firmware version</span></span>
<span class="line"><span style="color:#e1e4e8;">2. Unzip it to any folder</span></span>
<span class="line"><span style="color:#e1e4e8;">3. In the web interface, select the firmware.bin file on the Update page</span></span>
<span class="line"><span style="color:#e1e4e8;">4. Click Start update.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. Download the archive with the current firmware version</span></span>
<span class="line"><span style="color:#24292e;">2. Unzip it to any folder</span></span>
<span class="line"><span style="color:#24292e;">3. In the web interface, select the firmware.bin file on the Update page</span></span>
<span class="line"><span style="color:#24292e;">4. Click Start update.</span></span></code></pre></div><h2 id="question-how-to-flash-cc2530" tabindex="-1">Question: How to flash CC2530 <a class="header-anchor" href="#question-how-to-flash-cc2530" aria-label="Permalink to &quot;Question: How to flash CC2530&quot;">​</a></h2><p>Answer: <a href="https://modkam.ru/?p=1188" target="_blank" rel="noreferrer">Instruction 1</a></p><h2 id="question-how-to-flash-cc2538" tabindex="-1">Question: How to flash CC2538 <a class="header-anchor" href="#question-how-to-flash-cc2538" aria-label="Permalink to &quot;Question: How to flash CC2538&quot;">​</a></h2><p>Answer: <a href="https://modkam.ru/?p=1188" target="_blank" rel="noreferrer">Instruction 1</a><a href="https://myzigbee.ru/books/%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B8/page/%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D1%81%D1%812538-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-j-link" target="_blank" rel="noreferrer">Instruction 2</a></p><h2 id="question-how-to-add-devices" tabindex="-1">Question: How to add devices. <a class="header-anchor" href="#question-how-to-add-devices" aria-label="Permalink to &quot;Question: How to add devices.&quot;">​</a></h2><p>Answer: There are two ways:</p><ol><li>Enable the join mode on the ZigBee page in the web interface (Start Join button)</li><li>You can send the value true/false to the topic ZigBeeGW/bridge/config/permit_join</li></ol><h2 id="question-how-to-add-new-zigbee-devices" tabindex="-1">Question: How to add new Zigbee devices. <a class="header-anchor" href="#question-how-to-add-new-zigbee-devices" aria-label="Permalink to &quot;Question: How to add new Zigbee devices.&quot;">​</a></h2><p>Answer: SLS Zigbee BLE Gateway automatically pairs with Zigbee devices. After pairing, it appears in the list of devices on the Zigbee tab. Green color indicates devices that already have a converter, and with which work has already been tested. Devices for which the converter is not yet available are marked in red. You can help with adding a device by providing screenshots of the device’s page and the pairing log on the <a href="https://github.com/slsys/Gateway/issues" target="_blank" rel="noreferrer">ISSUE page</a> of the project. Open a new topic adding a new device with the name of the device.</p><h2 id="question-how-to-add-new-ble-devices" tabindex="-1">Question: How to add new BLE devices. <a class="header-anchor" href="#question-how-to-add-new-ble-devices" aria-label="Permalink to &quot;Question: How to add new BLE devices.&quot;">​</a></h2><p>Answer: SLS Zigbee BLE Gateway can also work with BLE devices. Adding BLE devices requires immediate device availability. To help with the addition of new ones, you can only send the necessary equipment.</p><h2 id="question-how-to-set-the-rules-simplebind" tabindex="-1">Question: How to set the rules <a href="/simplebind">SimpleBind</a> <a class="header-anchor" href="#question-how-to-set-the-rules-simplebind" aria-label="Permalink to &quot;Question: How to set the rules [SimpleBind](/simplebind.md)&quot;">​</a></h2><p>Answer: There are two recording formats:</p><ol><li>DstDeviceId</li><li>Cond, DstDeviceId, DstStateName, DstStateValue (Separated by commas, spaces are allowed) Where: • Cond - the value at which the rule will be executed • DstDeviceId - the identifier of the device to which we will send the command • DstStateName - The name of the state we will send • DstStateValue - The value we will send You can use comparison signs in front of the value in the Cond field. (&gt;, &lt;, =,!,&gt; =, &lt;=,! =, &lt;&gt;) You can use several rules, separating them with a semicolon. Examples: • single, lamp_1, state, TOGGLE - For a button, when pressed once, switches lamp_1 mode • ON, 0x00158D00007350D9, state, OFF; OFF, 0xABCD, state, ON - For the switch, inverts the mode for the relay • single, door_lock, state, LOCK; double, door_lock, state, UNLOCK - Closes a lock on a click, opens on a double • torsher_lamp - Sends the current state to torsher_lamp • &lt;40, humidifier, state, ON; &gt; 60, humidifier, state, OFF - For a humidity sensor, turns on the humidifier if humidity is less than 40% and turns off if more than 60%</li></ol><p>Example: left, PTVO, state_bottom_left, TOGGLE; right, PTVO, state_bottom_right, TOGGLE</p><h2 id="question-how-to-set-the-color-of-a-light-bulb-or-rgb-controller" tabindex="-1">Question: How to set the color of a light bulb or RGB controller <a class="header-anchor" href="#question-how-to-set-the-color-of-a-light-bulb-or-rgb-controller" aria-label="Permalink to &quot;Question: How to set the color of a light bulb or RGB controller&quot;">​</a></h2><p>Answer: It is necessary to send an object containing one of the options for setting the color to the color json state:</p>`,42),r=e("ol",null,[e("li",{"x:":"","0.8,":"","y:":"","0.04":""},"In the native CIE 1931 format:"),e("li",{"r:":"","0,":"","g:":"","255,":"","b:":"",0:""},"In RGB format:"),e("li",{"hex:":"",id:"RRGGBB"},"In RGB HEX format:"),e("li",{"hue:":"","23525,":"","saturation:":"",80:""},"Tone, Saturation:"),e("li",{"hue:":"",1665:""},"Tone:"),e("li",{"saturation:":"",220:""},"Saturation:")],-1),l=t(`<p>Example: Sending to the topic ZigBeeGW/0x00158D00011D8CB1/set values: {&quot;color&quot;: {&quot;r&quot;: 0, &quot;g&quot;: 255, &quot;b&quot;: 0}}</p><h2 id="question-how-to-set-the-color-temperature-of-a-light-bulb" tabindex="-1">Question: How to set the color temperature of a light bulb <a class="header-anchor" href="#question-how-to-set-the-color-temperature-of-a-light-bulb" aria-label="Permalink to &quot;Question: How to set the color temperature of a light bulb&quot;">​</a></h2><p>Answer: You must send the value in Mired units to the color_temp state. The formula for the conversion: M = 1,000,000 / K where K is the temperature in Kelvin.</p><p>Example: Color temperature 4000K, set the value ZigBeeGW/lamp_1/set/color_temp to 250</p><h2 id="question-how-to-control-hardware-leds" tabindex="-1">Question: How to control hardware LEDs? <a class="header-anchor" href="#question-how-to-control-hardware-leds" aria-label="Permalink to &quot;Question: How to control hardware LEDs?&quot;">​</a></h2><p>Answer: It is necessary to send the following content to the ZigBeeGW/led topic in JSON: <code>{&quot;mode&quot;: &quot;manual&quot;, &quot;hex&quot;: &quot;#FFFFFF&quot;}</code> (this should display white color) If you use WS2812, you can specify in hardware settings:</p><ul><li>the Number addressable leds.</li><li>the data pin you want tu use (put it in place of &quot;Led Red&quot;).</li></ul><p>mode - sets the mode; valid values ​​are off, manual and auto<br> hex - color value in RGB Hex format.</p><h2 id="question-what-do-the-numbers-in-the-pairing-stages-mean" tabindex="-1">Question: What do the numbers in the pairing stages mean? <a class="header-anchor" href="#question-what-do-the-numbers-in-the-pairing-stages-mean" aria-label="Permalink to &quot;Question: What do the numbers in the pairing stages mean?&quot;">​</a></h2><p>Answer:</p><p>0 - announcement received, interview starts</p><p>1 - received device description</p><p>2 - the number of active endpoints is received</p><p>3 - received device clusters</p><p>4- received model</p><p>Many Xiaomi devices will report the model themselves, so they work without completing the entire interview cycle.</p><h2 id="question-how-to-add-a-new-unsupported-zigbee-device" tabindex="-1">Question: How to add a new unsupported Zigbee device? <a class="header-anchor" href="#question-how-to-add-a-new-unsupported-zigbee-device" aria-label="Permalink to &quot;Question: How to add a new unsupported Zigbee device?&quot;">​</a></h2><p>Answer: Many devices can be added remotely by the developers of the SLS ZGW project. The likelihood of adding new devices increases if there is a converter in <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/converters/fromZigbee.js" target="_blank" rel="noreferrer">zigbee2mqtt</a></p><p>Also an indisputable advantage for adding a new device is the interaction protocol in z2m. It can be obtained from zigbee2mqtt in zigbee debug mode with the following combination:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cd/opt/zigbee2mqtt</span></span>
<span class="line"><span style="color:#e1e4e8;">DEBUG = zigbee-herdsman: zStack: * npm start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cd/opt/zigbee2mqtt</span></span>
<span class="line"><span style="color:#24292e;">DEBUG = zigbee-herdsman: zStack: * npm start</span></span></code></pre></div><p>Next, you need to perform the necessary actions with the device and save the screen output. These messages can be added to <a href="https://github.com/slsys/Gateway/issues" target="_blank" rel="noreferrer">issue</a> or using the <a href="https://pastebin.com" target="_blank" rel="noreferrer">pastebin service</a></p><h2 id="question-how-do-i-switch-gateway-to-wifi-access-point-mode" tabindex="-1">Question: How do i switch gateway to wifi access point mode? <a class="header-anchor" href="#question-how-do-i-switch-gateway-to-wifi-access-point-mode" aria-label="Permalink to &quot;Question: How do i switch gateway to wifi access point mode?&quot;">​</a></h2><p>Answer: You need to hold the button for 3-5 seconds when power is applied.</p>`,23),h=[n,r,l];function d(p,c,u,f,m,w){return o(),i("div",null,h)}const q=a(s,[["render",d]]);export{g as __pageData,q as default};