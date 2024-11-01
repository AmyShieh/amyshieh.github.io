"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[3337],{45605:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),r=a(67294);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};var o=a(42135),c=function(e,t){return r.createElement(o.Z,(0,n.Z)({},e,{ref:t,icon:s}))};const i=r.forwardRef(c)},27052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),s=a(91360);const o={},c=void 0,i={unversionedId:"myBox/success",id:"myBox/success",title:"success",description:"",source:"@site/docs-hide/myBox/success.mdx",sourceDirName:"myBox",slug:"/myBox/success",permalink:"/docs-hide/myBox/success",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"retro",permalink:"/docs-hide/myBox/retro"},next:{title:"Savoring & Gratitude",permalink:"/docs-hide/savoring-gratitude"}},l={},m=[["20240815","\u770b\u5230\u4e86\u522b\u4eba\u575a\u6301\u5199\u611f\u6069\u65e5\u8bb0\u5f88\u591a\u5e74\uff0c\u6211\u91cd\u65b0\u6574\u7406\u4e86\u81ea\u5df1\u7684\u6587\u6863","\u4f1a\u89c9\u5f97\u4e00\u5207\u90fd\u5728\u6162\u6162\u5730\u5f80\u597d\u7684\u65b9\u5411\u53d1\u5c55"],["20240906","\u516c\u53f8\u664b\u5347\u901a\u8fc7\u5566~\u8fd8\u6da8\u4e862000\u591a\u7684\u5de5\u8d44","\u5f88\u5f00\u5fc3\uff0c\u89c9\u5f97\u81ea\u5df1\u88ab\u8ba4\u53ef"],["","",""]],u=[],d={toc:u},f="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{data:m,dimension:["\u65e5\u671f\u548c\u65f6\u95f4","\u4e8b\u4ef6","\u6211\u7684\u611f\u53d7\u5982\u4f55"],isRandom:!1,mdxType:"BasicTable"}))}p.isMDXComponent=!0},91262:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(72389);function s(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},91360:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(83062),s=a(97029),o=a(19472),c=a(67294),i=a(79910),l=a(91262),m=a(45605);function u(e){const{data:t=[],showRandom:a=!0,isRandom:u,showNo:d=!0,fixedLeft:f,showSortBy:p=!0,isDesc:h=!0,dimension:g=[],noWrapDimension:y=[],...v}=e,E=t.filter((e=>e.some((e=>e)))),[k,w]=(0,c.useState)(E),[x,Z]=(0,c.useState)([]),[b,B]=(0,c.useState)(h),S=(0,c.useCallback)((()=>{w((e=>(0,i.M)(e)))}),[]),M=(0,c.useCallback)((()=>{w([...E])}),[]),C=(0,c.useCallback)((()=>{w([...E].reverse())}),[]),N=(d?[{title:"No",key:"No",dataIndex:"No"}]:[]).concat(g.map((e=>({title:e,dataIndex:e,key:e,render:t=>{if("string"==typeof t){const[a,n]=t?.split("#");return c.createElement(r.Z,{title:n?c.createElement("span",{style:{whiteSpace:"pre-wrap"}},n):void 0,color:"lime"},c.createElement("span",{style:{whiteSpace:"nowrap"}},y.includes(e)?c.createElement("span",{style:{whiteSpace:"nowrap"}},a):a,!!n&&c.createElement(m.Z,{style:{marginLeft:4}})))}return t}}))).map(((e,t)=>({...e,width:f&&!t?96:void 0,fixed:f&&!t?"left":void 0}))));return(0,c.useEffect)((()=>{b?C():M()}),[b]),(0,c.useEffect)((()=>{u&&S()}),[u]),(0,c.useEffect)((()=>{const e=[];k.forEach(((t,a)=>{const n={};t.forEach(((e,t)=>{n[g[t]]=e,d&&(n.No=a+1)})),e.push(n)})),Z(e)}),[k]),c.createElement(l.Z,null,(()=>c.createElement(c.Fragment,null,a&&c.createElement(s.ZP,{type:"primary",style:{marginBottom:10,marginRight:10},onClick:S},"Random"),p&&c.createElement(s.ZP,{style:{marginBottom:10},onClick:()=>B((e=>!e))},"sort by ",b?"asc":"desc"),c.createElement("span",{className:"ml10"},"\u603b\u8ba1\uff1a",k.length),c.createElement(o.Z,(0,n.Z)({},v,{dataSource:x,columns:N,pagination:{defaultPageSize:100}})))))}},79910:(e,t,a)=>{a.d(t,{M:()=>r,e:()=>n});const n=(e,t)=>{if(t<=1||e.length<=1)return e;{const a=Math.ceil(e.length/t),n=new Array(a);for(let r=0;r<n.length;r++)n[r]=new Array(t).fill("").map(((a,n)=>e[t*r+n]));return n}},r=function(e){void 0===e&&(e=[]);const t=[...e],a=[];for(;t.length;){const e=Math.floor(Math.random()*t.length);a.push(t[e]),t.splice(e,1)}return a}}}]);