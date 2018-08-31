// ==UserScript==
// @name         延迟打卡
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://kaoqin.jd.com/?late=*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    console.log('kaoqin latency');
    (function(){
        console.log('Kaoqin');
        let latency = window.location.search.match(/\?late=([\d\.]+)/)[1];
        window.setTimeout(function(){document.querySelector('#clockIn').click();}, latency * 3600 * 1000);
    })();
})();
