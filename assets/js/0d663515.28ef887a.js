"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[2941],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18870:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(58168),o=(t(96540),t(15680));const a={},i="\u5e38\u7528\u51fd\u6570",l={unversionedId:"algorithm/util",id:"algorithm/util",title:"\u5e38\u7528\u51fd\u6570",description:"\u968f\u673a\u6392\u5e8f",source:"@site/docs/algorithm/util.mdx",sourceDirName:"algorithm",slug:"/algorithm/util",permalink:"/docs/algorithm/util",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6811",permalink:"/docs/algorithm/tree"},next:{title:"\u8ba1\u7b97\u673a\u56fe\u5f62\u5b66",permalink:"/docs/graphic/"}},c={},u=[{value:"\u968f\u673a\u6392\u5e8f",id:"\u968f\u673a\u6392\u5e8f",level:2},{value:"\u77e9\u9635",id:"\u77e9\u9635",level:2}],p={toc:u},s="wrapper";function m(e){let{components:r,...t}=e;return(0,o.yg)(s,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u5e38\u7528\u51fd\u6570"},"\u5e38\u7528\u51fd\u6570"),(0,o.yg)("h2",{id:"\u968f\u673a\u6392\u5e8f"},"\u968f\u673a\u6392\u5e8f"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"export const randomArr = (arr = []) => {\n  const optArr = [...arr];\n  const res = [];\n  while (optArr.length) {\n    const randomIndex = Math.floor(Math.random() * optArr.length);\n    res.push(optArr[randomIndex]);\n    optArr.splice(randomIndex, 1);\n  }\n  return res;\n};\n")),(0,o.yg)("h2",{id:"\u77e9\u9635"},"\u77e9\u9635"))}m.isMDXComponent=!0}}]);