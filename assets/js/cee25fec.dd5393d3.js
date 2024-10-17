"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[9293],{45605:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(87462),r=a(67294);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};var s=a(42135),c=function(e,t){return r.createElement(s.Z,(0,n.Z)({},e,{ref:t,icon:o}))};const l=r.forwardRef(c)},78469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(91360);const s={},c=void 0,l={unversionedId:"myBox/\u6210\u529f\u65e5\u8bb0",id:"myBox/\u6210\u529f\u65e5\u8bb0",title:"\u6210\u529f\u65e5\u8bb0",description:"",source:"@site/docs-hide/myBox/\u6210\u529f\u65e5\u8bb0.mdx",sourceDirName:"myBox",slug:"/myBox/\u6210\u529f\u65e5\u8bb0",permalink:"/docs-hide/myBox/\u6210\u529f\u65e5\u8bb0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u611f\u6069\u65e5\u8bb0",permalink:"/docs-hide/myBox/\u611f\u6069\u65e5\u8bb0"},next:{title:"Savoring & Gratitude",permalink:"/docs-hide/savoring-gratitude"}},i={},m=[["20240815","\u770b\u5230\u4e86\u522b\u4eba\u575a\u6301\u5199\u611f\u6069\u65e5\u8bb0\u5f88\u591a\u5e74\uff0c\u6211\u91cd\u65b0\u6574\u7406\u4e86\u81ea\u5df1\u7684\u6587\u6863","\u4f1a\u89c9\u5f97\u4e00\u5207\u90fd\u5728\u6162\u6162\u5730\u5f80\u597d\u7684\u65b9\u5411\u53d1\u5c55"],["20240906","\u516c\u53f8\u664b\u5347\u901a\u8fc7\u5566~\u8fd8\u6da8\u4e862000\u591a\u7684\u5de5\u8d44","\u5f88\u5f00\u5fc3\uff0c\u89c9\u5f97\u81ea\u5df1\u88ab\u8ba4\u53ef"],["","",""]],d=[],u={toc:d},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{data:m,dimension:["\u65e5\u671f\u548c\u65f6\u95f4","\u4e8b\u4ef6","\u6211\u7684\u611f\u53d7\u5982\u4f55"],isRandom:!1,mdxType:"BasicTable"}))}f.isMDXComponent=!0},91262:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(72389);function o(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},91360:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83062),r=a(97029),o=a(19472),s=a(67294),c=a(79910),l=a(91262),i=a(45605);function m(e){const{data:t=[],showRandom:a=!0,isRandom:m,showNo:d=!0,showSortBy:u=!0,isDesc:p=!0,dimension:f=[],noWrapDimension:h=[]}=e,g=t.filter((e=>e.some((e=>e)))),[y,E]=(0,s.useState)(g),[k,v]=(0,s.useState)([]),[w,x]=(0,s.useState)(p),Z=(0,s.useCallback)((()=>{E((e=>(0,c.M)(e)))}),[]),b=(0,s.useCallback)((()=>{E([...g])}),[]),B=(0,s.useCallback)((()=>{E([...g].reverse())}),[]),S=(d?[{title:"No",key:"No",dataIndex:"No"}]:[]).concat(f.map((e=>({title:e,dataIndex:e,key:e,render:t=>{if("string"==typeof t){const[a,r]=t?.split("#");return s.createElement(n.Z,{title:r?s.createElement("span",{style:{whiteSpace:"pre-wrap"}},r):void 0,color:"lime"},s.createElement("span",{style:{whiteSpace:"nowrap"}},h.includes(e)?s.createElement("span",{style:{whiteSpace:"nowrap"}},a):a,!!r&&s.createElement(i.Z,{style:{marginLeft:4}})))}return t}}))));return(0,s.useEffect)((()=>{w?B():b()}),[w]),(0,s.useEffect)((()=>{m&&Z()}),[m]),(0,s.useEffect)((()=>{const e=[];y.forEach(((t,a)=>{const n={};t.forEach(((e,t)=>{n[f[t]]=e,d&&(n.No=a+1)})),e.push(n)})),v(e)}),[y]),s.createElement(l.Z,null,(()=>s.createElement(s.Fragment,null,a&&s.createElement(r.ZP,{type:"primary",style:{marginBottom:10,marginRight:10},onClick:Z},"Random"),u&&s.createElement(r.ZP,{style:{marginBottom:10},onClick:()=>x((e=>!e))},"sort by ",w?"asc":"desc"),s.createElement("span",{className:"ml10"},"\u603b\u8ba1\uff1a",y.length),s.createElement(o.Z,{dataSource:k,columns:S,pagination:{defaultPageSize:100}}))))}},79910:(e,t,a)=>{a.d(t,{M:()=>r,e:()=>n});const n=(e,t)=>{if(t<=1||e.length<=1)return e;{const a=Math.ceil(e.length/t),n=new Array(a);for(let r=0;r<n.length;r++)n[r]=new Array(t).fill("").map(((a,n)=>e[t*r+n]));return n}},r=function(e){void 0===e&&(e=[]);const t=[...e],a=[];for(;t.length;){const e=Math.floor(Math.random()*t.length);a.push(t[e]),t.splice(e,1)}return a}}}]);