(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{418:function(t,e,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("f26ff834",content,!0,{sourceMap:!1})},426:function(t,e,r){"use strict";r(418)},427:function(t,e,r){var n=r(95)(!1);n.push([t.i,".image[data-v-cb4a754c]{width:480px}",""]),t.exports=n},452:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(39),{middleware:"auth",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.next=3,r.$get("https://picsum.photos/id/".concat(n.id,"/info"));case 3:return o=e.sent,e.abrupt("return",{photo:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=(r(426),r(40)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Photo Detail")]),t._v(" "),r("img",{staticClass:"image",attrs:{src:t.photo.download_url,alt:"Photo Image"}}),t._v(" "),r("p",[t._v("Author : "+t._s(t.photo.author))])])}),[],!1,null,"cb4a754c",null);e.default=component.exports}}]);