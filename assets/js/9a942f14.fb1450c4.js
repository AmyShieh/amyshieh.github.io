"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[6181],{63324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>I,frontMatter:()=>v,metadata:()=>A,toc:()=>f});var l=n(58168),a=n(96540),r=n(15680),i=n(33942),m=n(26144),o=n(58366),u=n(60411),s=n(19052),c=n(55709),p=n(8757),d=n(80678),g=n(88781);const E=[{label:"blur",value:"blur"},{label:"pure",value:"pure"}],b=()=>{const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(""),[r,b]=(0,a.useState)([]),[v,h]=(0,a.useState)(4),[A,y]=(0,a.useState)(40),[f,w]=(0,a.useState)(30),[x,I]=(0,a.useState)(20),[C,S]=(0,a.useState)(20),[k,F]=(0,a.useState)(10),[L,M]=(0,a.useState)(E[0].value),[P,T]=(0,a.useState)([]),$=(0,a.useRef)();(0,a.useEffect)((()=>{r.length&&(async()=>{const e=await Promise.all(r.map((async e=>await(0,d.I)(e.originFileObj))));T(e)})()}),[r]);const D=a.createElement("button",{style:{border:0,background:"none"},type:"button"},a.createElement(p.A,null),a.createElement("div",{style:{marginTop:8}},"Upload")),R=(0,a.useCallback)((()=>{$.current&&(0,g.$E)($.current).then((e=>{const t=new Image;t.src=e,document.body.appendChild(t);const n=document.createElement("a");n.href=e,n.download="screenshot.png",n.click()}))}),[]);return a.createElement("div",null,a.createElement(i.A,{listType:"picture-card",fileList:r,onPreview:async e=>{e.url||e.preview||(e.preview=await(0,d.I)(e.originFileObj)),l(e.url||e.preview),t(!0)},onChange:e=>{let{fileList:t}=e;return b(t)}},r.length>=2?null:D),a.createElement("div",null,"\u4e24\u5f20"),a.createElement(m.A,null,a.createElement(o.A,{span:1},"\u5706\u89d2"),a.createElement(o.A,{span:20},a.createElement(u.A,{min:0,max:40,onChange:h,value:"number"==typeof v?v:0}))),a.createElement(m.A,null,a.createElement(o.A,{span:1},"\u8fb9\u8ddd"),a.createElement(o.A,{span:20},a.createElement(u.A,{min:0,max:1e3,onChange:y,value:"number"==typeof A?A:0}))),a.createElement(m.A,null,a.createElement(o.A,{span:2},"\u9634\u5f71\u6a21\u7cca"),a.createElement(o.A,{span:19},a.createElement(u.A,{min:0,max:40,onChange:w,value:"number"==typeof f?f:0}))),a.createElement(m.A,null,a.createElement(o.A,{span:1},"\u9634\u5f71X"),a.createElement(o.A,{span:20},a.createElement(u.A,{min:0,max:100,onChange:I,value:"number"==typeof x?x:0}))),a.createElement(m.A,null,a.createElement(o.A,{span:1},"\u9634\u5f71Y"),a.createElement(o.A,{span:20},a.createElement(u.A,{min:0,max:100,onChange:S,value:"number"==typeof C?C:0}))),a.createElement(s.Ay.Group,{options:E,onChange:e=>{M(e.target.value)},value:L}),a.createElement(m.A,null,a.createElement(o.A,{span:2},"\u6a21\u7cca\u534a\u5f84"),a.createElement(o.A,{span:19},a.createElement(u.A,{min:0,max:100,onChange:F,value:"number"==typeof k?k:0}))),a.createElement("div",null,a.createElement("div",{style:{maxWidth:"100%",padding:A,width:"fit-content",position:"relative",overflow:"hidden"},ref:$},a.createElement("div",{style:{position:"absolute",zIndex:0,backgroundPosition:"center",filter:`blur(${k}px) brightness(120%) saturate(80%)`,width:"100%",height:"100%",top:0,left:0}}),P.map((e=>a.createElement("img",{src:e,alt:"",style:{borderRadius:v,position:"relative",zIndex:1,boxShadow:`${x}px ${C}px ${f}px rgba(0, 0, 0, 0.4)`}})))),a.createElement("div",null,a.createElement(c.Ay,{onClick:R},"\u4fdd\u5b58"))),a.createElement("div",null,"\u4e09\u5f20"),a.createElement("div",null,"\u56db\u5f20"))},v={},h="multipleImg",A={unversionedId:"imgFilter/multipleImg",id:"imgFilter/multipleImg",title:"multipleImg",description:";",source:"@site/docs-others/imgFilter/multipleImg.mdx",sourceDirName:"imgFilter",slug:"/imgFilter/multipleImg",permalink:"/docs-others/imgFilter/multipleImg",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImgFilter",permalink:"/docs-others/imgFilter/"},next:{title:"Local Use",permalink:"/docs-others/localPage/"}},y={},f=[],w={toc:f},x="wrapper";function I(e){let{components:t,...n}=e;return(0,r.yg)(x,(0,l.A)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"multipleimg"},"multipleImg"),(0,r.yg)(b,{mdxType:"MultipleImg"}),";")}I.isMDXComponent=!0},80678:(e,t,n)=>{n.d(t,{I:()=>l});const l=e=>new Promise(((t,n)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>t(l.result),l.onerror=e=>n(e)}))}}]);