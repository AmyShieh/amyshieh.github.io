"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[1549],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47499:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(58168),o=(t(96540),t(15680));const a={},l="\u5de5\u5177 & \u6548\u7387",i={unversionedId:"others/tools",id:"others/tools",title:"\u5de5\u5177 & \u6548\u7387",description:"Mac",source:"@site/docs/others/tools.md",sourceDirName:"others",slug:"/others/tools",permalink:"/docs/others/tools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TODO",permalink:"/docs/others/todo"}},c={},s=[{value:"Mac",id:"mac",level:2},{value:"brew",id:"brew",level:3},{value:"windows",id:"windows",level:2},{value:"kill \u7aef\u53e3\u8fdb\u7a0b",id:"kill-\u7aef\u53e3\u8fdb\u7a0b",level:3}],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u5de5\u5177--\u6548\u7387"},"\u5de5\u5177 & \u6548\u7387"),(0,o.yg)("h2",{id:"mac"},"Mac"),(0,o.yg)("h3",{id:"brew"},"brew"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")),(0,o.yg)("h2",{id:"windows"},"windows"),(0,o.yg)("h3",{id:"kill-\u7aef\u53e3\u8fdb\u7a0b"},"kill \u7aef\u53e3\u8fdb\u7a0b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"netstat -ano | findstr port\n\ntaskkill -PID XXX -F\n")))}d.isMDXComponent=!0}}]);