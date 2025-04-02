"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[6047],{3514:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),i=r(20053),a=r(84142),c=r(75489),l=r(16654),o=r(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,i.A)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",s.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.A)("text--truncate",s.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,a._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,a.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const c=(0,a.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,y=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(58168),i=(r(96540),r(15680)),a=r(3514);const c={id:"physical"},l="\u2728 \u5fc3\u7406\u5b66",o={unversionedId:"physical/physical",id:"physical/physical",title:"\u2728 \u5fc3\u7406\u5b66",description:"\u4e00\u4e9b\u57fa\u7840\u80cc\u666f\u77e5\u8bc6",source:"@site/docs-reading/physical/index.mdx",sourceDirName:"physical",slug:"/physical/",permalink:"/docs-reading/physical/",draft:!1,tags:[],version:"current",frontMatter:{id:"physical"},sidebar:"tutorialSidebar",previous:{title:"\u9053\u5fb7\u7ecf \xb7 \u8001\u5b50",permalink:"/docs-reading/history/\u9053\u5fb7\u7ecf"},next:{title:"\u529b\u91cf",permalink:"/docs-reading/physical/power"}},s={},u=[{value:"\u4e00\u4e9b\u57fa\u7840\u80cc\u666f\u77e5\u8bc6",id:"\u4e00\u4e9b\u57fa\u7840\u80cc\u666f\u77e5\u8bc6",level:2},{value:"\u4e00\u4e9b\u89c2\u70b9",id:"\u4e00\u4e9b\u89c2\u70b9",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"-\u5fc3\u7406\u5b66"},"\u2728 \u5fc3\u7406\u5b66"),(0,i.yg)("h2",{id:"\u4e00\u4e9b\u57fa\u7840\u80cc\u666f\u77e5\u8bc6"},"\u4e00\u4e9b\u57fa\u7840\u80cc\u666f\u77e5\u8bc6"),(0,i.yg)("p",null,"\u5f17\u6d1b\u4f0a\u5fb7\u7684\u4eba\u683c\u7ed3\u6784\u7406\u8bba\uff1a \u672c\u6211\u3001\u81ea\u6211\u3001\u8d85\u6211\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u672c\u6211\uff1a \u610f\u8bc6\u4e0d\u5230\u7684\u6b32\u671b\uff0c\u5982\u5403\u996d\u3001\u7761\u89c9\u3001\u6392\u6cc4\u7b49\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u81ea\u6211\uff1a \u6709\u610f\u8bc6\uff0c\u6709\u903b\u8f91\uff0c\u6709\u7406\u6027\uff0c\u6709\u9053\u5fb7\uff0c\u6709\u793e\u4f1a\u6027\u7684\u90e8\u5206\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u8d85\u6211\uff1a \u4eba\u7684\u9053\u5fb7\u51c6\u5219\uff0c\u5305\u62ec\u6b63\u4e49\u3001\u8bda\u5b9e\u3001\u5fe0\u8bda\u3001\u6148\u60b2\u3001\u8c26\u900a\u7b49\u3002")),(0,i.yg)("h2",{id:"\u4e00\u4e9b\u89c2\u70b9"},"\u4e00\u4e9b\u89c2\u70b9"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u88ab\u770b\u505a\u4e00\u4e2a\u80fd\u91cf\u6ce1\uff0c\u8fd9\u4e2a\u80fd\u91cf\u6ce1\u5728\u6210\u957f\u4e2d\uff0c\u5fc5\u7136\u8981\u4f38\u5c55\u81ea\u5df1\uff0c\u4f38\u5c55\u5c31\u662f\u653b\u51fb\u6027\uff0c\u800c\u653b\u51fb\u6027 \uff0c\u662f\u4eba\u6700\u539f\u59cb\u7684\u80fd\u91cf\u3002 \u2014\u2014\u82f1\u56fd\u5fc3\u7406\u5b66\u5bb6\u6e29\u5c3c\u79d1\u7279"),(0,i.yg)("li",{parentName:"ul"},"\u9a71\u52a8\u4eba\u7c7b\u884c\u52a8\u7684\u52a8\u529b\u6709\u4e24\u4e2a\uff0c\u6027\u548c\u653b\u51fb\u3002")),(0,i.yg)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.yg)("p",null,"\u7f8e\u56fd\u50ac\u7720\u6cbb\u7597\u5e08\u65af\u8482\u82ac\xb7\u5409\u5229\u6839"),(0,i.yg)(a.A,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);