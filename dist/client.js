!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a,o,u=n(1),c=function(){var e=JSON.parse(Ecwid.getAppPublicConfig(u.appId));mkz("appKey",e.app_key),u.debug&&mkz("debug",!0)},d=function(e,t){var n=e.name;if(t){for(var i=[],a=0,o=Object.entries(t);a<o.length;a++){var u=r(o[a],2),c=u[0],d=u[1];i.push(c+": "+d)}n=n+" ("+i.join(", ")+")"}return n};a=window,document,a[o="mkz"]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)},Ecwid.OnAPILoaded.add((function(){var e,t;Ecwid.getOwnerId(),e=c,(t=document.createElement("script")).setAttribute("src",u.scriptUrl),t.setAttribute("type","text/javascript"),t.charset="utf-8",t.async=!0,t.onreadystatechange=t.onload=e,document.body.appendChild(t)})),Ecwid.OnSetProfile.add((function(e){!function(e){if(null!=e){var t={};t.email=e.email,t.client_id=String(e.id),null!=e.billingPerson&&(t.full_name=e.billingPerson.name),mkz("setVisitorInfo",t)}else mkz("clearVisitorInfo")}(e)})),Ecwid.OnPageLoaded.add((function(e){!function(e){var t={};"PRODUCT"==e.type&&(t.offer={variant_id:String(e.productId),name:e.name}),"CATEGORY"==e.type&&0!=e.categoryId&&(t.category={uid:String(e.categoryId),name:e.name}),mkz("trackPageView",t)}(e)})),Ecwid.OnCartChanged.add((function(e){!function(e){if(null!=e){var t=[];for(i=0;i<e.items.length;i++)line_item=e.items[i],line_item.product&&t.push({variant_id:String(line_item.product.id),qnt:line_item.quantity,price:line_item.product.price,name:d(line_item.product,line_item.options),url:line_item.product.url});mkz("trackCartUpdate",{items:t})}}(e)}))},function(e,t){var n={staging:{debug:!0,scriptUrl:"https://cdn.jsdelivr.net/gh/markeaze/markeaze-js-tracker@latest/dist/mkz.js",appId:"markeaze-dev"},production:{debug:!1,scriptUrl:"https://cdn.jsdelivr.net/gh/markeaze/markeaze-js-tracker@latest/dist/mkz.js",appId:"markeaze"}};e.exports=n.staging||n.staging}]);