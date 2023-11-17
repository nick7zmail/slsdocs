import{_ as s,o as e,c as a,Q as t,k as l}from"./chunks/framework.6d94f49f.js";const F=JSON.parse('{"title":"Модуль управления освещением","description":"","frontmatter":{},"headers":[],"relativePath":"devices/din_mini_lighting_rus.md","filePath":"devices/din_mini_lighting_rus.md"}'),n={name:"devices/din_mini_lighting_rus.md"},p=t(`<h1 id="модуль-управления-освещением" tabindex="-1">Модуль управления освещением <a class="header-anchor" href="#модуль-управления-освещением" aria-label="Permalink to &quot;Модуль управления освещением&quot;">​</a></h1><p><strong>Функционал поддерживается только для <a href="/sls_pro_rus">Pro</a> версии.</strong> Модуль предназначен для установки в контролер <a href="https://github.com/slsys/Gateway/blob/master/devices/din_mini_base_rus.md" target="_blank" rel="noreferrer">SLS DIN Mini</a>.</p><p>Модуль добавляет следующую функциональность:</p><ul><li><p>DALI-мастер интерфейс</p></li><li><p>DALI блок питания шины</p></li><li><p>Выход 0-10В (2шт)</p></li><li><p>Выход 0-20mA (2шт)</p></li></ul><h2 id="внешние-клеммы" tabindex="-1">Внешние клеммы <a class="header-anchor" href="#внешние-клеммы" aria-label="Permalink to &quot;Внешние клеммы&quot;">​</a></h2><ol><li>CH1 OUT 0-10V (IO32)</li><li>CH2 OUT 0-10V (IO35)</li><li>CH3 OUT 0-20mA (IO26)</li><li>CH4 OUT 0-20mA (IO27)</li><li>DALI +</li><li>DALI -</li></ol><h2 id="dali-интерфеис" tabindex="-1">DALI интерфейс <a class="header-anchor" href="#dali-интерфеис" aria-label="Permalink to &quot;DALI интерфейс&quot;">​</a></h2><p>Для инициализации интерфейса достаточно добавить в скрипт <em>init.lua</em> следующий вызов:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">begin</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">begin</span><span style="color:#24292E;">()</span></span></code></pre></div><p>Инициализация (сброс) устройств DALI и раздача коротких адресов:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">init</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">init</span><span style="color:#24292E;">()</span></span></code></pre></div><p>Сканирование шины DALI для поиска устройств (с короткими адресами), результат поиска с типами устройств выводится в консоль и как возвращаемое значение:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">scan</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">scan</span><span style="color:#24292E;">()</span></span></code></pre></div><p>Отправка команды на выключение всех устойств:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">off</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">off</span><span style="color:#24292E;">()</span></span></code></pre></div><p>Смена адреса устройства с 1 на 36:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">setaddr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">setaddr</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">36</span><span style="color:#24292E;">)</span></span></code></pre></div><p>Отправка команд реализована через функцию dali.cmd(cmd, params)</p><p>где:</p><ul><li>cmd (string) - содержит имя команды из таблицы ниже</li><li>params (table) - параметры команды</li></ul><p>Параметры:</p><ul><li>addrtype (string) - тип адреса, необходимо для адресуемых команда, возможные значения: short, group, broadcast</li><li>address (number) - короткий адрес или группа</li><li>value (number) - параметр</li></ul><h3 id="возвращаемыи-результат" tabindex="-1">Возвращаемый результат <a class="header-anchor" href="#возвращаемыи-результат" aria-label="Permalink to &quot;Возвращаемый результат&quot;">​</a></h3><p>Если команда не возвращает результат, то возвращает true, если должна возвращать, но произошла ошибка, возвращает nil и код ошибки.</p><p>Коды ошибок:</p><ul><li>-4 receive timeout</li><li>-3 unknown command</li><li>-2 unknown addrType</li><li>-1 ok, no return</li><li>0-255 return</li></ul><h3 id="команды" tabindex="-1">Команды <a class="header-anchor" href="#команды" aria-label="Permalink to &quot;Команды&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">№</th><th>Команда</th><th>Описание</th><th style="text-align:center;">Адресуемая</th><th style="text-align:center;">С ответом</th><th style="text-align:center;">Диапазон</th></tr></thead><tbody><tr><td style="text-align:center;">-</td><td>arc</td><td>Прямое управление яркостью</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;">0..254</td></tr><tr><td style="text-align:center;">0</td><td>off</td><td>Выключает устройство</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">1</td><td>up</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">2</td><td>down</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">3</td><td>stepup</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">4</td><td>stepdown</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">5</td><td>recallmax</td><td>Устанавливает максимальную яркость</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">6</td><td>recallmin</td><td>Устанавливает минимальную яркость</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">7</td><td>stepdownoff</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">8</td><td>stepupon</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">16-31</td><td>gotoscene</td><td>Запускает сцену</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;">0..15</td></tr><tr><td style="text-align:center;">32</td><td>reset</td><td>Сбрасывает сохраненные параметры, кроме адреса</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">42</td><td>storemax</td><td>Задает максимальный лимит яркости из DTR</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">43</td><td>storemin</td><td>Задает минимальный лимит яркости из DTR</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">44</td><td>storesystemfailure</td><td>Задает яркость при аварии шины DALI из DTR</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">45</td><td>storepoweron</td><td>Задает яркость при подаче питания из DTR</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">64-79</td><td>storescene</td><td>Сохраняет значение DTR как сцену</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;">0..15</td></tr><tr><td style="text-align:center;">80-95</td><td>removescene</td><td>Удаляет сцену</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;">0..15</td></tr><tr><td style="text-align:center;">96-111</td><td>addtogroup</td><td>Добавляет устройство в группу</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;">0..15</td></tr><tr><td style="text-align:center;">112-127</td><td>removefromgroup</td><td>Удаляет устройство из группы</td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;">0..15</td></tr><tr><td style="text-align:center;">128</td><td>storeshortaddress</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">144</td><td>querystatus</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">152</td><td>querydtr</td><td></td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">153</td><td>querydevicetype</td><td>Возвращает тип устройства</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">160</td><td>queryactual</td><td>Возвращает текущую яркость</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">161</td><td>querymax</td><td>Возвращает максимальный лимит яркости</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">162</td><td>querymin</td><td>Возвращает минимальный лимит яркости</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">163</td><td>querypoweron</td><td>Возвращает яркость при подаче питания</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">164</td><td>querysystemfailure</td><td>Возвращает яркость при аварии шины DALI</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">176-191</td><td>queryscene</td><td>Возвращает значение сцены</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;">0..15</td></tr><tr><td style="text-align:center;">192</td><td>querygroupslow</td><td>Возвращает битовую маску групп в которых состоит 0-7</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">193</td><td>querygroupshigh</td><td>Возвращает битовую маску групп в которых состоит 8-15</td><td style="text-align:center;">*</td><td style="text-align:center;">*</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">-</td><td>setdtr</td><td>Сохраняет значение в DTR</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">0..255</td></tr></tbody></table><p>Отправка команды изменения яркости на 30 на устройство с коротким адресом 5:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">cmd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;arc&#39;</span><span style="color:#E1E4E8;">, { addrtype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;short&#39;</span><span style="color:#E1E4E8;">, address </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">cmd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;arc&#39;</span><span style="color:#24292E;">, { addrtype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;short&#39;</span><span style="color:#24292E;">, address </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> })</span></span></code></pre></div><p>Получает значение яркости для устройства с адресом 1:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(dali.</span><span style="color:#79B8FF;">cmd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;queryactual&#39;</span><span style="color:#E1E4E8;">, { addrtype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;short&#39;</span><span style="color:#E1E4E8;">, address </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(dali.</span><span style="color:#005CC5;">cmd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;queryactual&#39;</span><span style="color:#24292E;">, { addrtype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;short&#39;</span><span style="color:#24292E;">, address </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }))</span></span></code></pre></div><p>Если на шине только одно устройство, назначает ему адрес 42:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">address </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span></span>
<span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">cmd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setdtr&#39;</span><span style="color:#E1E4E8;">, { addrtype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;broadcast&#39;</span><span style="color:#E1E4E8;">, value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> address </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">cmd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;storeshortaddress&#39;</span><span style="color:#E1E4E8;">, { addrtype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;broadcast&#39; </span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">address </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span></span>
<span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">cmd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setdtr&#39;</span><span style="color:#24292E;">, { addrtype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;broadcast&#39;</span><span style="color:#24292E;">, value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> address </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">cmd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;storeshortaddress&#39;</span><span style="color:#24292E;">, { addrtype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;broadcast&#39; </span><span style="color:#24292E;">})</span></span></code></pre></div><p>Устанавливает минимальное значение яркости 100 для устройства с адресом 1:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">cmd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setdtr&#39;</span><span style="color:#E1E4E8;">, { addrtype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;broadcast&#39;</span><span style="color:#E1E4E8;">, value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">dali.</span><span style="color:#79B8FF;">cmd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;storemin&#39;</span><span style="color:#E1E4E8;">, { addrtype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;short&#39;</span><span style="color:#E1E4E8;">, address </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">cmd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setdtr&#39;</span><span style="color:#24292E;">, { addrtype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;broadcast&#39;</span><span style="color:#24292E;">, value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">dali.</span><span style="color:#005CC5;">cmd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;storemin&#39;</span><span style="color:#24292E;">, { addrtype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;short&#39;</span><span style="color:#24292E;">, address </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> })</span></span></code></pre></div><h2 id="управление-через-mqtt" tabindex="-1">Управление через MQTT <a class="header-anchor" href="#управление-через-mqtt" aria-label="Permalink to &quot;Управление через MQTT&quot;">​</a></h2>`,37),d=l("p",{cmd:""},"Топик: xxx/dali/{addrtype}/cmd/",-1),o=t(`<p>Сообщение (опционально): value</p><p>где xxx - префикс шлюза</p><p>Результат отправки команды публикуется в топике xxx/dali/result</p><p>Отправка команды изменения яркости на 30 на устройство с коротким адресом 5:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Topic: xxx/dali/5/cmd/arc </span></span>
<span class="line"><span style="color:#e1e4e8;">Payload: 30</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Topic: xxx/dali/5/cmd/arc </span></span>
<span class="line"><span style="color:#24292e;">Payload: 30</span></span></code></pre></div><p>Отправка команды выключения на все устройства в группе 0:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Topic: xxx/dali/g0/cmd/off </span></span>
<span class="line"><span style="color:#e1e4e8;">Payload:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Topic: xxx/dali/g0/cmd/off </span></span>
<span class="line"><span style="color:#24292e;">Payload:</span></span></code></pre></div><p>Отправка команды выключения на все устройства:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Topic: xxx/dali/broadcast/cmd/off </span></span>
<span class="line"><span style="color:#e1e4e8;">Payload:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Topic: xxx/dali/broadcast/cmd/off </span></span>
<span class="line"><span style="color:#24292e;">Payload:</span></span></code></pre></div>`,9),r=[p,d,o];function c(i,y,E,g,x,h){return e(),a("div",null,r)}const v=s(n,[["render",c]]);export{F as __pageData,v as default};
