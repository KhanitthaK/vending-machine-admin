(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{424:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("42d1aad7",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r(424)},439:function(t,e,r){var n=r(95)(!1);n.push([t.i,".avatar[data-v-72ef2b2b]{width:128px;height:128px}",""]),t.exports=n},457:function(t,e,r){"use strict";r.r(e);var n=r(26),o=r(8),c=(r(39),r(10),r(18),r(19),r(30),{middleware:"auth",head:function(){return{title:this.title}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,v,d,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o="https://api.github.com",r.setHeader("Authorization",null),e.next=5,Promise.all([r.$get("".concat(o,"/users/phonbopit")),r.$get("".concat(o,"/users/phonbopit/repos"))]);case 5:return c=e.sent,l=Object(n.a)(c,2),v=l[0],d=l[1],_=v.name,e.abrupt("return",{user:v,repos:d,title:_});case 11:case"end":return e.stop()}}),e)})))()}}),l=(r(438),r(40)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container has-text-centered"},[r("h2",{staticClass:"title"},[t._v("My Profile")]),t._v(" "),r("img",{staticClass:"avatar",attrs:{src:t.user.avatar_url,alt:"User Avatar"}}),t._v(" "),r("p",[t._v("Bio : "+t._s(t.user.bio))]),t._v(" "),r("p",[t._v("Location : "+t._s(t.user.location))]),t._v(" "),r("div",{staticClass:"columns is-multiline"},t._l(t.repos,(function(e){return r("div",{key:e.id,staticClass:"column is-3"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("a",{attrs:{href:e.html_url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.name))]),t._v(" "),r("p",[t._v("Star : "+t._s(e.stargazers_count))])])])])})),0)])}),[],!1,null,"72ef2b2b",null);e.default=component.exports}}]);