(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aed6"],{be30:function(e,t,r){"use strict";
/*!
 * css-vars-ponyfill
 * v2.2.1
 * https://jhildenbiddle.github.io/css-vars-ponyfill/
 * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e){return a(e)||s(e)||c()}function a(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}
/*!
 * get-css-data
 * v1.7.1
 * https://github.com/jhildenbiddle/get-css-data
 * (c) 2018-2020 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map((function(e){return null}));function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="<"===e.trim().charAt(0);return!t}function s(e,t){r.onError(e,n[t],t)}function c(e,t){var a=r.onSuccess(e,n[t],t);e=!1===a?"":a||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var i=document.createElement("a");n.forEach((function(e,t){i.setAttribute("href",e),i.href=String(i.href);var n=Boolean(document.all&&!window.atob),o=n&&i.host.split(":")[0]!==location.host.split(":")[0];if(o){var u=i.protocol===location.protocol;if(u){var l=new XDomainRequest;l.open("GET",e),l.timeout=0,l.onprogress=Function.prototype,l.ontimeout=Function.prototype,l.onload=function(){a(l.responseText)?c(l.responseText,t):s(l,t)},l.onerror=function(e){s(l,t)},setTimeout((function(){l.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),s(null,t)}else{var f=new XMLHttpRequest;f.open("GET",e),r.mimeType&&f.overrideMimeType&&f.overrideMimeType(r.mimeType),r.onBeforeSend(f,e,t),f.onreadystatechange=function(){4===f.readyState&&(200===f.status&&a(f.responseText)?c(f.responseText,t):s(f,t))},f.send()}}))}
/**
 * Gets CSS data from <style> and <link> nodes (including @imports), then
 * returns data in order processed by DOM. Allows specifying nodes to
 * include/exclude and filtering CSS data using RegEx.
 *
 * @preserve
 * @param {object}   [options] The options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes.
 * @param {string}   [options.include] CSS selector matching <link> and <style>
 *                   nodes to include
 * @param {string}   [options.exclude] CSS selector matching <link> and <style>
 *                   nodes to exclude
 * @param {object}   [options.filter] Regular expression used to filter node CSS
 *                   data. Each block of CSS data is tested against the filter,
 *                   and only matching data is included.
 * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
 *                   collected from a stylesheet's runtime values instead of its
 *                   text content. This is required to get accurate CSS data
 *                   when a stylesheet has been modified using the deleteRule()
 *                   or insertRule() methods because these modifications will
 *                   not be reflected in the stylesheet's text content.
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments.
 * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
 *                   1) CSS text, 2) source node reference, and 3) the source
 *                   URL as arguments.
 * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
 *                   object for inspection, 2) soure node reference, and 3) the
 *                   source URL that failed (either a <link> href or an @import)
 *                   as arguments
 * @param {function} [options.onComplete] Callback after all nodes have been
 *                   processed. Passes 1) concatenated CSS text, 2) an array of
 *                   CSS text in DOM order, and 3) an array of nodes in DOM
 *                   order as arguments.
 *
 * @example
 *
 *   getCssData({
 *     rootElement: document,
 *     include    : 'style,link[rel="stylesheet"]',
 *     exclude    : '[href="skip.css"]',
 *     filter     : /red/,
 *     useCSSOM   : false,
 *     onBeforeSend(xhr, node, url) {
 *       // ...
 *     }
 *     onSuccess(cssText, node, url) {
 *       // ...
 *     }
 *     onError(xhr, node, url) {
 *       // ...
 *     },
 *     onComplete(cssText, cssArray, nodeArray) {
 *       // ...
 *     }
 *   });
 */function u(e){var t={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},r={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},n=Array.apply(null,r.rootElement.querySelectorAll(r.include)).filter((function(e){return!f(e,r.exclude)})),o=Array.apply(null,Array(n.length)).map((function(e){return null}));function a(){var e=-1===o.indexOf(null);if(e){var t=o.join("");r.onComplete(t,o,n)}}function s(e,t,n,s){var c=r.onSuccess(e,n,s);e=void 0!==c&&!1===Boolean(c)?"":c||e,u(e,n,s,(function(e,s){null===o[t]&&(s.forEach((function(e){return r.onError(e.xhr,n,e.url)})),!r.filter||r.filter.test(e)?o[t]=e:o[t]="",a())}))}function c(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={};return o.rules=(e.replace(t.cssComments,"").match(t.cssImports)||[]).filter((function(e){return-1===n.indexOf(e)})),o.urls=o.rules.map((function(e){return e.replace(t.cssImports,"$1")})),o.absoluteUrls=o.urls.map((function(e){return l(e,r)})),o.absoluteRules=o.rules.map((function(e,t){var n=o.urls[t],a=l(o.absoluteUrls[t],r);return e.replace(n,a)})),o}function u(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],l=c(e,n,s);l.rules.length?i(l.absoluteUrls,{onBeforeSend:function(e,n,o){r.onBeforeSend(e,t,n)},onSuccess:function(e,n,o){var a=r.onSuccess(e,t,n);e=!1===a?"":a||e;var i=c(e,n,s);return i.rules.forEach((function(t,r){e=e.replace(t,i.absoluteRules[r])})),e},onError:function(r,c,i){a.push({xhr:r,url:c}),s.push(l.rules[i]),u(e,t,n,o,a,s)},onComplete:function(r){r.forEach((function(t,r){e=e.replace(l.rules[r],t)})),u(e,t,n,o,a,s)}}):o(e,a)}n.length?n.forEach((function(e,t){var n=e.getAttribute("href"),c=e.getAttribute("rel"),u="LINK"===e.nodeName&&n&&c&&"stylesheet"===c.toLowerCase(),f="STYLE"===e.nodeName;if(u)i(n,{mimeType:"text/css",onBeforeSend:function(t,n,o){r.onBeforeSend(t,e,n)},onSuccess:function(r,o,a){var c=l(n);s(r,t,e,c)},onError:function(n,s,c){o[t]="",r.onError(n,e,s),a()}});else if(f){var p=e.textContent;r.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),s(p,t,e,location.href)}else o[t]="",a()})):r.onComplete("",[])}function l(e,t){var r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t||document.baseURI||(document.querySelector("base")||{}).href||location.href,o.href=e,o.href}function f(e,t){var r=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;return r.call(e,t)}r.r(t);var p=d;function d(e,t,r){e instanceof RegExp&&(e=m(e,r)),t instanceof RegExp&&(t=m(t,r));var n=v(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function m(e,t){var r=t.match(e);return r?r[0]:null}function v(e,t,r){var n,o,a,s,c,i=r.indexOf(e),u=r.indexOf(t,i+1),l=i;if(i>=0&&u>0){n=[],a=r.length;while(l>=0&&!c)l==i?(n.push(l),i=r.indexOf(e,l+1)):1==n.length?c=[n.pop(),u]:(o=n.pop(),o<a&&(a=o,s=u),u=r.indexOf(t,l+1)),l=i<u&&i>=0?i:u;n.length&&(c=[a,s])}return c}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={preserveStatic:!0,removeComments:!1},o=n({},r,t),a=[];function s(e){throw new Error("CSS parse error: ".concat(e))}function c(t){var r=t.exec(e);if(r)return e=e.slice(r[0].length),r}function i(){return c(/^{\s*/)}function u(){return c(/^}/)}function l(){c(/^\s*/)}function f(){if(l(),"/"===e[0]&&"*"===e[1]){var t=2;while(e[t]&&("*"!==e[t]||"/"!==e[t+1]))t++;if(!e[t])return s("end of comment is missing");var r=e.slice(2,t);return e=e.slice(t+2),{type:"comment",comment:r}}}function d(){var e,t=[];while(e=f())t.push(e);return o.removeComments?[]:t}function m(){l();while("}"===e[0])s("extra closing bracket");var t=c(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(t)return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function v(){if("@"===e[0])return k();c(/^([;\s]*)+/);var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=c(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(r){if(r=r[0].trim(),!c(/^:\s*/))return s("property missing ':'");var n=c(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),o={type:"declaration",property:r.replace(t,""),value:n?n[0].replace(t,"").trim():""};return c(/^[;\s]*/),o}}function h(){if(!i())return s("missing '{'");var e,t=d();while(e=v())t.push(e),t=t.concat(d());return u()?t:s("missing '}'")}function y(){l();var e,t=[];while(e=c(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))t.push(e[1]),c(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:h()}}function g(){var e=c(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(e=c(/^([-\w]+)\s*/),!e)return s("@keyframes missing name");var r,n=e[1];if(!i())return s("@keyframes missing '{'");var o=d();while(r=y())o.push(r),o=o.concat(d());return u()?{type:"keyframes",name:n,vendor:t,keyframes:o}:s("@keyframes missing '}'")}}function b(){var e=c(/^@page */);if(e){var t=m()||[];return{type:"page",selectors:t,declarations:h()}}}function S(){var e=c(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(e){var t="".concat(e[1],"-").concat(e[2])+(e[3]?"-".concat(e[3]):"");return{type:"page-margin-box",name:t,declarations:h()}}}function E(){var e=c(/^@font-face\s*/);if(e)return{type:"font-face",declarations:h()}}function w(){var e=c(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:T()}}function C(){var e=c(/^@host\s*/);if(e)return{type:"host",rules:T()}}function O(){var e=c(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:T()}}function x(){var e=c(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function A(){var e=c(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:T()}}function j(){var e=c(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function k(){if(l(),"@"===e[0]){var t=j()||E()||O()||g()||w()||A()||x()||C()||b()||S();if(t&&!o.preserveStatic){var r=!1;if(t.declarations)r=t.declarations.some((function(e){return/var\(/.test(e.value)}));else{var n=t.keyframes||t.rules||[];r=n.some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))}))}return r?t:{}}return t}}function M(){if(!o.preserveStatic){var t=p("{","}",e);if(t){var r=/:(?:root|host)(?![.:#(])/.test(t.pre)&&/--\S*\s*:/.test(t.body),n=/var\(/.test(t.body);if(!r&&!n)return e=e.slice(t.end+1),{}}}var a=m()||[],c=o.preserveStatic?h():h().filter((function(e){var t=a.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r}));return a.length||s("selector missing"),{type:"rule",selectors:a,declarations:c}}function T(t){if(!t&&!i())return s("missing '{'");var r,n=d();while(e.length&&(t||"}"!==e[0])&&(r=k()||M()))r.type&&n.push(r),n=n.concat(d());return t||u()?n:s("missing '}'")}return{type:"stylesheet",stylesheet:{rules:T(!0),errors:a}}}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={parseHost:!1,store:{},onWarning:function(){}},o=n({},r,t),a=new RegExp(":".concat(o.parseHost?"host":"root","$"));return"string"===typeof e&&(e=h(e,o)),e.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return a.test(e)}))&&e.declarations.forEach((function(e,t){var r=e.property,n=e.value;r&&0===r.indexOf("--")&&(o.store[r]=n)}))})),o.store}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},"page-margin-box":function(e){return"@"+e.name+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",a=0;a<e.length;a++){var s=e[a];r&&r(s);var c=n[s.type](s);c&&(o+=c,c.length&&s.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}function b(e,t){e.rules.forEach((function(r){r.rules?b(r,t):r.keyframes?r.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,r)})):r.declarations&&t(r.declarations,e)}))}d.range=v;var S="--",E="var";function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},o=n({},r,t);return"string"===typeof e&&(e=h(e,o)),b(e.stylesheet,(function(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=n.type,s=n.property,c=n.value;if("declaration"===a)if(o.preserveVars||!s||0!==s.indexOf(S)){if(-1!==c.indexOf(E+"(")){var i=O(c,o);i!==n.value&&(i=C(i),o.preserveVars?(e.splice(r,0,{type:a,property:s,value:i}),r++):n.value=i)}}else e.splice(r,1),r--}})),g(e)}function C(e){var t=/calc\(([^)]+)\)/g;return(e.match(t)||[]).forEach((function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)})),e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=p("(",")",e);function o(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,s=a||(o?String(o):void 0),c=r||e;return a||t.onWarning('variable "'.concat(n,'" is undefined')),s&&"undefined"!==s&&s.length>0?O(s,t,c):"var(".concat(c,")")}if(n){if("var"===n.pre.slice(-3)){var a=0===n.body.trim().length;return a?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+o(n.body)+O(n.post,t)}return n.pre+"(".concat(O(n.body,t),")")+O(n.post,t)}return-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e}var x="undefined"!==typeof window,A=x&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),j={group:0,job:0},k={rootElement:x?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onWarning:function(){},onError:function(){},onSuccess:function(){},onComplete:function(){}},M={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},T={dom:{},job:{},user:{}},_=!1,R=null,L=0,B=null,N=!1;
/**
 * Fetches, parses, and transforms CSS custom properties from specified
 * <style> and <link> elements into static values, then appends a new <style>
 * element with static values to the DOM to provide CSS custom property
 * compatibility for legacy browsers. Also provides a single interface for
 * live updates of runtime values in both modern and legacy browsers.
 *
 * @preserve
 * @param {object}   [options] Options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes
 * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
 *                   and <style> nodes will be processed.
 * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
 *                   matching <link re="stylesheet"> and <style> nodes to
 *                   process
 * @param {string}   [options.exclude] CSS selector matching <link
 *                   rel="stylehseet"> and <style> nodes to exclude from those
 *                   matches by options.include
 * @param {object}   [options.variables] A map of custom property name/value
 *                   pairs. Property names can omit or include the leading
 *                   double-hyphen (—), and values specified will override
 *                   previous values
 * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
 *                   only generate legacy-compatible CSS in browsers that lack
 *                   native support (i.e., legacy browsers)
 * @param {boolean}  [options.preserveStatic=true] Determines if CSS
 *                   declarations that do not reference a custom property will
 *                   be preserved in the transformed CSS
 * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
 *                   property declarations will be preserved in the transformed
 *                   CSS
 * @param {boolean}  [options.silent=false] Determines if warning and error
 *                   messages will be displayed on the console
 * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
 *                   update the DOM after processing CSS custom properties
 * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
 *                   convert relative url() paths to absolute urls
 * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
 *                   be created that will execute the ponyfill when a <link> or
 *                   <style> DOM mutation is observed
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments
 * @param {function} [options.onWarning] Callback after each CSS parsing warning
 *                   has occurred. Passes 1) a warning message as an argument.
 * @param {function} [options.onError] Callback after a CSS parsing error has
 *                   occurred or an XHR request has failed. Passes 1) an error
 *                   message, and 2) source node reference, 3) xhr, and 4 url as
 *                   arguments.
 * @param {function} [options.onSuccess] Callback after CSS data has been
 *                   collected from each node and before CSS custom properties
 *                   have been transformed. Allows modifying the CSS data before
 *                   it is transformed by returning any string value (or false
 *                   to skip). Passes 1) CSS text, 2) source node reference, and
 *                   3) the source URL as arguments.
 * @param {function} [options.onComplete] Callback after all CSS has been
 *                   processed, legacy-compatible CSS has been generated, and
 *                   (optionally) the DOM has been updated. Passes 1) a CSS
 *                   string with CSS variable values resolved, 2) an array of
 *                   output <style> node references that have been appended to
 *                   the DOM, 3) an object containing all custom properies names
 *                   and values, and 4) the ponyfill execution time in
 *                   milliseconds.
 *
 * @example
 *
 *   cssVars({
 *     rootElement   : document,
 *     shadowDOM     : false,
 *     include       : 'style,link[rel="stylesheet"]',
 *     exclude       : '',
 *     variables     : {},
 *     onlyLegacy    : true,
 *     preserveStatic: true,
 *     preserveVars  : false,
 *     silent        : false,
 *     updateDOM     : true,
 *     updateURLs    : true,
 *     watch         : false,
 *     onBeforeSend(xhr, node, url) {},
 *     onWarning(message) {},
 *     onError(message, node, xhr, url) {},
 *     onSuccess(cssText, node, url) {},
 *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
 *   });
 */
function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="cssVars(): ",r=n({},k,e);function a(e,n,o,a){!r.silent&&window.console&&console.error("".concat(t).concat(e,"\n"),n),r.onError(e,n,o,a)}function s(e){!r.silent&&window.console&&console.warn("".concat(t).concat(e)),r.onWarning(e)}if(x){if(r.watch)return r.watch=k.watch,D(r),void V(r);if(!1===r.watch&&R&&(R.disconnect(),R=null),!r.__benchmark){if(_===r.rootElement)return void F(e);if(r.__benchmark=H(),r.exclude=[R?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',r.exclude].filter((function(e){return e})).join(","),r.variables=I(r.variables),!R){var c=Array.apply(null,r.rootElement.querySelectorAll('[data-cssvars="out"]'));if(c.forEach((function(e){var t=e.getAttribute("data-cssvars-group"),n=t?r.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]')):null;n||e.parentNode.removeChild(e)})),L){var i=r.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');i.length<L&&(L=i.length,T.dom={})}}}if("loading"!==document.readyState)if(A&&r.onlyLegacy){if(r.updateDOM){var l=r.rootElement.host||(r.rootElement===document?document.documentElement:r.rootElement);Object.keys(r.variables).forEach((function(e){l.style.setProperty(e,r.variables[e])}))}}else!N&&(r.shadowDOM||r.rootElement.shadowRoot||r.rootElement.host)?u({rootElement:k.rootElement,include:k.include,exclude:r.exclude,onSuccess:function(e,t,r){return e=e.replace(M.cssComments,"").replace(M.cssMediaQueries,""),e=(e.match(M.cssVarDeclRules)||[]).join(""),e||!1},onComplete:function(e,t,n){y(e,{store:T.dom,onWarning:s}),N=!0,V(r)}}):(_=r.rootElement,u({rootElement:r.rootElement,include:r.include,exclude:r.exclude,onBeforeSend:r.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||W(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":""),s="CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o);a(s,t,e,n)},onSuccess:function(e,t,n){var o=r.onSuccess(e,t,n);return e=void 0!==o&&!1===Boolean(o)?"":o||e,r.updateURLs&&(e=U(e,n)),e},onComplete:function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=n({},T.dom,T.user),u=!1;if(T.job={},c.forEach((function(e,n){if(M.cssVars.test(t[n]))try{var o=h(t[n],{preserveStatic:r.preserveStatic,removeComments:!0});y(o,{parseHost:Boolean(r.rootElement.host),store:T.dom,onWarning:s}),e.__cssVars={tree:o}}catch(c){a(c.message,e)}})),n(T.job,T.dom),r.updateDOM?(n(T.user,r.variables),n(T.job,T.user)):(n(T.job,T.user,r.variables),n(i,r.variables)),u=j.job>0&&Boolean(Object.keys(T.job).length>Object.keys(i).length||Boolean(Object.keys(i).length&&Object.keys(T.job).some((function(e){return T.job[e]!==i[e]})))),u)K(r.rootElement),V(r);else{var l=[],f=[],p=!1;if(r.updateDOM&&j.job++,c.forEach((function(e){var t=!e.__cssVars;if(e.__cssVars)try{w(e.__cssVars.tree,n({},r,{variables:T.job,onWarning:s}));var o=g(e.__cssVars.tree);if(r.updateDOM){if(e.getAttribute("data-cssvars")||e.setAttribute("data-cssvars","src"),o.length){var c=e.getAttribute("data-cssvars-group")||++j.group,i=o.replace(/\s/g,""),u=r.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(c,'"]'))||document.createElement("style");p=p||M.cssKeyframes.test(o),u.hasAttribute("data-cssvars")||u.setAttribute("data-cssvars","out"),i===e.textContent.replace(/\s/g,"")?(t=!0,u&&u.parentNode&&(e.removeAttribute("data-cssvars-group"),u.parentNode.removeChild(u))):i!==u.textContent.replace(/\s/g,"")&&([e,u].forEach((function(e){e.setAttribute("data-cssvars-job",j.job),e.setAttribute("data-cssvars-group",c)})),u.textContent=o,l.push(o),f.push(u),u.parentNode||e.parentNode.insertBefore(u,e.nextSibling))}}else e.textContent.replace(/\s/g,"")!==o&&l.push(o)}catch(d){a(d.message,e)}t&&e.setAttribute("data-cssvars","skip"),e.hasAttribute("data-cssvars-job")||e.setAttribute("data-cssvars-job",j.job)})),L=r.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,r.shadowDOM)for(var d,m=[r.rootElement].concat(o(r.rootElement.querySelectorAll("*"))),v=0;d=m[v];++v)if(d.shadowRoot&&d.shadowRoot.querySelector("style")){var b=n({},r,{rootElement:d.shadowRoot});V(b)}r.updateDOM&&p&&q(r.rootElement),_=!1,r.onComplete(l.join(""),f,JSON.parse(JSON.stringify(T.job)),H()-r.__benchmark)}}}));else document.addEventListener("DOMContentLoaded",(function t(r){V(e),document.removeEventListener("DOMContentLoaded",t)}))}}function D(e){function t(e){var t="LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet");return t&&!e.disabled}function r(e){return"STYLE"===e.tagName&&!e.disabled}function n(e){return Array.apply(null,e).some((function(e){var n=1===e.nodeType,o=n&&e.hasAttribute("data-cssvars"),a=r(e)&&M.cssVars.test(e.textContent),s=!o&&(t(e)||a);return s}))}function o(t){return Array.apply(null,t).some((function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),a=o;if(o||n){var s=t.getAttribute("data-cssvars-group"),c=e.rootElement.querySelector('[data-cssvars-group="'.concat(s,'"]'));o&&(K(e.rootElement),T.dom={}),c&&c.parentNode.removeChild(c)}return a}))}window.MutationObserver&&(R&&(R.disconnect(),R=null),R=new MutationObserver((function(r){var a=r.some((function(e){var r=!1;return"attributes"===e.type?r=t(e.target):"childList"===e.type&&(r=n(e.addedNodes)||o(e.removedNodes)),r}));a&&V(e)})),R.observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(B),B=setTimeout((function(){e.__benchmark=null,V(e)}),t)}function q(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o="__CSSVARSPONYFILL-KEYFRAMES__",a=0,s=r.length;a<s;a++){var c=r[a],i=getComputedStyle(c)[t];"none"!==i&&(c.style[t]+=o,n.push(c))}document.body.offsetHeight;for(var u=0,l=n.length;u<l;u++){var f=n[u].style;f[t]=f[t].replace(o,"")}}}function U(e,t){var r=e.replace(M.cssComments,"").match(M.cssUrls)||[];return r.forEach((function(r){var n=r.replace(M.cssUrls,"$1"),o=W(n,t);e=e.replace(r,r.replace(n,o))})),e}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(r,n){var o=t.test(n)?n:"--".concat(n.replace(/^-+/,""));return r[o]=e[n],r}),{})}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function H(){return x&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function K(e){var t=Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));t.forEach((function(e){return e.setAttribute("data-cssvars","")}))}V.reset=function(){for(var e in j.job=0,j.group=0,_=!1,R&&(R.disconnect(),R=null),L=0,B=null,N=!1,T)T[e]={}},t["default"]=V}}]);
//# sourceMappingURL=chunk-2d21aed6.1523059d.js.map