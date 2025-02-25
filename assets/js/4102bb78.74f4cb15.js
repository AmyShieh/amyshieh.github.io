/*! For license information please see 4102bb78.74f4cb15.js.LICENSE.txt */
(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[4018],{84567:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(67294),a=n(93967),o=n.n(a),i=n(50132),l=n(75076),c=n(17415),s=n(53124),u=n(98866),d=n(35792),p=n(91007);const f=r.createContext(null);var m=n(63185),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const b=(e,t)=>{var n;const{prefixCls:a,className:b,rootClassName:v,children:h,indeterminate:y=!1,style:k,onMouseEnter:x,onMouseLeave:C,skipGroup:$=!1,disabled:O}=e,w=g(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:Z,direction:S,checkbox:j}=r.useContext(s.E_),E=r.useContext(f),{isFormItemInput:P}=r.useContext(p.aM),N=r.useContext(u.Z),I=null!==(n=(null==E?void 0:E.disabled)||O)&&void 0!==n?n:N,R=r.useRef(w.value);r.useEffect((()=>{null==E||E.registerValue(w.value)}),[]),r.useEffect((()=>{if(!$)return w.value!==R.current&&(null==E||E.cancelValue(R.current),null==E||E.registerValue(w.value),R.current=w.value),()=>null==E?void 0:E.cancelValue(w.value)}),[w.value]);const T=Z("checkbox",a),D=(0,d.Z)(T),[M,B,_]=(0,m.ZP)(T,D),z=Object.assign({},w);E&&!$&&(z.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),E.toggleOption&&E.toggleOption({label:h,value:w.value})},z.name=E.name,z.checked=E.value.includes(w.value));const V=o()(`${T}-wrapper`,{[`${T}-rtl`]:"rtl"===S,[`${T}-wrapper-checked`]:z.checked,[`${T}-wrapper-disabled`]:I,[`${T}-wrapper-in-form-item`]:P},null==j?void 0:j.className,b,v,_,D,B),W=o()({[`${T}-indeterminate`]:y},c.A,B),X=y?"mixed":void 0;return M(r.createElement(l.Z,{component:"Checkbox",disabled:I},r.createElement("label",{className:V,style:Object.assign(Object.assign({},null==j?void 0:j.style),k),onMouseEnter:x,onMouseLeave:C},r.createElement(i.Z,Object.assign({"aria-checked":X},z,{prefixCls:T,className:W,disabled:I,ref:t})),void 0!==h&&r.createElement("span",null,h))))};const v=r.forwardRef(b);var h=n(96641),y=n(10366),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const x=r.forwardRef(((e,t)=>{const{defaultValue:n,children:a,options:i=[],prefixCls:l,className:c,rootClassName:u,style:p,onChange:g}=e,b=k(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:x,direction:C}=r.useContext(s.E_),[$,O]=r.useState(b.value||n||[]),[w,Z]=r.useState([]);r.useEffect((()=>{"value"in b&&O(b.value||[])}),[b.value]);const S=r.useMemo((()=>i.map((e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e))),[i]),j=x("checkbox",l),E=`${j}-group`,P=(0,d.Z)(j),[N,I,R]=(0,m.ZP)(j,P),T=(0,y.Z)(b,["value","disabled"]),D=i.length?S.map((e=>r.createElement(v,{prefixCls:j,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:$.includes(e.value),onChange:e.onChange,className:`${E}-item`,style:e.style,title:e.title,id:e.id,required:e.required},e.label))):a,M={toggleOption:e=>{const t=$.indexOf(e.value),n=(0,h.Z)($);-1===t?n.push(e.value):n.splice(t,1),"value"in b||O(n),null==g||g(n.filter((e=>w.includes(e))).sort(((e,t)=>S.findIndex((t=>t.value===e))-S.findIndex((e=>e.value===t)))))},value:$,disabled:b.disabled,name:b.name,registerValue:e=>{Z((t=>[].concat((0,h.Z)(t),[e])))},cancelValue:e=>{Z((t=>t.filter((t=>t!==e))))}},B=o()(E,{[`${E}-rtl`]:"rtl"===C},c,u,R,P,I);return N(r.createElement("div",Object.assign({className:B,style:p},T,{ref:t}),r.createElement(f.Provider,{value:M},D)))})),C=x,$=v;$.Group=C,$.__ANT_CHECKBOX=!0;const O=$},63185:(e,t,n)=>{"use strict";n.d(t,{C2:()=>c,ZP:()=>s});var r=n(57477),a=n(14747),o=n(61129),i=n(83559);const l=e=>{const{checkboxCls:t}=e,n=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,a.Wf)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[n]:Object.assign(Object.assign({},(0,a.Wf)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,a.Wf)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,a.oN)(e))},[`${t}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${(0,r.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${(0,r.bf)(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`\n        ${n}:not(${n}-disabled),\n        ${t}:not(${t}-disabled)\n      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`\n        ${n}-checked:not(${n}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${t}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorPrimary} !important`}}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function c(e,t){const n=(0,o.IX)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[l(n)]}const s=(0,i.I$)("Checkbox",((e,t)=>{let{prefixCls:n}=t;return[c(n,e)]}))},35792:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(25976);const a=e=>{const[,,,,t]=(0,r.ZP)();return t?`${e}-css-var`:""}},99594:(e,t,n)=>{"use strict";n.r(t),n.d(t,{TravelTool:()=>p,assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(84567);const i=[{tag:"\u57fa\u7840",children:[{name:"\u8eab\u4efd\u8bc1",tag:""},{name:"\u624b\u673a\u5145\u7535\u7ebf",tag:""},{name:"\u5145\u7535\u5b9d \u5145\u7535\u5b9d\u7ebf",tag:""},{name:"\u96e8\u4f1e",tag:""},{name:"\u5e3d\u5b50",tag:""},{name:"\u6c34\u676f",tag:""},{name:"\u6f31\u53e3\u676f\uff08\u6298\u53e0\u6c34\u676f\uff09",tag:""},{name:"\u7259\u5237, \u7259\u818f, \u68b3\u5b50",tag:""},{name:"\u6c34,\u4e73,\u9632\u6652,\u7cbe\u534e,\u773c\u971c,\u6563\u7c89,\u7709\u7b14,\u53e3\u7ea2",tag:""},{name:"\u7c89\u5e95\u3001\u773c\u5f71\u3001\u9634\u5f71\u3001\u7b14\uff0c\u776b\u6bdb\u818f",tag:""},{name:"\u816e\u7ea2,\u5237\u5b50,\u5507\u818f,\u5378\u5986\u6cb9",tag:""},{name:"\u9690\u5f62\u773c\u955c|\u7f8e\u77b3\uff0c\u58a8\u955c",tag:""},{name:"\u6e7f\u5dfe",tag:""},{name:"\u4fe1\u7528\u5361 \u62db\u884c||\u519c\u884c, \u94f6\u884c\u5361-\u62db\u5546",tag:""},{name:"\u73b0\u91d1",tag:""},{name:"\u8033\u673a",tag:""},{name:"\u82b1\u9732\u6c34",tag:""},{name:"\u9999\u6c34",tag:""},{name:"\u8033\u9489\uff0c\u8033\u73af",tag:""},{name:"\u6696\u8d34\u8d34-\u89c6\u60c5\u51b5\u800c\u5b9a",tag:""},{name:"\u4e1d\u5dfe-\u5317\u65b9\uff0c\u98ce\u5927\u6297\u51b7",tag:""}]},{tag:"\u77ed\u671f",children:[{name:"\u672c\u5b50 \u7b14*3 \u4e66*3 & Kindle",tag:""},{name:"reader digest",tag:""},{name:"\u9999\u76822\u5757",tag:""},{name:"\u6d17\u9762\u5976",tag:""},{name:"\u6d17\u53d1\u6c34",tag:""},{name:"\u6c90\u6d74\u9732",tag:""},{name:"\u8863\u670d5\u5957",tag:""},{name:"\u5185\u8863*3",tag:""},{name:"\u5185\u88e4*4",tag:""},{name:"\u978b\u5b50*2 \u62d6\u978b*1",tag:""},{name:"\u7761\u8863",tag:""},{name:"\u889c\u5b50*3",tag:""},{name:"\u6253\u5e95\u88e4",tag:""},{name:"\u536b\u751f\u5dfe",tag:""},{name:"U\u76d8",tag:""},{name:"\u5361\u9488",tag:""},{name:"\u8336\u53f6",tag:""},{name:"\u591a\u4e00\u652f\u7b14",tag:""},{name:"\u63d2\u5ea7",tag:""}]},{tag:"\u957f\u671f",children:[{name:"\u8981\u770b\u7684\u4e66",tag:""},{name:"\u6d17\u8863\u7c89",tag:""},{name:"\u9152\u5e97\u9694\u810f\u5957",tag:""}]},{tag:"\u65c5\u884c",children:[{name:"\u6298\u53e0\u6c34\u58f6",tag:""},{name:"\u81ea\u62cd\u6746",tag:""},{name:"\u822a\u62cd\u5668",tag:""},{name:"\u7a33\u5b9a\u5668",tag:""},{name:"\u76f8\u673a",tag:""},{name:"pocket",tag:""},{name:"go3s",tag:""},{name:"\u5e73\u677f",tag:""},{name:"\u5c0f\u4e00\u70b9\u7684\u4e66",tag:""},{name:"\u5199\u751f\u5de5\u5177(\u7b14,\u672c\u5b50,\u989c\u6599,\u94c5\u7b14\u6a61\u76ae)",tag:""},{name:"\u5e73\u677f",tag:""},{name:"\u5c0f\u4e00\u70b9\u7684\u4e66",tag:""},{name:"\u7535\u8111 && \u7535\u6e90",tag:""},{name:"U\u76d8",tag:""},{name:"\u8bfb\u5361\u5668",tag:""},{name:"\u8f6c\u63a5\u5934",tag:""}]}],l={},c="\u51fa\u53bb\u73a9\u8981\u5e26\u7684\u4e1c\u897f",s={unversionedId:"travel/basic",id:"travel/basic",title:"\u51fa\u53bb\u73a9\u8981\u5e26\u7684\u4e1c\u897f",description:"",source:"@site/docs-hobby/travel/0000-basic.mdx",sourceDirName:"travel",slug:"/travel/basic",permalink:"/docs-hobby/travel/basic",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728\u8def\u4e0a~",permalink:"/docs-hobby/category/\u5728\u8def\u4e0a"},next:{title:"\u53ef\u4ee5\u53bb\u54ea\u73a9~",permalink:"/docs-hobby/travel/destination"}},u={},d=[],p=()=>(0,a.kt)("div",{className:"flex-space-between flex-align-start flex-wrap",style:{alignItems:"flex-start"}},i.map((e=>(0,a.kt)("div",{key:e.tag},(0,a.kt)("h3",null,e.tag),(0,a.kt)("div",null,e.children.map((e=>(0,a.kt)("div",{key:e.name,className:"flex"},(0,a.kt)(o.Z,{mdxType:"Checkbox"},(0,a.kt)("div",{className:"ml10 font14"},e.name)))))))))),f={toc:d,TravelTool:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u51fa\u53bb\u73a9\u8981\u5e26\u7684\u4e1c\u897f"},"\u51fa\u53bb\u73a9\u8981\u5e26\u7684\u4e1c\u897f"),(0,a.kt)(p,{mdxType:"TravelTool"}))}g.isMDXComponent=!0},50132:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(87462),a=n(1413),o=n(4942),i=n(97685),l=n(45987),c=n(67795),s=n.n(c),u=n(21770),d=n(67294),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"];const f=(0,d.forwardRef)((function(e,t){var n=e.prefixCls,c=void 0===n?"rc-checkbox":n,f=e.className,m=e.style,g=e.checked,b=e.disabled,v=e.defaultChecked,h=void 0!==v&&v,y=e.type,k=void 0===y?"checkbox":y,x=e.title,C=e.onChange,$=(0,l.Z)(e,p),O=(0,d.useRef)(null),w=(0,d.useRef)(null),Z=(0,u.Z)(h,{value:g}),S=(0,i.Z)(Z,2),j=S[0],E=S[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(e){var t;null===(t=O.current)||void 0===t||t.focus(e)},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current,nativeElement:w.current}}));var P=s()(c,f,(0,o.Z)((0,o.Z)({},"".concat(c,"-checked"),j),"".concat(c,"-disabled"),b));return d.createElement("span",{className:P,title:x,style:m,ref:w},d.createElement("input",(0,r.Z)({},$,{className:"".concat(c,"-input"),ref:O,onChange:function(t){b||("checked"in e||E(t.target.checked),null==C||C({target:(0,a.Z)((0,a.Z)({},e),{},{type:k,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!j,type:k})),d.createElement("span",{className:"".concat(c,"-inner")}))}))},67795:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},66680:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294);function a(e){var t=r.useRef();t.current=e;var n=r.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return n}},21770:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(97685),a=n(66680),o=n(8410),i=n(30470);function l(e){return void 0!==e}function c(e,t){var n=t||{},c=n.defaultValue,s=n.value,u=n.onChange,d=n.postState,p=(0,i.Z)((function(){return l(s)?s:l(c)?"function"==typeof c?c():c:"function"==typeof e?e():e})),f=(0,r.Z)(p,2),m=f[0],g=f[1],b=void 0!==s?s:m,v=d?d(b):b,h=(0,a.Z)(u),y=(0,i.Z)([b]),k=(0,r.Z)(y,2),x=k[0],C=k[1];return(0,o.o)((function(){var e=x[0];m!==e&&h(m,e)}),[x]),(0,o.o)((function(){l(s)||g(s)}),[s]),[v,(0,a.Z)((function(e,t){g(e,t),C([b],t)}))]}},30470:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(97685),a=n(67294);function o(e){var t=a.useRef(!1),n=a.useState(e),o=(0,r.Z)(n,2),i=o[0],l=o[1];return a.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[i,function(e,n){n&&t.current||l(e)}]}},97326:(e,t,n)=>{"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},73568:(e,t,n)=>{"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:()=>i});var a=n(71002),o=n(97326);function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var l=r(this).constructor;n=Reflect.construct(i,arguments,l)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===(0,a.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}(this,n)}}},60136:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(89611);function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},45987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(63366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);