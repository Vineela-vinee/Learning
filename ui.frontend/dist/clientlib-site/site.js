!function(){var e={190:function(e,t,n){"use strict";n(190),n(592)},592:function(){!function(){"use strict";var e='[data-cmp-is="helloworld"]',t='[data-cmp-hook-helloworld="property"]',n='[data-cmp-hook-helloworld="model"]';function o(e){e&&e.element&&function(e){e.element.removeAttribute("data-cmp-is");var o=e.element.querySelectorAll(t);o=1==o.length?o[0].textContent:null;var r=e.element.querySelectorAll(n);r=1==r.length?r[0].textContent:null,console&&console.log&&console.log("HelloWorld component JavaScript example","\nText property:\n",o,"\nModel message:\n",r)}(e)}function r(){for(var t=document.querySelectorAll(e),n=0;n<t.length;n++)new o({element:t[n]});var r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,l=document.querySelector("body");new r((function(t){t.forEach((function(t){var n=[].slice.call(t.addedNodes);n.length>0&&n.forEach((function(t){t.querySelectorAll&&[].slice.call(t.querySelectorAll(e)).forEach((function(e){new o({element:e})}))}))}))})).observe(l,{subtree:!0,childList:!0,characterData:!0})}"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n(190)}();