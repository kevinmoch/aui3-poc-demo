(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d2080d8":"b99b54c0","chunk-2d21aed6":"1523059d","chunk-d2ce60c6":"3f73fb9f","chunk-2d0b6505":"f3a68e3d","chunk-45015fc8":"c252f2b5","chunk-4d4f60e2":"5949fcba","chunk-b9bcfeb0":"6f8a1e7c","chunk-77686375":"d6fff5b0"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4d4f60e2":1,"chunk-b9bcfeb0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2080d8":"31d6cfe0","chunk-2d21aed6":"31d6cfe0","chunk-d2ce60c6":"31d6cfe0","chunk-2d0b6505":"31d6cfe0","chunk-45015fc8":"31d6cfe0","chunk-4d4f60e2":"40c1372b","chunk-b9bcfeb0":"4b1df08d","chunk-77686375":"31d6cfe0"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),n(a)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0065":function(e,t,n){"use strict";t["a"]={"aui-todo-color":"#0000f0"}},"05fc":function(e,t,n){"use strict";t["a"]={"aui-tag-color":"#ff0080"}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("span",[e._v("更改 Tag 颜色")]),n("input",{attrs:{name:"aui-tag-color",type:"color",size:"4"},domProps:{value:e.tagColor},on:{change:e.change}}),n("span",[e._v("更改 "+e._s(e.title)+" 颜色")]),n("input",{attrs:{name:e.name,type:"color",size:"4"},domProps:{value:e.color},on:{change:e.change}}),n("span",[e._v("更改字体大小")]),n("input",{attrs:{name:"aui-font-size",type:"text",size:"2"},domProps:{value:e.fontSize},on:{change:e.change}})]),n("todo",{on:{loadCard:e.loadCard}})],1)},c=[],a=(n("7f7f"),n("ac6a"),n("456d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("todo",{attrs:{$mode:e.mode,newTag:e.newTag,tags:e.tags},on:{add:e.onAdd,remove:e.onRemove},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"mb-3"},[n("span",{staticClass:"badge badge-success mr-1"},[e._v("A")]),n("span",[e._v("Todo 组件由渲染模板 + Renderless 函数组合而成，更改组件状态")]),n("button",{staticClass:"btn btn-danger btn-sm ml-2",attrs:{title:"组件切换到 PC 状态"},on:{click:function(t){e.mode="pc"}}},[e._v("PC")]),n("button",{staticClass:"btn btn-warning btn-sm ml-2",attrs:{title:"组件切换到 Mobile 状态"},on:{click:function(t){e.mode="mobile"}}},[e._v("Mobile")])])]},proxy:!0}])}),n("todo",{attrs:{$template:e.template,newTag:e.newTag,tags:e.tags},on:{add:e.onAdd,remove:e.onRemove},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"mt-5 mb-2"},[n("span",{staticClass:"badge badge-success mr-2"},[e._v("B")]),n("span",[e._v("自定义 Todo 组件的渲染模板(支持自定义嵌套子组件)，但 Renderless 函数不变")])])]},proxy:!0}])}),n("todo",{ref:"todo",attrs:{$renderless:e.renderless,newTag:e.newTag,tags:e.tags},on:{add:e.onAdd,remove:e.onRemove},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"mt-5 mb-2"},[n("span",{staticClass:"badge badge-success mr-2"},[e._v("C")]),n("span",[e._v("自定义 Todo 组件的 Renderless 函数(引用无渲染组件)，渲染模板默认为 Mobile")])])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"mt-3 mb-2"},[n("span",[e._v("直接调用组件暴露的 addTag 和 removeTag 方法")]),n("button",{staticClass:"btn btn-info btn-sm ml-2",on:{click:e.addTag}},[e._v("Add Tag")]),n("button",{staticClass:"btn btn-info btn-sm ml-2",on:{click:e.removeTag}},[e._v("Remove Tag")])])]},proxy:!0}])}),n("div",{staticClass:"mt-5 mb-5"},[n("span",{staticClass:"badge badge-success mr-2"},[e._v("D")]),n("span",[e._v("发送请求动态加载卡片文件，卡片的组件自适应页面的颜色和字体")]),n("button",{staticClass:"btn btn-info btn-sm ml-2",on:{click:e.loadCard}},[e._v("Load Card")]),n(e.card,{tag:"component"})],1)],1)}),i=[],u=n("df17"),s=n("7960"),f=function(e,t,n){var r=Object(s["b"])(e,t,n),o=window.$notify,c=r.checkTag;r.checkTag=function(e){var t=e.tags,n=e.tag;return o("执行自定义的 checkTag 函数，检查 "+n),c({tags:t,tag:n})};var a=r.removeTag;return r.removeTag=function(e){a(e)&&o("执行自定义的 Todo 删除函数，移除 "+e)},r},d={components:{Todo:u["default"]},data:function(){var e="pc",t="New Tag",r=["Vue","is","Awesome"],o=function(){return n.e("chunk-2d2080d8").then(n.bind(null,"a2c4"))},c=function(){return Promise.all([n.e("chunk-d2ce60c6"),n.e("chunk-b9bcfeb0")]).then(n.bind(null,"17eb"))};return{mode:e,card:o,tags:r,newTag:t,template:c,renderless:f}},methods:{addTag:function(){this.$refs.todo.addTag(prompt("请输入要新增的内容",""))},removeTag:function(){this.$refs.todo.removeTag(prompt("请输入要删除的内容",""))},onAdd:function(e){window.$notify("Todo 添加了新内容 ".concat(e))},onRemove:function(e){window.$notify("Todo 删除了旧内容 ".concat(e))},loadCard:function(){var e=this;window.System.import("card.js").then((function(t){e.card=t,e.$emit("loadCard",t.cssVars)}))}}},l=d,p=n("0c7c"),b=Object(p["a"])(l,a,i,!1,null,null,null),m=b.exports,v=n("ddcf"),g=(n("8e6e"),n("bd86")),h=n("05fc"),y=n("0065");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(g["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=w({},h["a"],{},y["a"],{"aui-font-size":"16px"});function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(g["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?j[e]:j},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;for(var n in e)t[n]=e[n]},C=function(){return window.CSS&&window.CSS.supports&&window.CSS.supports("--a",0)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!C())throw new Error("Current Browser does NOT support CSS Variables!");var t=window.document.documentElement.style;for(var n in e)t.setProperty("--"+n,e[n])},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.e("chunk-2d21aed6").then(n.bind(null,"be30")).then((function(t){var n=t.default?t.default:t;x=function(t){n(T({},e,{variables:t}))},C=function(){return!0}}))},S=function(e){var t=e.check,n=e.change,r=e.initMode,o=e.interval,c=void 0===o?100:o,a=function(e,t){window.onresize=function(){clearTimeout(t),t=setTimeout(e,c)}};a((function(){var e=t();r!==e&&(r=e,n(e))}))},E=(n("e612"),{components:{Todo:m},data:function(){return{theme:{},title:"New Tag",name:"aui-todo-color",color:P(Object.keys(u["cssVars"])[0]),tagColor:P(Object.keys(v["cssVars"])[0]),fontSize:P("aui-font-size")}},methods:{change:function(e){var t=this,n=function(){t.theme[e.target.name]=e.target.value,x(t.theme)};!C()&&window.confirm("当前浏览器不支持主题切换，要启用兼容程序吗？")?$().then(n):n()},loadCard:function(e){e&&(_(e),this.title="Card",this.name=Object.keys(e)[0],this.color=e[this.name])}},mounted:function(){var e=this;S({check:function(){return document.body.clientWidth<768?"mobile":"pc"},change:function(t){return e.$mode.value=t}})}}),D=E,A=Object(p["a"])(D,o,c,!1,null,null,null),N=A.exports,M=n("8533");n("c7b3");r["a"].config.productionTip=!1,r["a"].use(M["plugin"]),r["a"].prototype.$mode=r["a"].observable({value:"mobile"}),new r["a"]({render:function(e){return e(N)}}).$mount("#app")},"75ba":function(e,t,n){var r={"./":["df17"],"./index":["df17"],"./index.js":["df17"],"./index.vue":["8d77"],"./mobile":["4b1b","chunk-d2ce60c6","chunk-4d4f60e2"],"./mobile.vue":["4b1b","chunk-d2ce60c6","chunk-4d4f60e2"],"./pc":["1d40","chunk-d2ce60c6","chunk-2d0b6505"],"./pc.vue":["1d40","chunk-d2ce60c6","chunk-2d0b6505"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="75ba",e.exports=o},7892:function(e,t,n){},7960:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=function(e){return"string"===typeof e?e.trim():""},o=function(e){return function(){e.focus()}},c=function(e){return function(){e.input.focus()}},a=function(e){var t=e.tags,n=e.tag;return 0===n.length||-1!==t.indexOf(n)},i=function(e){var t=e.text,n=e.props,o=e.refs,c=e.emit,a=e.api;return function(e){return e=r("string"===typeof e?e:t.value),!a.checkTag({tags:n.tags,tag:e})&&(n.tags.push(e),t.value="",o.input.focus(),c("add",e),!0)}},u=function(e){var t=e.props,n=e.refs,r=e.emit;return function(e){var o=t.tags.indexOf(e);return-1!==o&&(t.tags.splice(o,1),n.input.focus(),r("remove",e),!0)}},s=function(e){var t=e.text,n=e.api;return{input:function(e){t.value=e.target.value},keydown:function(e){13===e.keyCode&&(e.preventDefault(),n.addTag(e.target.value))}}},f=["text","addTag","removeTag","inputEvents"],d=function(e,t,n){var r=n.value,f=n.onMounted,d=n.onUpdated,l=t.parent;l.text=l.text||r("");var p=l.text,b=l.$context.emit,m=t.refs,v={text:p,checkTag:a,focus:c(m),removeTag:u({props:e,refs:m,emit:b})};return f(o(v)),d(o(v)),Object.assign(v,{addTag:i({text:p,props:e,refs:m,emit:b,api:v}),inputEvents:s({text:p,api:v})})}},"7b9b":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i}));n("7f7f"),n("ac6a");var r=n("8533"),o={$mode:String,$template:[Function,Object],$renderless:Function},c=["$mode","$template","$renderless"],a=function(e){var t=e.props,n=e.context,o=e.template,c=function(e){return"string"===typeof e?e:n.root.$mode&&n.root.$mode.value||"pc"},a=r["computed"]((function(){return"undefined"!==typeof t.$template?t.$template:o(c(t.$mode))})),i=r["computed"]((function(){return n}));return{$view:a,$bind:t,$context:i}},i=function(e){var t=e.props,n=e.context,o=e.renderless,c=e.api,a=("function"===typeof t.$renderless?t.$renderless:o)(t,n,r),i={};return Array.isArray(c)&&c.forEach((function(e){var t=a[e];"undefined"!==typeof t&&(i[e]=t,n.parent[e]=t)})),i}},"8d77":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n(e.$view,e._b({tag:"component",scopedSlots:e._u([{key:"header",fn:function(){return[e._t("header")]},proxy:!0},{key:"footer",fn:function(){return[e._t("footer")]},proxy:!0}],null,!0)},"component",e.$bind,!1))],1)},o=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("7b9b");n("7892");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={name:"Todo",props:u({},a["a"],{newTag:String,tags:Array[String]}),setup:function(e,t){return Object(a["b"])({props:e,context:t,template:function(e){return function(){return n("75ba")("./".concat(e))}}})}},f=s,d=n("0c7c"),l=Object(d["a"])(f,r,o,!1,null,null,null);t["default"]=l.exports},9245:function(e,t,n){},c7b3:function(e,t){window.$notify=function(e){var t;return"Notification"in window?"granted"===window.Notification.permission?t=new window.Notification(e):"denied"!==window.Notification.permission&&window.Notification.requestPermission((function(n){"granted"===n&&(t=new window.Notification(e))})):console.info(e),t}},ddcf:function(e,t,n){"use strict";n.r(t),n.d(t,"cssVars",(function(){return b["a"]}));n("7f7f");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.$view,e._b({tag:"component"},"component",e.$bind,!1))},o=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("7b9b");n("9245");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={name:"Tag",props:u({},a["a"],{content:String}),setup:function(e,t){return Object(a["b"])({props:e,context:t,template:function(e){return function(){return Promise.all([n.e("chunk-d2ce60c6"),n.e("chunk-45015fc8")]).then(n.bind(null,"ce82"))}}})}},f=s,d=n("0c7c"),l=Object(d["a"])(f,r,o,!1,null,null,null),p=l.exports,b=n("05fc");p.install=function(e){e.component(p.name,p)};t["default"]=p},df17:function(e,t,n){"use strict";n.r(t);n("7f7f");var r=n("8d77"),o=n("0065");n.d(t,"cssVars",(function(){return o["a"]})),r["default"].install=function(e){e.component(r["default"].name,r["default"])},t["default"]=r["default"]},e612:function(e,t,n){}});
//# sourceMappingURL=app.eb9c9885.js.map