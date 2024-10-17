"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[6424],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),v=a,f=s["".concat(c,".").concat(v)]||s[v]||d[v]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},94424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="java",i={unversionedId:"be/java/index",id:"be/java/index",title:"java",description:"start",source:"@site/docs/be/java/index.md",sourceDirName:"be/java",slug:"/be/java/",permalink:"/docs/be/java/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/docs/be/go/"},next:{title:"Springboot",permalink:"/docs/be/java/spring-boot"}},c={},p=[{value:"start",id:"start",level:2},{value:"JDK &amp; JRE",id:"jdk--jre",level:3},{value:"Q&amp;A",id:"qa",level:2},{value:"jar \u5305\u548c war \u5305\u7684\u533a\u522b",id:"jar-\u5305\u548c-war-\u5305\u7684\u533a\u522b",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java"},"java"),(0,a.kt)("h2",{id:"start"},"start"),(0,a.kt)("h3",{id:"jdk--jre"},"JDK & JRE"),(0,a.kt)("p",null,"JRE: java \u8fd0\u884c\u73af\u5883\nJDK: java \u5f00\u53d1\u5de5\u5177\u5305\nJDK \u4e2d\u5305\u542b JRE,\u6240\u4ee5\u5b89\u88c5 JDK \u5c31\u4e0d\u7528\u518d\u5355\u72ec\u5b89\u88c5 JRE\u3002\u4f46\u53ea\u5b89 JRE \u7684\u8bdd\uff0c\u5c31\u53ea\u80fd\u7528\u7a0b\u5e8f\uff0c\u65e0\u6cd5\u7f16\u8bd1\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u662f windows\uff0c\u8fd8\u5f97\u5728 path \u91cc\u8bbe\u7f6e jdk/bin \u76ee\u5f55(\u65b0\u7248\u597d\u50cf\u4e0d\u7528\u4e86,\u4f46\u8fd8\u662f\u5f97\u8bbe\u7f6e JAVA_HOME<\u5230 jdk \u5c42\u5c31\u884c>,\u4e0d\u7136 IDEA \u6709\u65f6\u5019\u627e\u4e0d\u5230)\u3002"),(0,a.kt)("p",null,"(JDK \u4e0b\u8f7d\u5730\u5740)","[https://www.oracle.com/java/technologies/downloads/]"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u4ee5\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"java -version\njavac\n")),(0,a.kt)("h2",{id:"qa"},"Q&A"),(0,a.kt)("h3",{id:"jar-\u5305\u548c-war-\u5305\u7684\u533a\u522b"},"jar \u5305\u548c war \u5305\u7684\u533a\u522b"))}d.isMDXComponent=!0}}]);