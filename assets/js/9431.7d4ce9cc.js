"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[9431],{25006:(e,t,n)=>{n.d(t,{L3:()=>s,i4:()=>c,xV:()=>u});var r=n(98287),a=n(37358),o=n(52180);const l=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},i=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:r,gridColumns:a}=e,o={};for(let l=a;l>=0;l--)0===l?(o[`${r}${t}-${l}`]={display:"none"},o[`${r}-push-${l}`]={insetInlineStart:"auto"},o[`${r}-pull-${l}`]={insetInlineEnd:"auto"},o[`${r}${t}-push-${l}`]={insetInlineStart:"auto"},o[`${r}${t}-pull-${l}`]={insetInlineEnd:"auto"},o[`${r}${t}-offset-${l}`]={marginInlineStart:0},o[`${r}${t}-order-${l}`]={order:0}):(o[`${r}${t}-${l}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${l/a*100}%`,maxWidth:l/a*100+"%"}],o[`${r}${t}-push-${l}`]={insetInlineStart:l/a*100+"%"},o[`${r}${t}-pull-${l}`]={insetInlineEnd:l/a*100+"%"},o[`${r}${t}-offset-${l}`]={marginInlineStart:l/a*100+"%"},o[`${r}${t}-order-${l}`]={order:l});return o[`${r}${t}-flex`]={flex:`var(--${n}${t}-flex)`},o})(e,t),s=(0,a.OF)("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),c=e=>({xs:e.screenXSMin,sm:e.screenSMMin,md:e.screenMDMin,lg:e.screenLGMin,xl:e.screenXLMin,xxl:e.screenXXLMin}),u=(0,a.OF)("Grid",(e=>{const t=(0,o.oX)(e,{gridColumns:24}),n=c(t);return delete n.xs,[l(t),i(t,""),i(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${(0,r.zA)(t)})`]:Object.assign({},i(e,n))}))(t,n[e],`-${e}`))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})))},26144:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),a=n(46942),o=n.n(a),l=n(24945),i=n(62279),s=n(78551);var c=n(36121),u=n(25006),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function f(e,t){const[n,a]=r.useState("string"==typeof e?e:"");return r.useEffect((()=>{(()=>{if("string"==typeof e&&a(e),"object"==typeof e)for(let n=0;n<l.ye.length;n++){const r=l.ye[n];if(!t||!t[r])continue;const o=e[r];if(void 0!==o)return void a(o)}})()}),[JSON.stringify(e),t]),n}const v=r.forwardRef(((e,t)=>{const{prefixCls:n,justify:a,align:v,className:g,style:p,children:m,gutter:h=0,wrap:b}=e,y=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:x,direction:C}=r.useContext(i.QO),$=(0,s.A)(!0,null),A=f(v,$),k=f(a,$),S=x("row",n),[E,O,w]=(0,u.L3)(S),M=function(e,t){const n=[void 0,void 0],r=Array.isArray(e)?e:[e,void 0],a=t||{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0};return r.forEach(((e,t)=>{if("object"==typeof e&&null!==e)for(let r=0;r<l.ye.length;r++){const o=l.ye[r];if(a[o]&&void 0!==e[o]){n[t]=e[o];break}}else n[t]=e})),n}(h,$),j=o()(S,{[`${S}-no-wrap`]:!1===b,[`${S}-${k}`]:k,[`${S}-${A}`]:A,[`${S}-rtl`]:"rtl"===C},g,O,w),B={},P=null!=M[0]&&M[0]>0?M[0]/-2:void 0;P&&(B.marginLeft=P,B.marginRight=P);const[D,I]=M;B.rowGap=I;const F=r.useMemo((()=>({gutter:[D,I],wrap:b})),[D,I,b]);return E(r.createElement(c.A.Provider,{value:F},r.createElement("div",Object.assign({},y,{className:j,style:Object.assign(Object.assign({},B),p),ref:t}),m)))}))},36121:(e,t,n)=>{n.d(t,{A:()=>r});const r=(0,n(96540).createContext)({})},58366:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(96540),a=n(46942),o=n.n(a),l=n(62279),i=n(36121),s=n(25006),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function u(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const d=["xs","sm","md","lg","xl","xxl"];const f=r.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:a}=r.useContext(l.QO),{gutter:f,wrap:v}=r.useContext(i.A),{prefixCls:g,span:p,order:m,offset:h,push:b,pull:y,className:x,children:C,flex:$,style:A}=e,k=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=n("col",g),[E,O,w]=(0,s.xV)(S),M={};let j={};d.forEach((t=>{let n={};const r=e[t];"number"==typeof r?n.span=r:"object"==typeof r&&(n=r||{}),delete k[t],j=Object.assign(Object.assign({},j),{[`${S}-${t}-${n.span}`]:void 0!==n.span,[`${S}-${t}-order-${n.order}`]:n.order||0===n.order,[`${S}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${S}-${t}-push-${n.push}`]:n.push||0===n.push,[`${S}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${S}-rtl`]:"rtl"===a}),n.flex&&(j[`${S}-${t}-flex`]=!0,M[`--${S}-${t}-flex`]=u(n.flex))}));const B=o()(S,{[`${S}-${p}`]:void 0!==p,[`${S}-order-${m}`]:m,[`${S}-offset-${h}`]:h,[`${S}-push-${b}`]:b,[`${S}-pull-${y}`]:y},x,j,O,w),P={};if(f&&f[0]>0){const e=f[0]/2;P.paddingLeft=e,P.paddingRight=e}return $&&(P.flex=u($),!1!==v||P.minWidth||(P.minWidth=0)),E(r.createElement("div",Object.assign({},k,{style:Object.assign(Object.assign(Object.assign({},P),A),M),className:B,ref:t}),C))}))},60411:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(96540),a=n(46942),o=n.n(a),l=n(86077),i=n(25371),s=n(98119),c=n(87534),u=n(8719),d=n(88826);const f=r.forwardRef(((e,t)=>{const{open:n,draggingDelete:a}=e,o=(0,r.useRef)(null),l=n&&!a,s=(0,r.useRef)(null);function c(){i.A.cancel(s.current),s.current=null}return r.useEffect((()=>(l?s.current=(0,i.A)((()=>{var e;null===(e=o.current)||void 0===e||e.forceAlign(),s.current=null})):c(),c)),[l,e.title]),r.createElement(d.A,Object.assign({ref:(0,u.K4)(o,t)},e,{open:l}))}));var v=n(98287),g=n(50572),p=n(25905),m=n(37358),h=n(52180);const b=e=>{const{componentCls:t,antCls:n,controlSize:r,dotSize:a,marginFull:o,marginPart:l,colorFillContentHover:i,handleColorDisabled:s,calc:c,handleSize:u,handleSizeHover:d,handleActiveColor:f,handleActiveOutlineColor:g,handleLineWidth:m,handleLineWidthHover:h,motionDurationMid:b}=e;return{[t]:Object.assign(Object.assign({},(0,p.dF)(e)),{position:"relative",height:r,margin:`${(0,v.zA)(l)} ${(0,v.zA)(o)}`,padding:0,cursor:"pointer",touchAction:"none","&-vertical":{margin:`${(0,v.zA)(o)} ${(0,v.zA)(l)}`},[`${t}-rail`]:{position:"absolute",backgroundColor:e.railBg,borderRadius:e.borderRadiusXS,transition:`background-color ${b}`},[`${t}-track,${t}-tracks`]:{position:"absolute",transition:`background-color ${b}`},[`${t}-track`]:{backgroundColor:e.trackBg,borderRadius:e.borderRadiusXS},[`${t}-track-draggable`]:{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"},"&:hover":{[`${t}-rail`]:{backgroundColor:e.railHoverBg},[`${t}-track`]:{backgroundColor:e.trackHoverBg},[`${t}-dot`]:{borderColor:i},[`${t}-handle::after`]:{boxShadow:`0 0 0 ${(0,v.zA)(m)} ${e.colorPrimaryBorderHover}`},[`${t}-dot-active`]:{borderColor:e.dotActiveBorderColor}},[`${t}-handle`]:{position:"absolute",width:u,height:u,outline:"none",userSelect:"none","&-dragging-delete":{opacity:0},"&::before":{content:'""',position:"absolute",insetInlineStart:c(m).mul(-1).equal(),insetBlockStart:c(m).mul(-1).equal(),width:c(u).add(c(m).mul(2)).equal(),height:c(u).add(c(m).mul(2)).equal(),backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:u,height:u,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${(0,v.zA)(m)} ${e.handleColor}`,outline:"0px solid transparent",borderRadius:"50%",cursor:"pointer",transition:`\n            inset-inline-start ${b},\n            inset-block-start ${b},\n            width ${b},\n            height ${b},\n            box-shadow ${b},\n            outline ${b}\n          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:c(d).sub(u).div(2).add(h).mul(-1).equal(),insetBlockStart:c(d).sub(u).div(2).add(h).mul(-1).equal(),width:c(d).add(c(h).mul(2)).equal(),height:c(d).add(c(h).mul(2)).equal()},"&::after":{boxShadow:`0 0 0 ${(0,v.zA)(h)} ${f}`,outline:`6px solid ${g}`,width:d,height:d,insetInlineStart:e.calc(u).sub(d).div(2).equal(),insetBlockStart:e.calc(u).sub(d).div(2).equal()}}},[`&-lock ${t}-handle`]:{"&::before, &::after":{transition:"none"}},[`${t}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${t}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${t}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${t}-dot`]:{position:"absolute",width:a,height:a,backgroundColor:e.colorBgElevated,border:`${(0,v.zA)(m)} solid ${e.dotBorderColor}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.dotActiveBorderColor}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-rail`]:{backgroundColor:`${e.railBg} !important`},[`${t}-track`]:{backgroundColor:`${e.trackBgDisabled} !important`},[`\n          ${t}-dot\n        `]:{backgroundColor:e.colorBgElevated,borderColor:e.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"},[`${t}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:u,height:u,boxShadow:`0 0 0 ${(0,v.zA)(m)} ${s}`,insetInlineStart:0,insetBlockStart:0},[`\n          ${t}-mark-text,\n          ${t}-dot\n        `]:{cursor:"not-allowed !important"}},[`&-tooltip ${n}-tooltip-inner`]:{minWidth:"unset"}})}},y=(e,t)=>{const{componentCls:n,railSize:r,handleSize:a,dotSize:o,marginFull:l,calc:i}=e,s=t?"paddingBlock":"paddingInline",c=t?"width":"height",u=t?"height":"width",d=t?"insetBlockStart":"insetInlineStart",f=t?"top":"insetInlineStart",g=i(r).mul(3).sub(a).div(2).equal(),p=i(a).sub(r).div(2).equal(),m=t?{borderWidth:`${(0,v.zA)(p)} 0`,transform:`translateY(${(0,v.zA)(i(p).mul(-1).equal())})`}:{borderWidth:`0 ${(0,v.zA)(p)}`,transform:`translateX(${(0,v.zA)(e.calc(p).mul(-1).equal())})`};return{[s]:r,[u]:i(r).mul(3).equal(),[`${n}-rail`]:{[c]:"100%",[u]:r},[`${n}-track,${n}-tracks`]:{[u]:r},[`${n}-track-draggable`]:Object.assign({},m),[`${n}-handle`]:{[d]:g},[`${n}-mark`]:{insetInlineStart:0,top:0,[f]:i(r).mul(3).add(t?0:l).equal(),[c]:"100%"},[`${n}-step`]:{insetInlineStart:0,top:0,[f]:r,[c]:"100%",[u]:r},[`${n}-dot`]:{position:"absolute",[d]:i(r).sub(o).div(2).equal()}}},x=e=>{const{componentCls:t,marginPartWithMark:n}=e;return{[`${t}-horizontal`]:Object.assign(Object.assign({},y(e,!0)),{[`&${t}-with-marks`]:{marginBottom:n}})}},C=e=>{const{componentCls:t}=e;return{[`${t}-vertical`]:Object.assign(Object.assign({},y(e,!1)),{height:"100%"})}},$=(0,m.OF)("Slider",(e=>{const t=(0,h.oX)(e,{marginPart:e.calc(e.controlHeight).sub(e.controlSize).div(2).equal(),marginFull:e.calc(e.controlSize).div(2).equal(),marginPartWithMark:e.calc(e.controlHeightLG).sub(e.controlSize).equal()});return[b(t),x(t),C(t)]}),(e=>{const t=e.controlHeightLG/4,n=e.controlHeightSM/2,r=e.lineWidth+1,a=e.lineWidth+1.5,o=e.colorPrimary,l=new g.Y(o).setA(.2).toRgbString();return{controlSize:t,railSize:4,handleSize:t,handleSizeHover:n,dotSize:8,handleLineWidth:r,handleLineWidthHover:a,railBg:e.colorFillTertiary,railHoverBg:e.colorFillSecondary,trackBg:e.colorPrimaryBorder,trackHoverBg:e.colorPrimaryBorderHover,handleColor:e.colorPrimaryBorder,handleActiveColor:o,handleActiveOutlineColor:l,handleColorDisabled:new g.Y(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexString(),dotBorderColor:e.colorBorderSecondary,dotActiveBorderColor:e.colorPrimaryBorder,trackBgDisabled:e.colorBgContainerDisabled}}));function A(){const[e,t]=r.useState(!1),n=r.useRef(null),a=()=>{i.A.cancel(n.current)};return r.useEffect((()=>a),[]),[e,e=>{a(),e?t(e):n.current=(0,i.A)((()=>{t(e)}))}]}var k=n(62279),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const E=r.forwardRef(((e,t)=>{const{prefixCls:n,range:a,className:u,rootClassName:d,style:v,disabled:g,tooltipPrefixCls:p,tipFormatter:m,tooltipVisible:h,getTooltipPopupContainer:b,tooltipPlacement:y,tooltip:x={},onChangeComplete:C,classNames:E,styles:O}=e,w=S(e,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement","tooltip","onChangeComplete","classNames","styles"]),{vertical:M}=e,{getPrefixCls:j,direction:B,className:P,style:D,classNames:I,styles:F,getPopupContainer:R}=(0,k.TP)("slider"),N=r.useContext(s.A),H=null!=g?g:N,{handleRender:L,direction:z}=r.useContext(c.A),q="rtl"===(z||B),[T,W]=A(),[X,V]=A(),G=Object.assign({},x),{open:Y,placement:_,getPopupContainer:U,prefixCls:K,formatter:Q}=G,J=null!=Y?Y:h,Z=(T||X)&&!1!==J,ee=function(e,t){return e||null===e?e:t||null===t?t:e=>"number"==typeof e?e.toString():""}(Q,m),[te,ne]=A(),re=(e,t)=>e||(t?q?"left":"right":"top"),ae=j("slider",n),[oe,le,ie]=$(ae),se=o()(u,P,I.root,null==E?void 0:E.root,d,{[`${ae}-rtl`]:q,[`${ae}-lock`]:te},le,ie);q&&!w.vertical&&(w.reverse=!w.reverse),r.useEffect((()=>{const e=()=>{(0,i.A)((()=>{V(!1)}),1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}}),[]);const ce=a&&!J,ue=L||((e,t)=>{const{index:n}=t,a=e.props;function o(e,t,n){var r,o,l,i;n&&(null===(o=(r=w)[e])||void 0===o||o.call(r,t)),null===(i=(l=a)[e])||void 0===i||i.call(l,t)}const l=Object.assign(Object.assign({},a),{onMouseEnter:e=>{W(!0),o("onMouseEnter",e)},onMouseLeave:e=>{W(!1),o("onMouseLeave",e)},onMouseDown:e=>{V(!0),ne(!0),o("onMouseDown",e)},onFocus:e=>{var t;V(!0),null===(t=w.onFocus)||void 0===t||t.call(w,e),o("onFocus",e,!0)},onBlur:e=>{var t;V(!1),null===(t=w.onBlur)||void 0===t||t.call(w,e),o("onBlur",e,!0)}}),i=r.cloneElement(e,l),s=(!!J||Z)&&null!==ee;return ce?i:r.createElement(f,Object.assign({},G,{prefixCls:j("tooltip",null!=K?K:p),title:ee?ee(t.value):"",open:s,placement:re(null!=_?_:y,M),key:n,classNames:{root:`${ae}-tooltip`},getPopupContainer:U||b||R}),i)}),de=ce?(e,t)=>{const n=r.cloneElement(e,{style:Object.assign(Object.assign({},e.props.style),{visibility:"hidden"})});return r.createElement(f,Object.assign({},G,{prefixCls:j("tooltip",null!=K?K:p),title:ee?ee(t.value):"",open:null!==ee&&Z,placement:re(null!=_?_:y,M),key:"tooltip",classNames:{root:`${ae}-tooltip`},getPopupContainer:U||b||R,draggingDelete:t.draggingDelete}),n)}:void 0,fe=Object.assign(Object.assign(Object.assign(Object.assign({},F.root),D),null==O?void 0:O.root),v),ve=Object.assign(Object.assign({},F.tracks),null==O?void 0:O.tracks),ge=o()(I.tracks,null==E?void 0:E.tracks);return oe(r.createElement(l.A,Object.assign({},w,{classNames:Object.assign({handle:o()(I.handle,null==E?void 0:E.handle),rail:o()(I.rail,null==E?void 0:E.rail),track:o()(I.track,null==E?void 0:E.track)},ge?{tracks:ge}:{}),styles:Object.assign({handle:Object.assign(Object.assign({},F.handle),null==O?void 0:O.handle),rail:Object.assign(Object.assign({},F.rail),null==O?void 0:O.rail),track:Object.assign(Object.assign({},F.track),null==O?void 0:O.track)},Object.keys(ve).length?{tracks:ve}:{}),step:w.step,range:a,className:se,style:fe,disabled:H,ref:t,prefixCls:ae,handleRender:ue,activeHandleRender:de,onChangeComplete:e=>{null==C||C(e),ne(!1)}})))}));const O=E},86077:(e,t,n)=>{n.d(t,{Q:()=>A,A:()=>N});var r=n(89379),a=n(64467),o=n(38339),l=n(82284),i=n(80641),s=n(46942),c=n.n(s),u=n(26956),d=n(12533),f=n(43210),v=n(68210),g=n(96540),p=n(58168),m=n(80045),h=n(40961);function b(e,t,n){return(e-t)/(n-t)}function y(e,t,n,r){var a=b(t,n,r),o={};switch(e){case"rtl":o.right="".concat(100*a,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*a,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*a,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*a,"%"),o.transform="translateX(-50%)"}return o}function x(e,t){return Array.isArray(e)?e[t]:e}var C=n(16928);const $=g.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});var A=g.createContext({}),k=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"];const S=g.forwardRef((function(e,t){var n,o=e.prefixCls,l=e.value,i=e.valueIndex,s=e.onStartMove,u=e.onDelete,d=e.style,f=e.render,v=e.dragging,h=e.draggingDelete,b=e.onOffsetChange,A=e.onChangeComplete,S=e.onFocus,E=e.onMouseEnter,O=(0,m.A)(e,k),w=g.useContext($),M=w.min,j=w.max,B=w.direction,P=w.disabled,D=w.keyboard,I=w.range,F=w.tabIndex,R=w.ariaLabelForHandle,N=w.ariaLabelledByForHandle,H=w.ariaRequired,L=w.ariaValueTextFormatterForHandle,z=w.styles,q=w.classNames,T="".concat(o,"-handle"),W=function(e){P||s(e,i)},X=y(B,l,M,j),V={};null!==i&&(V={tabIndex:P?null:x(F,i),role:"slider","aria-valuemin":M,"aria-valuemax":j,"aria-valuenow":l,"aria-disabled":P,"aria-label":x(R,i),"aria-labelledby":x(N,i),"aria-required":x(H,i),"aria-valuetext":null===(n=x(L,i))||void 0===n?void 0:n(l),"aria-orientation":"ltr"===B||"rtl"===B?"horizontal":"vertical",onMouseDown:W,onTouchStart:W,onFocus:function(e){null==S||S(e,i)},onMouseEnter:function(e){E(e,i)},onKeyDown:function(e){if(!P&&D){var t=null;switch(e.which||e.keyCode){case C.A.LEFT:t="ltr"===B||"btt"===B?-1:1;break;case C.A.RIGHT:t="ltr"===B||"btt"===B?1:-1;break;case C.A.UP:t="ttb"!==B?1:-1;break;case C.A.DOWN:t="ttb"!==B?-1:1;break;case C.A.HOME:t="min";break;case C.A.END:t="max";break;case C.A.PAGE_UP:t=2;break;case C.A.PAGE_DOWN:t=-2;break;case C.A.BACKSPACE:case C.A.DELETE:u(i)}null!==t&&(e.preventDefault(),b(t,i))}},onKeyUp:function(e){switch(e.which||e.keyCode){case C.A.LEFT:case C.A.RIGHT:case C.A.UP:case C.A.DOWN:case C.A.HOME:case C.A.END:case C.A.PAGE_UP:case C.A.PAGE_DOWN:null==A||A()}}});var G=g.createElement("div",(0,p.A)({ref:t,className:c()(T,(0,a.A)((0,a.A)((0,a.A)({},"".concat(T,"-").concat(i+1),null!==i&&I),"".concat(T,"-dragging"),v),"".concat(T,"-dragging-delete"),h),q.handle),style:(0,r.A)((0,r.A)((0,r.A)({},X),d),z.handle)},V,O));return f&&(G=f(G,{index:i,prefixCls:o,value:l,dragging:v,draggingDelete:h})),G}));var E=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"];const O=g.forwardRef((function(e,t){var n=e.prefixCls,a=e.style,o=e.onStartMove,l=e.onOffsetChange,s=e.values,c=e.handleRender,u=e.activeHandleRender,d=e.draggingIndex,f=e.draggingDelete,v=e.onFocus,b=(0,m.A)(e,E),y=g.useRef({}),C=g.useState(!1),$=(0,i.A)(C,2),A=$[0],k=$[1],O=g.useState(-1),w=(0,i.A)(O,2),M=w[0],j=w[1],B=function(e){j(e),k(!0)};g.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=y.current[e])||void 0===t||t.focus()},hideHelp:function(){(0,h.flushSync)((function(){k(!1)}))}}}));var P=(0,r.A)({prefixCls:n,onStartMove:o,onOffsetChange:l,render:c,onFocus:function(e,t){B(t),null==v||v(e)},onMouseEnter:function(e,t){B(t)}},b);return g.createElement(g.Fragment,null,s.map((function(e,t){var n=d===t;return g.createElement(S,(0,p.A)({ref:function(e){e?y.current[t]=e:delete y.current[t]},dragging:n,draggingDelete:n&&f,style:x(a,t),key:t,value:e,valueIndex:t},P))})),u&&A&&g.createElement(S,(0,p.A)({key:"a11y"},P,{value:s[M],valueIndex:null,dragging:-1!==d,draggingDelete:f,render:u,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}));const w=function(e){var t=e.prefixCls,n=e.style,o=e.children,l=e.value,i=e.onClick,s=g.useContext($),u=s.min,d=s.max,f=s.direction,v=s.includedStart,p=s.includedEnd,m=s.included,h="".concat(t,"-text"),b=y(f,l,u,d);return g.createElement("span",{className:c()(h,(0,a.A)({},"".concat(h,"-active"),m&&v<=l&&l<=p)),style:(0,r.A)((0,r.A)({},b),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){i(l)}},o)};const M=function(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?g.createElement("div",{className:a},n.map((function(e){var t=e.value,n=e.style,o=e.label;return g.createElement(w,{key:t,prefixCls:a,style:n,value:t,onClick:r},o)}))):null};const j=function(e){var t=e.prefixCls,n=e.value,o=e.style,l=e.activeStyle,i=g.useContext($),s=i.min,u=i.max,d=i.direction,f=i.included,v=i.includedStart,p=i.includedEnd,m="".concat(t,"-dot"),h=f&&v<=n&&n<=p,b=(0,r.A)((0,r.A)({},y(d,n,s,u)),"function"==typeof o?o(n):o);return h&&(b=(0,r.A)((0,r.A)({},b),"function"==typeof l?l(n):l)),g.createElement("span",{className:c()(m,(0,a.A)({},"".concat(m,"-active"),h)),style:b})};const B=function(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,o=e.activeStyle,l=g.useContext($),i=l.min,s=l.max,c=l.step,u=g.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==c)for(var t=i;t<=s;)e.add(t),t+=c;return Array.from(e)}),[i,s,c,r,n]);return g.createElement("div",{className:"".concat(t,"-step")},u.map((function(e){return g.createElement(j,{prefixCls:t,key:e,value:e,style:a,activeStyle:o})})))};const P=function(e){var t=e.prefixCls,n=e.style,o=e.start,l=e.end,i=e.index,s=e.onStartMove,u=e.replaceCls,d=g.useContext($),f=d.direction,v=d.min,p=d.max,m=d.disabled,h=d.range,y=d.classNames,x="".concat(t,"-track"),C=b(o,v,p),A=b(l,v,p),k=function(e){!m&&s&&s(e,-1)},S={};switch(f){case"rtl":S.right="".concat(100*C,"%"),S.width="".concat(100*A-100*C,"%");break;case"btt":S.bottom="".concat(100*C,"%"),S.height="".concat(100*A-100*C,"%");break;case"ttb":S.top="".concat(100*C,"%"),S.height="".concat(100*A-100*C,"%");break;default:S.left="".concat(100*C,"%"),S.width="".concat(100*A-100*C,"%")}var E=u||c()(x,(0,a.A)((0,a.A)({},"".concat(x,"-").concat(i+1),null!==i&&h),"".concat(t,"-track-draggable"),s),y.track);return g.createElement("div",{className:E,style:(0,r.A)((0,r.A)({},S),n),onMouseDown:k,onTouchStart:k})};const D=function(e){var t=e.prefixCls,n=e.style,a=e.values,o=e.startPoint,l=e.onStartMove,i=g.useContext($),s=i.included,u=i.range,d=i.min,f=i.styles,v=i.classNames,p=g.useMemo((function(){if(!u){if(0===a.length)return[];var e=null!=o?o:d,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n}),[a,u,o,d]);if(!s)return null;var m=null!=p&&p.length&&(v.tracks||f.tracks)?g.createElement(P,{index:null,prefixCls:t,start:p[0].start,end:p[p.length-1].end,replaceCls:c()(v.tracks,"".concat(t,"-tracks")),style:f.tracks}):null;return g.createElement(g.Fragment,null,m,p.map((function(e,a){var o=e.start,i=e.end;return g.createElement(P,{index:a,prefixCls:t,style:(0,r.A)((0,r.A)({},x(n,a)),f.track),start:o,end:i,key:a,onStartMove:l})})))};var I=n(30981);function F(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}const R=function(e,t,n,r,a,l,s,c,d,f,v){var p=g.useState(null),m=(0,i.A)(p,2),h=m[0],b=m[1],y=g.useState(-1),x=(0,i.A)(y,2),C=x[0],$=x[1],k=g.useState(!1),S=(0,i.A)(k,2),E=S[0],O=S[1],w=g.useState(n),M=(0,i.A)(w,2),j=M[0],B=M[1],P=g.useState(n),D=(0,i.A)(P,2),R=D[0],N=D[1],H=g.useRef(null),L=g.useRef(null),z=g.useRef(null),q=g.useContext(A),T=q.onDragStart,W=q.onDragChange;(0,I.A)((function(){-1===C&&B(n)}),[n,C]),g.useEffect((function(){return function(){document.removeEventListener("mousemove",H.current),document.removeEventListener("mouseup",L.current),z.current&&(z.current.removeEventListener("touchmove",H.current),z.current.removeEventListener("touchend",L.current))}}),[]);var X=function(e,t,n){void 0!==t&&b(t),B(e);var r=e;n&&(r=e.filter((function(e,t){return t!==C}))),s(r),W&&W({rawValues:e,deleteIndex:n?C:-1,draggingIndex:C,draggingValue:t})},V=(0,u.A)((function(e,t,n){if(-1===e){var i=R[0],s=R[R.length-1],c=r-i,u=a-s,f=t*(a-r);f=Math.max(f,c),f=Math.min(f,u);var v=l(i+f);f=v-i;var g=R.map((function(e){return e+f}));X(g)}else{var p=(a-r)*t,m=(0,o.A)(j);m[e]=R[e];var h=d(m,p,e,"dist");X(h.values,h.value,n)}})),G=g.useMemo((function(){var e=(0,o.A)(n).sort((function(e,t){return e-t})),t=(0,o.A)(j).sort((function(e,t){return e-t})),r={};t.forEach((function(e){r[e]=(r[e]||0)+1})),e.forEach((function(e){r[e]=(r[e]||0)-1}));var a=f?1:0;return Object.values(r).reduce((function(e,t){return e+Math.abs(t)}),0)<=a?j:n}),[n,j,f]);return[C,h,E,G,function(r,a,o){r.stopPropagation();var l=o||n,i=l[a];$(a),b(i),N(l),B(l),O(!1);var s=F(r),u=s.pageX,d=s.pageY,g=!1;T&&T({rawValues:l,draggingIndex:a,draggingValue:i});var p=function(n){n.preventDefault();var r,o,l=F(n),i=l.pageX,s=l.pageY,c=i-u,p=s-d,m=e.current.getBoundingClientRect(),h=m.width,b=m.height;switch(t){case"btt":r=-p/b,o=c;break;case"ttb":r=p/b,o=c;break;case"rtl":r=-c/h,o=p;break;default:r=c/h,o=p}g=!!f&&(Math.abs(o)>130&&v<j.length),O(g),V(a,r,g)},m=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",p),z.current&&(z.current.removeEventListener("touchmove",H.current),z.current.removeEventListener("touchend",L.current)),H.current=null,L.current=null,z.current=null,c(g),$(-1),O(!1)};document.addEventListener("mouseup",m),document.addEventListener("mousemove",p),r.currentTarget.addEventListener("touchend",m),r.currentTarget.addEventListener("touchmove",p),H.current=p,L.current=m,z.current=r.currentTarget}]};const N=g.forwardRef((function(e,t){var n=e.prefixCls,s=void 0===n?"rc-slider":n,p=e.className,m=e.style,h=e.classNames,b=e.styles,y=e.id,x=e.disabled,C=void 0!==x&&x,A=e.keyboard,k=void 0===A||A,S=e.autoFocus,E=e.onFocus,w=e.onBlur,j=e.min,P=void 0===j?0:j,I=e.max,F=void 0===I?100:I,N=e.step,H=void 0===N?1:N,L=e.value,z=e.defaultValue,q=e.range,T=e.count,W=e.onChange,X=e.onBeforeChange,V=e.onAfterChange,G=e.onChangeComplete,Y=e.allowCross,_=void 0===Y||Y,U=e.pushable,K=void 0!==U&&U,Q=e.reverse,J=e.vertical,Z=e.included,ee=void 0===Z||Z,te=e.startPoint,ne=e.trackStyle,re=e.handleStyle,ae=e.railStyle,oe=e.dotStyle,le=e.activeDotStyle,ie=e.marks,se=e.dots,ce=e.handleRender,ue=e.activeHandleRender,de=e.track,fe=e.tabIndex,ve=void 0===fe?0:fe,ge=e.ariaLabelForHandle,pe=e.ariaLabelledByForHandle,me=e.ariaRequired,he=e.ariaValueTextFormatterForHandle,be=g.useRef(null),ye=g.useRef(null),xe=g.useMemo((function(){return J?Q?"ttb":"btt":Q?"rtl":"ltr"}),[Q,J]),Ce=function(e){return(0,g.useMemo)((function(){if(!0===e||!e)return[!!e,!1,!1,0];var t=e.editable,n=e.draggableTrack;return[!0,t,!t&&n,e.minCount||0,e.maxCount]}),[e])}(q),$e=(0,i.A)(Ce,5),Ae=$e[0],ke=$e[1],Se=$e[2],Ee=$e[3],Oe=$e[4],we=g.useMemo((function(){return isFinite(P)?P:0}),[P]),Me=g.useMemo((function(){return isFinite(F)?F:100}),[F]),je=g.useMemo((function(){return null!==H&&H<=0?1:H}),[H]),Be=g.useMemo((function(){return"boolean"==typeof K?!!K&&je:K>=0&&K}),[K,je]),Pe=g.useMemo((function(){return Object.keys(ie||{}).map((function(e){var t=ie[e],n={value:Number(e)};return t&&"object"===(0,l.A)(t)&&!g.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ie]),De=function(e,t,n,r,a,l){var i=g.useCallback((function(n){return Math.max(e,Math.min(t,n))}),[e,t]),s=g.useCallback((function(r){if(null!==n){var a=e+Math.round((i(r)-e)/n)*n,o=function(e){return(String(e).split(".")[1]||"").length},l=Math.max(o(n),o(t),o(e)),s=Number(a.toFixed(l));return e<=s&&s<=t?s:null}return null}),[n,e,t,i]),c=g.useCallback((function(a){var o=i(a),l=r.map((function(e){return e.value}));null!==n&&l.push(s(a)),l.push(e,t);var c=l[0],u=t-e;return l.forEach((function(e){var t=Math.abs(o-e);t<=u&&(c=e,u=t)})),c}),[e,t,r,n,i,s]),u=function a(l,i,c){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof i){var d,f=l[c],v=f+i,g=[];r.forEach((function(e){g.push(e.value)})),g.push(e,t),g.push(s(f));var p=i>0?1:-1;"unit"===u?g.push(s(f+p*n)):g.push(s(v)),g=g.filter((function(e){return null!==e})).filter((function(e){return i<0?e<=f:e>=f})),"unit"===u&&(g=g.filter((function(e){return e!==f})));var m="unit"===u?f:v;d=g[0];var h=Math.abs(d-m);if(g.forEach((function(e){var t=Math.abs(e-m);t<h&&(d=e,h=t)})),void 0===d)return i<0?e:t;if("dist"===u)return d;if(Math.abs(i)>1){var b=(0,o.A)(l);return b[c]=d,a(b,i-p,c,u)}return d}return"min"===i?e:"max"===i?t:void 0},d=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],o=u(e,t,n,r);return{value:o,changed:o!==a}},f=function(e){return null===l&&0===e||"number"==typeof l&&e<l};return[c,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=e.map(c),i=o[n],s=u(o,t,n,r);if(o[n]=s,!1===a){var v=l||0;n>0&&o[n-1]!==i&&(o[n]=Math.max(o[n],o[n-1]+v)),n<o.length-1&&o[n+1]!==i&&(o[n]=Math.min(o[n],o[n+1]-v))}else if("number"==typeof l||null===l){for(var g=n+1;g<o.length;g+=1)for(var p=!0;f(o[g]-o[g-1])&&p;){var m=d(o,1,g);o[g]=m.value,p=m.changed}for(var h=n;h>0;h-=1)for(var b=!0;f(o[h]-o[h-1])&&b;){var y=d(o,-1,h-1);o[h-1]=y.value,b=y.changed}for(var x=o.length-1;x>0;x-=1)for(var C=!0;f(o[x]-o[x-1])&&C;){var $=d(o,-1,x-1);o[x-1]=$.value,C=$.changed}for(var A=0;A<o.length-1;A+=1)for(var k=!0;f(o[A+1]-o[A])&&k;){var S=d(o,1,A+1);o[A+1]=S.value,k=S.changed}}return{value:o[n],values:o}}]}(we,Me,je,Pe,_,Be),Ie=(0,i.A)(De,2),Fe=Ie[0],Re=Ie[1],Ne=(0,d.A)(z,{value:L}),He=(0,i.A)(Ne,2),Le=He[0],ze=He[1],qe=g.useMemo((function(){var e=null==Le?[]:Array.isArray(Le)?Le:[Le],t=(0,i.A)(e,1)[0],n=null===Le?[]:[void 0===t?we:t];if(Ae){if(n=(0,o.A)(e),T||void 0===Le){var r=T>=0?T+1:2;for(n=n.slice(0,r);n.length<r;){var a;n.push(null!==(a=n[n.length-1])&&void 0!==a?a:we)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=Fe(e)})),n}),[Le,Ae,we,T,Fe]),Te=function(e){return Ae?e:e[0]},We=(0,u.A)((function(e){var t=(0,o.A)(e).sort((function(e,t){return e-t}));W&&!(0,f.A)(t,qe,!0)&&W(Te(t)),ze(t)})),Xe=(0,u.A)((function(e){e&&be.current.hideHelp();var t=Te(qe);null==V||V(t),(0,v.Ay)(!V,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==G||G(t)})),Ve=R(ye,xe,qe,we,Me,Fe,We,Xe,Re,ke,Ee),Ge=(0,i.A)(Ve,5),Ye=Ge[0],_e=Ge[1],Ue=Ge[2],Ke=Ge[3],Qe=Ge[4],Je=function(e,t){if(!C){var n=(0,o.A)(qe),r=0,a=0,l=Me-we;qe.forEach((function(t,n){var o=Math.abs(e-t);o<=l&&(l=o,r=n),t<e&&(a=n)}));var i=r;ke&&0!==l&&(!Oe||qe.length<Oe)?(n.splice(a+1,0,e),i=a+1):n[r]=e,Ae&&!qe.length&&void 0===T&&n.push(e);var s,c,u=Te(n);if(null==X||X(u),We(n),t)null===(s=document.activeElement)||void 0===s||null===(c=s.blur)||void 0===c||c.call(s),be.current.focus(i),Qe(t,i,n);else null==V||V(u),(0,v.Ay)(!V,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==G||G(u)}},Ze=g.useState(null),et=(0,i.A)(Ze,2),tt=et[0],nt=et[1];g.useEffect((function(){if(null!==tt){var e=qe.indexOf(tt);e>=0&&be.current.focus(e)}nt(null)}),[tt]);var rt=g.useMemo((function(){return(!Se||null!==je)&&Se}),[Se,je]),at=(0,u.A)((function(e,t){Qe(e,t),null==X||X(Te(qe))})),ot=-1!==Ye;g.useEffect((function(){if(!ot){var e=qe.lastIndexOf(_e);be.current.focus(e)}}),[ot]);var lt=g.useMemo((function(){return(0,o.A)(Ke).sort((function(e,t){return e-t}))}),[Ke]),it=g.useMemo((function(){return Ae?[lt[0],lt[lt.length-1]]:[we,lt[0]]}),[lt,Ae,we]),st=(0,i.A)(it,2),ct=st[0],ut=st[1];g.useImperativeHandle(t,(function(){return{focus:function(){be.current.focus(0)},blur:function(){var e,t=document.activeElement;null!==(e=ye.current)&&void 0!==e&&e.contains(t)&&(null==t||t.blur())}}})),g.useEffect((function(){S&&be.current.focus(0)}),[]);var dt=g.useMemo((function(){return{min:we,max:Me,direction:xe,disabled:C,keyboard:k,step:je,included:ee,includedStart:ct,includedEnd:ut,range:Ae,tabIndex:ve,ariaLabelForHandle:ge,ariaLabelledByForHandle:pe,ariaRequired:me,ariaValueTextFormatterForHandle:he,styles:b||{},classNames:h||{}}}),[we,Me,xe,C,k,je,ee,ct,ut,Ae,ve,ge,pe,me,he,b,h]);return g.createElement($.Provider,{value:dt},g.createElement("div",{ref:ye,className:c()(s,p,(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(s,"-disabled"),C),"".concat(s,"-vertical"),J),"".concat(s,"-horizontal"),!J),"".concat(s,"-with-marks"),Pe.length)),style:m,onMouseDown:function(e){e.preventDefault();var t,n=ye.current.getBoundingClientRect(),r=n.width,a=n.height,o=n.left,l=n.top,i=n.bottom,s=n.right,c=e.clientX,u=e.clientY;switch(xe){case"btt":t=(i-u)/a;break;case"ttb":t=(u-l)/a;break;case"rtl":t=(s-c)/r;break;default:t=(c-o)/r}Je(Fe(we+t*(Me-we)),e)},id:y},g.createElement("div",{className:c()("".concat(s,"-rail"),null==h?void 0:h.rail),style:(0,r.A)((0,r.A)({},ae),null==b?void 0:b.rail)}),!1!==de&&g.createElement(D,{prefixCls:s,style:ne,values:qe,startPoint:te,onStartMove:rt?at:void 0}),g.createElement(B,{prefixCls:s,marks:Pe,dots:se,style:oe,activeStyle:le}),g.createElement(O,{ref:be,prefixCls:s,style:re,values:Ke,draggingIndex:Ye,draggingDelete:Ue,onStartMove:at,onOffsetChange:function(e,t){if(!C){var n=Re(qe,e,t);null==X||X(Te(qe)),We(n.values),nt(n.value)}},onFocus:E,onBlur:w,handleRender:ce,activeHandleRender:ue,onChangeComplete:Xe,onDelete:ke?function(e){if(!(C||!ke||qe.length<=Ee)){var t=(0,o.A)(qe);t.splice(e,1),null==X||X(Te(t)),We(t);var n=Math.max(0,e-1);be.current.hideHelp(),be.current.focus(n)}}:void 0}),g.createElement(M,{prefixCls:s,marks:Pe,onClick:Je})))}))},87534:(e,t,n)=>{n.d(t,{A:()=>r});const r=(0,n(96540).createContext)({})}}]);