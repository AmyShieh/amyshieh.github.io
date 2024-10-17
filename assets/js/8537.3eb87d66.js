"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[8537],{89739:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(87462),r=t(67294);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var a=t(42135),s=function(e,n){return r.createElement(a.Z,(0,o.Z)({},e,{ref:n,icon:c}))};const i=r.forwardRef(s)},97937:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(87462),r=t(67294);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};var a=t(42135),s=function(e,n){return r.createElement(a.Z,(0,o.Z)({},e,{ref:n,icon:c}))};const i=r.forwardRef(s)},28537:(e,n,t)=>{t.d(n,{ZP:()=>ae});var o=t(74902),r=t(38135),c=t(67294),a=t(55990),s=t(89739),i=t(4340),l=t(87462);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var f=t(42135),m=function(e,n){return c.createElement(f.Z,(0,l.Z)({},e,{ref:n,icon:u}))};const p=c.forwardRef(m);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var E=function(e,n){return c.createElement(f.Z,(0,l.Z)({},e,{ref:n,icon:d}))};const g=c.forwardRef(E);var v=t(50888),y=t(94184),C=t.n(y),N=t(97685),O=t(45987),h=t(1413),S=t(73935),x=t(82225),b=t(4942),I=t(15105),M=c.forwardRef((function(e,n){var t=e.prefixCls,o=e.style,r=e.className,a=e.duration,s=void 0===a?4.5:a,i=e.eventKey,u=e.content,f=e.closable,m=e.closeIcon,p=void 0===m?"x":m,d=e.props,E=e.onClick,g=e.onNoticeClose,v=e.times,y=c.useState(!1),O=(0,N.Z)(y,2),h=O[0],S=O[1],x=function(){g(i)};c.useEffect((function(){if(!h&&s>0){var e=setTimeout((function(){x()}),1e3*s);return function(){clearTimeout(e)}}}),[s,h,v]);var M="".concat(t,"-notice");return c.createElement("div",(0,l.Z)({},d,{ref:n,className:C()(M,r,(0,b.Z)({},"".concat(M,"-closable"),f)),style:o,onMouseEnter:function(){S(!0)},onMouseLeave:function(){S(!1)},onClick:E}),c.createElement("div",{className:"".concat(M,"-content")},u),f&&c.createElement("a",{tabIndex:0,className:"".concat(M,"-close"),onKeyDown:function(e){"Enter"!==e.key&&"Enter"!==e.code&&e.keyCode!==I.Z.ENTER||x()},onClick:function(e){e.preventDefault(),e.stopPropagation(),x()}},p))}));const R=M;var _=c.forwardRef((function(e,n){var t=e.prefixCls,r=void 0===t?"rc-notification":t,a=e.container,s=e.motion,i=e.maxCount,u=e.className,f=e.style,m=e.onAllRemoved,p=c.useState([]),d=(0,N.Z)(p,2),E=d[0],g=d[1],v=function(e){var n,t=E.find((function(n){return n.key===e}));null==t||null===(n=t.onClose)||void 0===n||n.call(t),g((function(n){return n.filter((function(n){return n.key!==e}))}))};c.useImperativeHandle(n,(function(){return{open:function(e){g((function(n){var t,r=(0,o.Z)(n),c=r.findIndex((function(n){return n.key===e.key})),a=(0,h.Z)({},e);c>=0?(a.times=((null===(t=n[c])||void 0===t?void 0:t.times)||0)+1,r[c]=a):(a.times=0,r.push(a));return i>0&&r.length>i&&(r=r.slice(-i)),r}))},close:function(e){v(e)},destroy:function(){g([])}}}));var y=c.useState({}),O=(0,N.Z)(y,2),b=O[0],I=O[1];c.useEffect((function(){var e={};E.forEach((function(n){var t=n.placement,o=void 0===t?"topRight":t;o&&(e[o]=e[o]||[],e[o].push(n))})),Object.keys(b).forEach((function(n){e[n]=e[n]||[]})),I(e)}),[E]);var M=c.useRef(!1);if(c.useEffect((function(){Object.keys(b).length>0?M.current=!0:M.current&&(null==m||m(),M.current=!1)}),[b]),!a)return null;var _=Object.keys(b);return(0,S.createPortal)(c.createElement(c.Fragment,null,_.map((function(e){var n=b[e].map((function(e){return{config:e,key:e.key}})),t="function"==typeof s?s(e):s;return c.createElement(x.V4,(0,l.Z)({key:e,className:C()(r,"".concat(r,"-").concat(e),null==u?void 0:u(e)),style:null==f?void 0:f(e),keys:n,motionAppear:!0},t,{onAllRemoved:function(){!function(e){I((function(n){var t=(0,h.Z)({},n);return(t[e]||[]).length||delete t[e],t}))}(e)}}),(function(e,n){var t=e.config,o=e.className,a=e.style,s=t.key,i=t.times,u=t.className,f=t.style;return c.createElement(R,(0,l.Z)({},t,{ref:n,prefixCls:r,className:C()(o,u),style:(0,h.Z)((0,h.Z)({},a),f),times:i,key:s,eventKey:s,onNoticeClose:v}))}))}))),a)}));const A=_;var P=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],T=function(){return document.body},U=0;function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.getContainer,t=void 0===n?T:n,r=e.motion,a=e.prefixCls,s=e.maxCount,i=e.className,l=e.style,u=e.onAllRemoved,f=(0,O.Z)(e,P),m=c.useState(),p=(0,N.Z)(m,2),d=p[0],E=p[1],g=c.useRef(),v=c.createElement(A,{container:d,ref:g,prefixCls:a,motion:r,maxCount:s,className:i,style:l,onAllRemoved:u}),y=c.useState([]),C=(0,N.Z)(y,2),h=C[0],S=C[1],x=c.useMemo((function(){return{open:function(e){var n=function(){for(var e={},n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return t.forEach((function(n){n&&Object.keys(n).forEach((function(t){var o=n[t];void 0!==o&&(e[t]=o)}))})),e}(f,e);null!==n.key&&void 0!==n.key||(n.key="rc-notification-".concat(U),U+=1),S((function(e){return[].concat((0,o.Z)(e),[{type:"open",config:n}])}))},close:function(e){S((function(n){return[].concat((0,o.Z)(n),[{type:"close",key:e}])}))},destroy:function(){S((function(e){return[].concat((0,o.Z)(e),[{type:"destroy"}])}))}}}),[]);return c.useEffect((function(){E(t())})),c.useEffect((function(){g.current&&h.length&&(h.forEach((function(e){switch(e.type){case"open":g.current.open(e.config);break;case"close":g.current.close(e.key);break;case"destroy":g.current.destroy()}})),S((function(e){return e.filter((function(e){return!h.includes(e)}))})))}),[h]),[x,v]}var Z=t(53124),w=t(31896),$=t(14747),L=t(67968),F=t(45503);const j=e=>{const{componentCls:n,iconCls:t,boxShadow:o,colorText:r,colorSuccess:c,colorError:a,colorWarning:s,colorInfo:i,fontSizeLG:l,motionEaseInOutCirc:u,motionDurationSlow:f,marginXS:m,paddingXS:p,borderRadiusLG:d,zIndexPopup:E,contentPadding:g,contentBg:v}=e,y=`${n}-notice`,C=new w.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:p,transform:"translateY(0)",opacity:1}}),N=new w.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:p,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),O={padding:p,textAlign:"center",[`${n}-custom-content > ${t}`]:{verticalAlign:"text-bottom",marginInlineEnd:m,fontSize:l},[`${y}-content`]:{display:"inline-block",padding:g,background:v,borderRadius:d,boxShadow:o,pointerEvents:"all"},[`${n}-success > ${t}`]:{color:c},[`${n}-error > ${t}`]:{color:a},[`${n}-warning > ${t}`]:{color:s},[`${n}-info > ${t},\n      ${n}-loading > ${t}`]:{color:i}};return[{[n]:Object.assign(Object.assign({},(0,$.Wf)(e)),{color:r,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:E,[`${n}-move-up`]:{animationFillMode:"forwards"},[`\n        ${n}-move-up-appear,\n        ${n}-move-up-enter\n      `]:{animationName:C,animationDuration:f,animationPlayState:"paused",animationTimingFunction:u},[`\n        ${n}-move-up-appear${n}-move-up-appear-active,\n        ${n}-move-up-enter${n}-move-up-enter-active\n      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:N,animationDuration:f,animationPlayState:"paused",animationTimingFunction:u},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[y]:Object.assign({},O)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},O),{padding:0,textAlign:"start"})}]},H=(0,L.Z)("Message",(e=>{const n=(0,F.TS)(e,{height:150});return[j(n)]}),(e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`})));var K=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const D={info:c.createElement(g,null),success:c.createElement(s.Z,null),error:c.createElement(i.Z,null),warning:c.createElement(p,null),loading:c.createElement(v.Z,null)},B=e=>{let{prefixCls:n,type:t,icon:o,children:r}=e;return c.createElement("div",{className:C()(`${n}-custom-content`,`${n}-${t}`)},o||D[t],c.createElement("span",null,r))},z=e=>{const{prefixCls:n,className:t,type:o,icon:r,content:a}=e,s=K(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:i}=c.useContext(Z.E_),l=n||i("message"),[,u]=H(l);return c.createElement(R,Object.assign({},s,{prefixCls:l,className:C()(t,u,`${l}-notice-pure-panel`),eventKey:"pure",duration:null,content:c.createElement(B,{prefixCls:l,type:o,icon:r},a)}))};var G=t(97937);function W(e){let n;const t=new Promise((t=>{n=e((()=>{t(!0)}))})),o=()=>{null==n||n()};return o.then=(e,n)=>t.then(e,n),o.promise=t,o}var Q=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const V=3,Y=c.forwardRef(((e,n)=>{const{top:t,prefixCls:o,getContainer:r,maxCount:a,duration:s=V,rtl:i,transitionName:l,onAllRemoved:u}=e,{getPrefixCls:f,getPopupContainer:m,message:p}=c.useContext(Z.E_),d=o||f("message"),[,E]=H(d),g=c.createElement("span",{className:`${d}-close-x`},c.createElement(G.Z,{className:`${d}-close-icon`})),[v,y]=k({prefixCls:d,style:()=>({left:"50%",transform:"translateX(-50%)",top:null!=t?t:8}),className:()=>C()(E,{[`${d}-rtl`]:i}),motion:()=>function(e,n){return{motionName:null!=n?n:`${e}-move-up`}}(d,l),closable:!1,closeIcon:g,duration:s,getContainer:()=>(null==r?void 0:r())||(null==m?void 0:m())||document.body,maxCount:a,onAllRemoved:u});return c.useImperativeHandle(n,(()=>Object.assign(Object.assign({},v),{prefixCls:d,hashId:E,message:p}))),y}));let X=0;function J(e){const n=c.useRef(null),t=c.useMemo((()=>{const e=e=>{var t;null===(t=n.current)||void 0===t||t.close(e)},t=t=>{if(!n.current){const e=()=>{};return e.then=()=>{},e}const{open:o,prefixCls:r,hashId:a,message:s}=n.current,i=`${r}-notice`,{content:l,icon:u,type:f,key:m,className:p,style:d,onClose:E}=t,g=Q(t,["content","icon","type","key","className","style","onClose"]);let v=m;return null==v&&(X+=1,v=`antd-message-${X}`),W((n=>(o(Object.assign(Object.assign({},g),{key:v,content:c.createElement(B,{prefixCls:r,type:f,icon:u},l),placement:"top",className:C()(f&&`${i}-${f}`,a,p,null==s?void 0:s.className),style:Object.assign(Object.assign({},null==s?void 0:s.style),d),onClose:()=>{null==E||E(),n()}})),()=>{e(v)})))},o={open:t,destroy:t=>{var o;void 0!==t?e(t):null===(o=n.current)||void 0===o||o.destroy()}};return["info","success","warning","error","loading"].forEach((e=>{o[e]=(n,o,r)=>{let c,a,s;c=n&&"object"==typeof n&&"content"in n?n:{content:n},"function"==typeof o?s=o:(a=o,s=r);const i=Object.assign(Object.assign({onClose:s,duration:a},c),{type:e});return t(i)}})),o}),[]);return[t,c.createElement(Y,Object.assign({key:"message-holder"},e,{ref:n}))]}let q=null,ee=e=>e(),ne=[],te={};const oe=c.forwardRef(((e,n)=>{const t=()=>{const{prefixCls:e,container:n,maxCount:t,duration:o,rtl:r,top:c}=function(){const{prefixCls:e,getContainer:n,duration:t,rtl:o,maxCount:r,top:c}=te;return{prefixCls:null!=e?e:(0,a.w6)().getPrefixCls("message"),container:(null==n?void 0:n())||document.body,duration:t,rtl:o,maxCount:r,top:c}}();return{prefixCls:e,getContainer:()=>n,maxCount:t,duration:o,rtl:r,top:c}},[o,r]=c.useState(t),[s,i]=J(o),l=(0,a.w6)(),u=l.getRootPrefixCls(),f=l.getIconPrefixCls(),m=l.getTheme(),p=()=>{r(t)};return c.useEffect(p,[]),c.useImperativeHandle(n,(()=>{const e=Object.assign({},s);return Object.keys(e).forEach((n=>{e[n]=function(){return p(),s[n].apply(s,arguments)}})),{instance:e,sync:p}})),c.createElement(a.ZP,{prefixCls:u,iconPrefixCls:f,theme:m},i)}));function re(){if(!q){const e=document.createDocumentFragment(),n={fragment:e};return q=n,void ee((()=>{(0,r.s)(c.createElement(oe,{ref:e=>{const{instance:t,sync:o}=e||{};Promise.resolve().then((()=>{!n.instance&&t&&(n.instance=t,n.sync=o,re())}))}}),e)}))}q.instance&&(ne.forEach((e=>{const{type:n,skipped:t}=e;if(!t)switch(n){case"open":ee((()=>{const n=q.instance.open(Object.assign(Object.assign({},te),e.config));null==n||n.then(e.resolve),e.setCloseFn(n)}));break;case"destroy":ee((()=>{null==q||q.instance.destroy(e.key)}));break;default:ee((()=>{var t;const r=(t=q.instance)[n].apply(t,(0,o.Z)(e.args));null==r||r.then(e.resolve),e.setCloseFn(r)}))}})),ne=[])}const ce={open:function(e){const n=W((n=>{let t;const o={type:"open",config:e,resolve:n,setCloseFn:e=>{t=e}};return ne.push(o),()=>{t?ee((()=>{t()})):o.skipped=!0}}));return re(),n},destroy:function(e){ne.push({type:"destroy",key:e}),re()},config:function(e){te=Object.assign(Object.assign({},te),e),ee((()=>{var e;null===(e=null==q?void 0:q.sync)||void 0===e||e.call(q)}))},useMessage:function(e){return J(e)},_InternalPanelDoNotUseOrYouWillBeFired:z};["success","info","warning","error","loading"].forEach((e=>{ce[e]=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return function(e,n){const t=W((t=>{let o;const r={type:e,args:n,resolve:t,setCloseFn:e=>{o=e}};return ne.push(r),()=>{o?ee((()=>{o()})):r.skipped=!0}}));return re(),t}(e,t)}}));const ae=ce},15105:(e,n,t)=>{t.d(n,{Z:()=>r});var o={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=o.F1&&n<=o.F12)return!1;switch(n){case o.ALT:case o.CAPS_LOCK:case o.CONTEXT_MENU:case o.CTRL:case o.DOWN:case o.END:case o.ESC:case o.HOME:case o.INSERT:case o.LEFT:case o.MAC_FF_META:case o.META:case o.NUMLOCK:case o.NUM_CENTER:case o.PAGE_DOWN:case o.PAGE_UP:case o.PAUSE:case o.PRINT_SCREEN:case o.RIGHT:case o.SHIFT:case o.UP:case o.WIN_KEY:case o.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=o.ZERO&&e<=o.NINE)return!0;if(e>=o.NUM_ZERO&&e<=o.NUM_MULTIPLY)return!0;if(e>=o.A&&e<=o.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case o.SPACE:case o.QUESTION_MARK:case o.NUM_PLUS:case o.NUM_MINUS:case o.NUM_PERIOD:case o.NUM_DIVISION:case o.SEMICOLON:case o.DASH:case o.EQUALS:case o.COMMA:case o.PERIOD:case o.SLASH:case o.APOSTROPHE:case o.SINGLE_QUOTE:case o.OPEN_SQUARE_BRACKET:case o.BACKSLASH:case o.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const r=o}}]);