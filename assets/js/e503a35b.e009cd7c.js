"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[9960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={},a="\u6253\u5305",s={unversionedId:"project/build",id:"project/build",title:"\u6253\u5305",description:"\u524d\u8a00",source:"@site/docs/project/build.md",sourceDirName:"project",slug:"/project/build",permalink:"/docs/project/build",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DDD",permalink:"/docs/project/DDD"},next:{title:"\u67b6\u6784",permalink:"/docs/project/construct"}},i={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"ES module format",id:"es-module-format",level:3},{value:"commonjs module format",id:"commonjs-module-format",level:3},{value:"commonjs versus ES module",id:"commonjs-versus-es-module",level:3},{value:"usage",id:"usage",level:4},{value:"flexibility",id:"flexibility",level:4},{value:"synchronous &amp; asynchronous",id:"synchronous--asynchronous",level:4},{value:"Turbopack",id:"turbopack",level:2},{value:"webpack",id:"webpack",level:2},{value:"rollup",id:"rollup",level:2},{value:"parceljs",id:"parceljs",level:2},{value:"versus",id:"versus",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6253\u5305"},"\u6253\u5305"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u5728\u8bf4\u6253\u5305\u524d\uff0c\u6709\u4e00\u4e9b\u57fa\u7840\u6982\u5ff5\u6211\u4eec\u9700\u8981\u641e\u6e05\u695a\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"commonjs vs ES modules"),(0,o.kt)("li",{parentName:"ol"},"babel")),(0,o.kt)("h3",{id:"es-module-format"},"ES module format"),(0,o.kt)("p",null,"Official standard format to package js code for a reuse.\nmost modern browsers natively support the modules."),(0,o.kt)("p",null,"load: import\nexport: export"),(0,o.kt)("h3",{id:"commonjs-module-format"},"commonjs module format"),(0,o.kt)("p",null,"Nodejs, support the cjs format by default. v13.2.0 has stable support for ES module."),(0,o.kt)("p",null,"load: require\nexport: module.exports"),(0,o.kt)("h3",{id:"commonjs-versus-es-module"},"commonjs versus ES module"),(0,o.kt)("h4",{id:"usage"},"usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="util.js"',title:'"util.js"'},"module.exports.hello = function (name) {\n    return `hello ${name}`;\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="usage.js"',title:'"usage.js"'},"const { hello } = require('./utils');\nconsolel.log(hello('aliveAmy'));\n")),(0,o.kt)("admonition",{title:"how to enable ES modules in Node.js package?",type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"just change the file extension from ",(0,o.kt)("inlineCode",{parentName:"li"},".js")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs"))),(0,o.kt)("p",{parentName:"admonition"},"or"),(0,o.kt)("ol",{parentName:"admonition",start:2},(0,o.kt)("li",{parentName:"ol"},"set package.json's module field")),(0,o.kt)("p",{parentName:"admonition"},"or"),(0,o.kt)("ol",{parentName:"admonition",start:3},(0,o.kt)("li",{parentName:"ol"},"babel: compile ES module syntax down to commonJS syntax\n:::")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="util.mjs"',title:'"util.mjs"'},"module.exports.hello = function (name) {\n    return `hello ${name}`;\n};\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="usage.mjs"',title:'"usage.mjs"'},"import { hello } from './utils.mjs';\nconsolel.log(hello('aliveAmy'));\n"))),(0,o.kt)("p",null,"require() get returns from module.exports.\nexports.XXX doesn't return by require().\n:::"),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "alive-amy",\n    "type": "module"\n}\n')),(0,o.kt)("h4",{id:"flexibility"},"flexibility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import")," can only be written in the beginning of the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"require")," can be called anywhere in the code."),(0,o.kt)("h4",{id:"synchronous--asynchronous"},"synchronous & asynchronous"),(0,o.kt)("p",null,"commonJS: synchronous\nES module: asynchronous"),(0,o.kt)("h2",{id:"turbopack"},"Turbopack"),(0,o.kt)("h2",{id:"webpack"},"webpack"),(0,o.kt)("h2",{id:"rollup"},"rollup"),(0,o.kt)("h2",{id:"parceljs"},"parceljs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://parceljs.org/getting-started/webapp/"},"parceljs-webApp")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  yarn add --dev parcel\n")),(0,o.kt)("h2",{id:"versus"},"versus"))}c.isMDXComponent=!0}}]);