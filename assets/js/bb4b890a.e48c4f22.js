"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[593],{45605:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};var s=a(42135),i=function(e,t){return r.createElement(s.Z,(0,n.Z)({},e,{ref:t,icon:o}))};const c=r.forwardRef(i)},52717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(91360);const s={},i=void 0,c={unversionedId:"myBox/gratitude",id:"myBox/gratitude",title:"gratitude",description:"",source:"@site/docs-hide/myBox/gratitude.mdx",sourceDirName:"myBox",slug:"/myBox/gratitude",permalink:"/docs-hide/myBox/gratitude",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u7531\u63a2\u7d22",permalink:"/docs-hide/free"},next:{title:"retro",permalink:"/docs-hide/myBox/retro"}},l={},d=[["20240815","\u770b\u5230\u4e86\u522b\u4eba\u575a\u6301\u5199\u611f\u6069\u65e5\u8bb0\u5f88\u591a\u5e74\uff0c\u6211\u91cd\u65b0\u6574\u7406\u4e86\u81ea\u5df1\u7684\u6587\u6863","\u4f1a\u89c9\u5f97\u4e00\u5207\u90fd\u5728\u6162\u6162\u5730\u5f80\u597d\u7684\u65b9\u5411\u53d1\u5c55"],["","",""],["","",""]],m=[],u={toc:m},f="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{data:d,dimension:["\u65e5\u671f\u548c\u65f6\u95f4","\u4e8b\u4ef6","\u6211\u7684\u611f\u53d7\u5982\u4f55"],isRandom:!1,mdxType:"BasicTable"}))}p.isMDXComponent=!0},91262:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(72389);function o(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},91360:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(83062),o=a(97029),s=a(19472),i=a(67294),c=a(79910),l=a(91262),d=a(45605);function m(e){const{data:t=[],showRandom:a=!0,isRandom:m,showNo:u=!0,fixedLeft:f,showSortBy:p=!0,isDesc:h=!0,dimension:g=[],noWrapDimension:y=[],...E}=e,k=t.filter((e=>e.some((e=>e)))),[v,w]=(0,i.useState)(k),[x,Z]=(0,i.useState)([]),[b,B]=(0,i.useState)(h),M=(0,i.useCallback)((()=>{w((e=>(0,c.M)(e)))}),[]),S=(0,i.useCallback)((()=>{w([...k])}),[]),C=(0,i.useCallback)((()=>{w([...k].reverse())}),[]),N=(u?[{title:"No",key:"No",dataIndex:"No"}]:[]).concat(g.map((e=>({title:e,dataIndex:e,key:e,render:t=>{if("string"==typeof t){const[a,n]=t?.split("#");return i.createElement(r.Z,{title:n?i.createElement("span",{style:{whiteSpace:"pre-wrap"}},n):void 0,color:"lime"},i.createElement("span",{style:{whiteSpace:"nowrap"}},y.includes(e)?i.createElement("span",{style:{whiteSpace:"nowrap"}},a):a,!!n&&i.createElement(d.Z,{style:{marginLeft:4}})))}return t}}))).map(((e,t)=>({...e,width:f&&!t?96:void 0,fixed:f&&!t?"left":void 0}))));return(0,i.useEffect)((()=>{b?C():S()}),[b]),(0,i.useEffect)((()=>{m&&M()}),[m]),(0,i.useEffect)((()=>{const e=[];v.forEach(((t,a)=>{const n={};t.forEach(((e,t)=>{n[g[t]]=e,u&&(n.No=a+1)})),e.push(n)})),Z(e)}),[v]),i.createElement(l.Z,null,(()=>i.createElement(i.Fragment,null,a&&i.createElement(o.ZP,{type:"primary",style:{marginBottom:10,marginRight:10},onClick:M},"Random"),p&&i.createElement(o.ZP,{style:{marginBottom:10},onClick:()=>B((e=>!e))},"sort by ",b?"asc":"desc"),i.createElement("span",{className:"ml10"},"\u603b\u8ba1\uff1a",v.length),i.createElement(s.Z,(0,n.Z)({},E,{dataSource:x,columns:N,pagination:{defaultPageSize:100}})))))}},79910:(e,t,a)=>{a.d(t,{M:()=>r,e:()=>n});const n=(e,t)=>{if(t<=1||e.length<=1)return e;{const a=Math.ceil(e.length/t),n=new Array(a);for(let r=0;r<n.length;r++)n[r]=new Array(t).fill("").map(((a,n)=>e[t*r+n]));return n}},r=function(e){void 0===e&&(e=[]);const t=[...e],a=[];for(;t.length;){const e=Math.floor(Math.random()*t.length);a.push(t[e]),t.splice(e,1)}return a}}}]);