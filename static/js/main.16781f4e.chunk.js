(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),d=n(1),s=(n(9),n(10),n(11),n(0)),b=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,i=e.some((function(t){return t.id===n}))?n:e[0].id,a=e.find((function(t){return t.id===i}))||e[0];return Object(s.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(s.jsx)("div",{className:"tabs is-boxed",children:Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{className:t.id===a.id?"is-active":"","data-cy":"Tab",children:Object(s.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){t.id!==a.id&&c(t)},children:t.title})},t.id)}))})}),Object(s.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t,e=Object(d.useState)("tab-1"),n=Object(a.a)(e,2),c=n[0],i=n[1],l=null===(t=o.find((function(t){return t.id===c})))||void 0===t?void 0:t.title;return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsxs)("h1",{className:"title",children:["Selected tab is"," ",l]}),Object(s.jsx)(b,{tabs:o,selectedTabId:c,onTabSelected:function(t){i(t.id)}})]})};i.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.16781f4e.chunk.js.map