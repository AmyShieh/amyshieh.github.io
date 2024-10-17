"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[4567],{84567:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(94184),r=n.n(o),a=n(50132),i=n(67294),l=n(53124),s=n(98866),c=n(52706);const d=i.createContext(null);var u=n(63185),p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const b=(e,t)=>{var n;const{prefixCls:o,className:b,rootClassName:f,children:m,indeterminate:h=!1,style:v,onMouseEnter:g,onMouseLeave:y,skipGroup:C=!1,disabled:$}=e,k=p(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:x,direction:O,checkbox:S}=i.useContext(l.E_),w=i.useContext(d),{isFormItemInput:E}=i.useContext(c.aM),P=i.useContext(s.Z),N=null!==(n=(null==w?void 0:w.disabled)||$)&&void 0!==n?n:P,j=i.useRef(k.value);i.useEffect((()=>{null==w||w.registerValue(k.value)}),[]),i.useEffect((()=>{if(!C)return k.value!==j.current&&(null==w||w.cancelValue(j.current),null==w||w.registerValue(k.value),j.current=k.value),()=>null==w?void 0:w.cancelValue(k.value)}),[k.value]);const I=x("checkbox",o),[Z,D]=(0,u.ZP)(I),M=Object.assign({},k);w&&!C&&(M.onChange=function(){k.onChange&&k.onChange.apply(k,arguments),w.toggleOption&&w.toggleOption({label:m,value:k.value})},M.name=w.name,M.checked=w.value.includes(k.value));const z=r()(`${I}-wrapper`,{[`${I}-rtl`]:"rtl"===O,[`${I}-wrapper-checked`]:M.checked,[`${I}-wrapper-disabled`]:N,[`${I}-wrapper-in-form-item`]:E},null==S?void 0:S.className,b,f,D),B=r()({[`${I}-indeterminate`]:h},D),R=h?"mixed":void 0;return Z(i.createElement("label",{className:z,style:Object.assign(Object.assign({},null==S?void 0:S.style),v),onMouseEnter:g,onMouseLeave:y},i.createElement(a.Z,Object.assign({"aria-checked":R},M,{prefixCls:I,className:B,disabled:N,ref:t})),void 0!==m&&i.createElement("span",null,m)))};const f=i.forwardRef(b);var m=n(74902),h=n(98423),v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const g=(e,t)=>{const{defaultValue:n,children:o,options:a=[],prefixCls:s,className:c,rootClassName:p,style:b,onChange:g}=e,y=v(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:C,direction:$}=i.useContext(l.E_),[k,x]=i.useState(y.value||n||[]),[O,S]=i.useState([]);i.useEffect((()=>{"value"in y&&x(y.value||[])}),[y.value]);const w=i.useMemo((()=>a.map((e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e))),[a]),E=C("checkbox",s),P=`${E}-group`,[N,j]=(0,u.ZP)(E),I=(0,h.Z)(y,["value","disabled"]),Z=a.length?w.map((e=>i.createElement(f,{prefixCls:E,key:e.value.toString(),disabled:"disabled"in e?e.disabled:y.disabled,value:e.value,checked:k.includes(e.value),onChange:e.onChange,className:`${P}-item`,style:e.style,title:e.title},e.label))):o,D={toggleOption:e=>{const t=k.indexOf(e.value),n=(0,m.Z)(k);-1===t?n.push(e.value):n.splice(t,1),"value"in y||x(n),null==g||g(n.filter((e=>O.includes(e))).sort(((e,t)=>w.findIndex((t=>t.value===e))-w.findIndex((e=>e.value===t)))))},value:k,disabled:y.disabled,name:y.name,registerValue:e=>{S((t=>[].concat((0,m.Z)(t),[e])))},cancelValue:e=>{S((t=>t.filter((t=>t!==e))))}},M=r()(P,{[`${P}-rtl`]:"rtl"===$},c,p,j);return N(i.createElement("div",Object.assign({className:M,style:b},I,{ref:t}),i.createElement(d.Provider,{value:D},Z)))},y=i.forwardRef(g),C=i.memo(y),$=f;$.Group=C,$.__ANT_CHECKBOX=!0;const k=$},63185:(e,t,n)=>{n.d(t,{C2:()=>c,ZP:()=>d});var o=n(31896),r=n(14747),a=n(45503),i=n(67968);const l=new o.E4("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),s=e=>{const{checkboxCls:t}=e,n=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,r.Wf)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[n]:Object.assign(Object.assign({},(0,r.Wf)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,r.Wf)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,r.oN)(e))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`${n}:hover ${t}:after`]:{visibility:"visible"},[`\n        ${n}:not(${n}-disabled),\n        ${t}:not(${t}-disabled)\n      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:`${e.lineWidthBold}px solid ${e.colorPrimary}`,animationName:l,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${e.motionDurationSlow}`}},[`\n        ${n}-checked:not(${n}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}:after`]:{borderColor:e.colorPrimaryHover}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function c(e,t){const n=(0,a.TS)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[s(n)]}const d=(0,i.Z)("Checkbox",((e,t)=>{let{prefixCls:n}=t;return[c(n,e)]}))},50132:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(87462),r=n(1413),a=n(4942),i=n(97685),l=n(45987),s=n(94184),c=n.n(s),d=n(21770),u=n(67294),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"];const b=(0,u.forwardRef)((function(e,t){var n,s=e.prefixCls,b=void 0===s?"rc-checkbox":s,f=e.className,m=e.style,h=e.checked,v=e.disabled,g=e.defaultChecked,y=void 0!==g&&g,C=e.type,$=void 0===C?"checkbox":C,k=e.title,x=e.onChange,O=(0,l.Z)(e,p),S=(0,u.useRef)(null),w=(0,d.Z)(y,{value:h}),E=(0,i.Z)(w,2),P=E[0],N=E[1];(0,u.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=S.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=S.current)||void 0===e||e.blur()},input:S.current}}));var j=c()(b,f,(n={},(0,a.Z)(n,"".concat(b,"-checked"),P),(0,a.Z)(n,"".concat(b,"-disabled"),v),n));return u.createElement("span",{className:j,title:k,style:m},u.createElement("input",(0,o.Z)({},O,{className:"".concat(b,"-input"),ref:S,onChange:function(t){v||("checked"in e||N(t.target.checked),null==x||x({target:(0,r.Z)((0,r.Z)({},e),{},{type:$,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:v,checked:!!P,type:$})),u.createElement("span",{className:"".concat(b,"-inner")}))}))}}]);