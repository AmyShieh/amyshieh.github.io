"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[2213],{15680:(e,n,t)=>{t.d(n,{xA:()=>i,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(g,".").concat(u)]||d[u]||y[u]||l;return t?a.createElement(m,o(o({ref:n},i),{},{components:t})):a.createElement(m,o({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var g in n)hasOwnProperty.call(n,g)&&(p[g]=n[g]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="npm",p={unversionedId:"node/npm",id:"node/npm",title:"npm",description:"npm \u5b98\u7f51",source:"@site/docs/node/npm.md",sourceDirName:"node",slug:"/node/npm",permalink:"/docs/node/npm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ecf\u9a8c\u603b\u7ed3",permalink:"/docs/node/BP"},next:{title:"yarn",permalink:"/docs/node/yarn"}},g={},s=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:2},{value:"\u7248\u672c\u53f7\u547d\u540d",id:"\u7248\u672c\u53f7\u547d\u540d",level:3},{value:"\u7248\u672c\u53f7\u524d\u7684\u5c0f\u7b26\u53f7",id:"\u7248\u672c\u53f7\u524d\u7684\u5c0f\u7b26\u53f7",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"node sass \u7684\u5b89\u88c5",id:"node-sass-\u7684\u5b89\u88c5",level:3},{value:"1. \u8bbe\u7f6e.yarnrc \u6216\u8005.npmrc",id:"1-\u8bbe\u7f6eyarnrc-\u6216\u8005npmrc",level:4},{value:"2. \u4fee\u6539\u5b89\u88c5\u7684\u955c\u50cf\u6e90\uff0c\u5176\u5b9e\u548c\u7b2c\u4e00\u4e2a\u7684\u4f5c\u7528\u5dee\u4e0d\u591a\uff0c\u5c31\u770b\u81ea\u5df1\u7684\u4f7f\u7528\u573a\u666f\u4e86\u3002",id:"2-\u4fee\u6539\u5b89\u88c5\u7684\u955c\u50cf\u6e90\u5176\u5b9e\u548c\u7b2c\u4e00\u4e2a\u7684\u4f5c\u7528\u5dee\u4e0d\u591a\u5c31\u770b\u81ea\u5df1\u7684\u4f7f\u7528\u573a\u666f\u4e86",level:4},{value:"3. \u786e\u8ba4\u4e00\u4e0b node &amp; node saas \u7248\u672c\u5339\u914d",id:"3-\u786e\u8ba4\u4e00\u4e0b-node--node-saas-\u7248\u672c\u5339\u914d",level:4},{value:"3. resolutions \u7edf\u4e00\u7248\u672c",id:"3-resolutions-\u7edf\u4e00\u7248\u672c",level:4},{value:"nvm",id:"nvm",level:3}],i={toc:s},d="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"npm"},"npm"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm \u5b98\u7f51")),(0,r.yg)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,r.yg)("h3",{id:"\u7248\u672c\u53f7\u547d\u540d"},"\u7248\u672c\u53f7\u547d\u540d"),(0,r.yg)("p",null,"1.2.3-alive-amy-test-111"),(0,r.yg)("p",null,"1: \u4e3b\u7248\u672c\u53f7-major \u2014\u2014 \u505a\u4e86\u4e0d\u517c\u5bb9\u7684\u4fee\u6539(\u5177\u6709\u7834\u574f\u6027\uff0c\u5347\u7ea7\u9700\u8981\u7279\u522b\u6ce8\u610f)\n2: \u6b21\u7248\u672c\u53f7-minor \u2014\u2014 \u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684 feature\n3:\u4fee\u8ba2\u53f7-patch \u2014\u2014 \u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684 bug fix(\u4ee5\u53ca\u4e00\u4e9b\u5c0f feature)\nalive-amy-test-111: \u5148\u884c\u7248\u672c\u53f7 ","[0-9A-Za-z-]","\u3002 \u4e00\u822c\u6709 alpha(\u4e0d\u7a33\u5b9a),beta(\u57fa\u672c\u7a33\u5b9a,\u82f9\u679c\u4e0d\u662f\u7ecf\u5e38\u51fa\u4e00\u4e9b beta \u7248\u672c\u8ba9\u7528\u6237\u5148\u884c",(0,r.yg)("del",{parentName:"p"},"\u3010\u6d4b\u8bd5 bug(\u4e0d\u662f)\u3011"),"\u4f53\u9a8c,rc(\u57fa\u672c\u7b97\u662f\u6b63\u5f0f\u7248\u4e86),release(\u6b63\u5f0f\u7248)"),(0,r.yg)("h3",{id:"\u7248\u672c\u53f7\u524d\u7684\u5c0f\u7b26\u53f7"},"\u7248\u672c\u53f7\u524d\u7684\u5c0f\u7b26\u53f7"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'\u3010~\u3011: \u5141\u8bb8\u5b89\u88c5\u548c\u66f4\u65b0\u5230\u76f8\u540c\u4e3b\u8981\u548c\u6b21\u8981\u7248\u672c\u7684\u65b0\u7248\u672c\u3002\u5b83\u53ea\u5141\u8bb8\u8fdb\u884c\u4fee\u8865\u7248\u672c\u7684\u5347\u7ea7\uff0c\u800c\u4e0d\u4f1a\u5347\u7ea7\u5230\u4e0b\u4e00\u4e2a\u6b21\u8981\u7248\u672c\u3002\u4f8b\u5982\uff0c"~1.2.3" \u53ef\u4ee5\u5339\u914d 1.2.3\u30011.2.4\uff0c\u4f46\u4e0d\u5305\u62ec 1.3.0\u3002'),(0,r.yg)("li",{parentName:"ul"},'\u3010^\u3011: \u5141\u8bb8\u5b89\u88c5\u66f4\u9ad8\u7684\u6b21\u8981\u548c\u4fee\u8865\u7248\u672c\uff0c\u4f46\u4e0d\u5141\u8bb8\u5347\u7ea7\u5230\u4e0b\u4e00\u4e2a\u4e3b\u8981\u7248\u672c\u3002\u4f8b\u5982\uff0c"^1.2.3" \u53ef\u4ee5\u5339\u914d 1.2.3\u30011.2.4\u30011.3.0 \u7b49\u7248\u672c\u3002'),(0,r.yg)("li",{parentName:"ul"},"\u3010","*","\u3011:\u5141\u8bb8\u5339\u914d\u4efb\u4f55\u7248\u672c\u3002\u5b83\u8868\u793a\u65e0\u9650\u5236\u5730\u63a5\u53d7\u4efb\u4f55\u65b0\u7248\u672c\u3002\u8fd9\u610f\u5473\u7740\u5728\u66f4\u65b0\u4f9d\u8d56\u65f6\u5c06\u83b7\u53d6\u6700\u65b0\u53ef\u7528\u7684\u7248\u672c\u3002\u4f46\u662f\u8981\u6ce8\u610f\uff0c\u4f7f\u7528\u8be5\u7b26\u53f7\u53ef\u80fd\u5bfc\u81f4\u4e0d\u53ef\u9884\u6d4b\u7684\u884c\u4e3a\u548c\u6f5c\u5728\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002")),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("h3",{id:"node-sass-\u7684\u5b89\u88c5"},"node sass \u7684\u5b89\u88c5"),(0,r.yg)("p",null,"windows \u7248\u672c\uff0c\u4f4e\u7248\u672c\u7684 node,\u5b89\u88c5\u8d77 node-sass \u771f\u7684\u662f\u2026\u2026 \u4e00\u8a00\u96be\u5c3d\uff0c\u6709\u4e9b\u516c\u53f8\u5185\u7f51\u573a\u666f\u4e0b\uff0c\u4f60\u53c8\u6ca1\u6cd5\u628a\u91cd\u8bbe\u6574\u4e2a\u955c\u50cf\u6e90\u3002\n\u89e3\u51b3\u65b9\u6848\u6709\u4e09\u79cd"),(0,r.yg)("h4",{id:"1-\u8bbe\u7f6eyarnrc-\u6216\u8005npmrc"},"1. \u8bbe\u7f6e.yarnrc \u6216\u8005.npmrc"),(0,r.yg)("p",null,"\u5177\u4f53\u8981\u54ea\u4e2a\u6587\u4ef6\u770b\u4f60\u7528\u4ec0\u4e48\u6307\u4ee4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title=".yarnrc"',title:'".yarnrc"'},'sass_binary_site="https://npm.taobao.org/mirrors/node-sass"\n')),(0,r.yg)("h4",{id:"2-\u4fee\u6539\u5b89\u88c5\u7684\u955c\u50cf\u6e90\u5176\u5b9e\u548c\u7b2c\u4e00\u4e2a\u7684\u4f5c\u7528\u5dee\u4e0d\u591a\u5c31\u770b\u81ea\u5df1\u7684\u4f7f\u7528\u573a\u666f\u4e86"},"2. \u4fee\u6539\u5b89\u88c5\u7684\u955c\u50cf\u6e90\uff0c\u5176\u5b9e\u548c\u7b2c\u4e00\u4e2a\u7684\u4f5c\u7528\u5dee\u4e0d\u591a\uff0c\u5c31\u770b\u81ea\u5df1\u7684\u4f7f\u7528\u573a\u666f\u4e86\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass\nyarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\nnpm install -g node-gyp\n")),(0,r.yg)("h4",{id:"3-\u786e\u8ba4\u4e00\u4e0b-node--node-saas-\u7248\u672c\u5339\u914d"},"3. \u786e\u8ba4\u4e00\u4e0b node & node saas \u7248\u672c\u5339\u914d"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-sass"},"node-sass npm \u5305")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"NodeJS"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported node-sass version"),(0,r.yg)("th",{parentName:"tr",align:null},"Node Module"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 20"),(0,r.yg)("td",{parentName:"tr",align:null},"9.0+"),(0,r.yg)("td",{parentName:"tr",align:null},"115")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 19"),(0,r.yg)("td",{parentName:"tr",align:null},"8.0+"),(0,r.yg)("td",{parentName:"tr",align:null},"111")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 18"),(0,r.yg)("td",{parentName:"tr",align:null},"8.0+"),(0,r.yg)("td",{parentName:"tr",align:null},"108")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 17"),(0,r.yg)("td",{parentName:"tr",align:null},"7.0+, <8.0"),(0,r.yg)("td",{parentName:"tr",align:null},"102")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 16"),(0,r.yg)("td",{parentName:"tr",align:null},"6.0+"),(0,r.yg)("td",{parentName:"tr",align:null},"93")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 15"),(0,r.yg)("td",{parentName:"tr",align:null},"5.0+, <7.0"),(0,r.yg)("td",{parentName:"tr",align:null},"88")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 14"),(0,r.yg)("td",{parentName:"tr",align:null},"4.14+, <9.0"),(0,r.yg)("td",{parentName:"tr",align:null},"83")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 13"),(0,r.yg)("td",{parentName:"tr",align:null},"4.13+, <5.0"),(0,r.yg)("td",{parentName:"tr",align:null},"79")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 12"),(0,r.yg)("td",{parentName:"tr",align:null},"4.12+, <8.0"),(0,r.yg)("td",{parentName:"tr",align:null},"72")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 11"),(0,r.yg)("td",{parentName:"tr",align:null},"4.10+, <5.0"),(0,r.yg)("td",{parentName:"tr",align:null},"67")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 10"),(0,r.yg)("td",{parentName:"tr",align:null},"4.9+, <6.0"),(0,r.yg)("td",{parentName:"tr",align:null},"64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node 8"),(0,r.yg)("td",{parentName:"tr",align:null},"4.5.3+, <5.0"),(0,r.yg)("td",{parentName:"tr",align:null},"57")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Node <8"),(0,r.yg)("td",{parentName:"tr",align:null},"<5.0"),(0,r.yg)("td",{parentName:"tr",align:null},"<57")))),(0,r.yg)("h4",{id:"3-resolutions-\u7edf\u4e00\u7248\u672c"},"3. resolutions \u7edf\u4e00\u7248\u672c"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u2764\u2764\u2764: \u5982\u679c\u9879\u76ee\u6ca1\u4ec0\u4e48\u7279\u522b\u7684\u5751\u7684\u8bdd,\u6211\u81ea\u5df1\u6700\u559c\u6b22\u7528\u8fd9\u79cd\u65b9\u5f0f\u6765\u89e3\u51b3")),(0,r.yg)("hr",null),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u56e0\u4e3a node-sass \u5176\u5b9e\u73b0\u5728\u5df2\u7ecf\u4e0d\u7528\u4e86\uff0c\u6539\u7528 sass \u6765\u66ff\u4ee3\u3002\u6240\u4ee5\u6211\u4eec\u5728\u540c\u4e00\u7248\u672c\u7684\u65f6\u5019\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 sass \u6765\u66ff\u4ee3\u3002")),(0,r.yg)("p",null,"\u65b9\u6cd5\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u5b89\u88c5",(0,r.yg)("inlineCode",{parentName:"li"},"sass")," => ",(0,r.yg)("inlineCode",{parentName:"li"},"yarn add sass -D")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("ol",{parentName:"li",start:2},(0,r.yg)("li",{parentName:"ol"},"resolutions \u914d\u7f6e")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"resolutions": {\n    "node-sass": file:./dependency-package/node-sass"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("ol",{parentName:"li",start:3},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u4e0e package.json \u540c\u7ea7\u7684 folder&file: dependency-package/node-sass/index.js")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="dependency-package/node-sass/index.js"',title:'"dependency-package/node-sass/index.js"'},"module.exports = require('sass');\n")),(0,r.yg)("h3",{id:"nvm"},"nvm"),(0,r.yg)("p",null,"\u5168\u5c40\u8bbe\u7f6e\n",(0,r.yg)("a",{parentName:"p",href:"https://juejin.cn/post/7139713925490147364"},"https://juejin.cn/post/7139713925490147364")))}y.isMDXComponent=!0}}]);