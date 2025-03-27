"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[2618],{35792:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(25976);const r=e=>{const[,,,,t]=(0,n.ZP)();return t?`${e}-css-var`:""}},71191:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(27884);const r=(0,n.Z)((0,n.Z)({},{yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",dateFormat:"M/D/YYYY",dateTimeFormat:"M/D/YYYY HH:mm:ss",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"});var o=a(42115);const l={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},r),timePickerLocale:Object.assign({},o.Z)}},24457:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(62906),r=a(71191);const o=r.Z;var l=a(42115);const i="${label} is not a valid ${type}",c={locale:"en",Pagination:n.Z,DatePicker:r.Z,TimePicker:l.Z,Calendar:o,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty",transparent:"Transparent",singleColor:"Single",gradientColor:"Gradient"}}},10110:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(76745),o=a(24457);const l=(e,t)=>{const a=n.useContext(r.Z);return[n.useMemo((()=>{var n;const r=t||o.Z[e],l=null!==(n=null==a?void 0:a[e])&&void 0!==n?n:{};return Object.assign(Object.assign({},"function"==typeof r?r():r),l||{})}),[e,t,a]),n.useMemo((()=>{const e=null==a?void 0:a.locale;return(null==a?void 0:a.exist)&&!e?o.Z.locale:e}),[a])]}},33507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})},42115:(e,t,a)=>{a.d(t,{Z:()=>n});const n={placeholder:"Select time",rangePlaceholder:["Start time","End time"]}},79269:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(83963),r=a(67294);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var l=a(41969),i=function(e,t){return r.createElement(l.Z,(0,n.Z)({},e,{ref:t,icon:o}))};const c=r.forwardRef(i)},65071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>D,contentTitle:()=>I,default:()=>L,frontMatter:()=>w,metadata:()=>U,toc:()=>k});var n=a(87462),r=a(67294),o=a(3905);const l={container:"container_hDJm",calenderContainer:"calenderContainer_tc8M",dayWrapper:"dayWrapper_PGsJ",title:"title_Z1zB",targetWeek:"targetWeek_Cwhr",before:"before_UGS2",middle:"middle_opbx",late:"late_lXr9",remark:"remark_OJfR",birth:"birth_ISKF",month:"month_XH4F",item:"item_SHJG",past:"past_i9vc",htmlContainer:"htmlContainer__Yrw"};var i=a(93967),c=a.n(i),s=a(27484),d=a.n(s),m=a(7685),u=a(83062),E=a(47221),p=a(28734),h=a.n(p),g=a(10285),y=a.n(g),S=a(96036),M=a.n(S),f=a(6833),v=a.n(f),C=a(55183),N=a.n(C),_=a(172),b=a.n(_);d().extend(y()),d().extend(h()),d().extend(v()),d().extend(M()),d().extend(N()),d().extend(b());const P=41,T=7,O=P*T;function x(e){const{date:t,data:a,hideDatePicker:n,hideBaoBaoTree:o}=e,i=d()(),[s,p]=(0,r.useState)(d()(t??new Date)),h=(0,r.useMemo)((()=>d()(s)),[s]),g=h.day(1),y=s.add((P-1)*T,"day"),S=y.format("YYYY-MM-DD"),M=i.diff(h,"day"),f=y.subtract(7,"day").startOf("week").add(1,"day"),v=f.diff(d()(new Date),"day"),C=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);return console.log(C()),r.createElement("div",{className:l.container},!n&&r.createElement(m.Z,{allowClear:!1,defaultValue:s,onChange:(e,t)=>{p(d()(t))}}),r.createElement("div",null,"\u8ba1\u7b97\u65f6\u95f4\uff1a ",s.format("YYYY-MM-DD")),r.createElement("div",null,"\u5168\u5468\u671f\uff1a \u7ea6",O-T,"\u5929"),r.createElement("div",null,"\ud83c\udf89\u5c31\u7b49\u8fd9\u4e00\u5929\u5566\ud83c\udf89\uff1a\u3010",S,"\u3011\uff0c \u8fd8\u5269\u4e0b\uff1a ",O-M-T,"\u5929, ",Math.round((O-M-T)/30*100)/100,"\u6708"),r.createElement("div",null,"\u2728\u4f11\u5047\u65e5\u2728\uff1a",f.format("YYYY-MM-DD"),"\u3010\u9884\u4ea7\u671f\u524d\u4e00\u5468\u6700\u8fd1\u7684**\u5468\u4e00**\u3011\u3002\u8ddd\u79bb\u4f11\u5047\u8fd8\u6709\uff1a ",v,"\u5929, ",Math.round(v/30*100)/100,"\u6708"),r.createElement("div",null,"\u5df2\u5ea6\u8fc7\uff1a ",M,"\u5929\uff0c",Math.round(M/30*100)/100,"\u6708"),r.createElement("div",{className:l.calenderContainer,style:{marginBottom:o?0:20}},new Array(T).fill("").map(((e,t)=>{const n=(g.day()+t)%T;return r.createElement("div",{key:t,className:c()("flex-space-between")},new Array(P).fill("").map(((e,o)=>{const s=o*T+t,m=g.add(s,"day"),E=a.find((e=>d()(e[e.length-1]).isSame(d()(m)))),p=m.diff(h,"day"),y=Math.floor(p/T),S=p%T,M=i.startOf("day").diff(m.startOf("day"),"day")>=0;return r.createElement("div",{key:o,className:l.dayWrapper},0===o?r.createElement("div",{className:l.title},`\u3010\u661f\u671f${0===n?7:n}\u3011`):r.createElement("div",null,1===n&&r.createElement("div",{className:l.month},m.format("MM")),r.createElement(u.Z,{overlayStyle:{maxWidth:"50vw"},title:r.createElement("div",null,r.createElement("div",null,m.format("YYYY-MM-DD")),r.createElement("div",null,` \u7b2c${y}\u5468\u7684\u7b2c${S}\u5929`),r.createElement("div",null,`\u5df2\u6000\u5b55${p}\u5929`),E?.length&&r.createElement("div",{className:l.htmlContainer,dangerouslySetInnerHTML:{__html:E[1]}}))},r.createElement("span",{className:c()(l.item,"border",{[l.past]:M,[l.targetWeek]:!S,[l.before]:y<=13,[l.middle]:y>13&&y<=27,[l.late]:y>27,[l.remark]:E?.length,[l.birth]:40===y&&!S})},y))))})))}))),!o&&r.createElement(E.Z,{defaultActiveKey:["1"],items:[{key:"1",label:"\u4e09\u65b9\u8bb0\u5f55",children:r.createElement("div",null,r.createElement("iframe",{src:`https://h5.babytree.com/h5_fe_preg/html/babychange/list?day_num=${M}&birthday=${S}&baby_status=2`,frameBorder:"0",style:{width:"100%",height:C()?1e3:2300}}))},{key:"2",label:"\u4eba\u4f53\u9aa8\u9abc\u56fe",children:r.createElement("div",null,r.createElement("iframe",{src:"https://www.11dom.com/view-lYnpM67V9da4KOL6JM8Q25w1zLqEG3kj",frameBorder:"0",style:{width:"100%",height:800}}))}]}))}var A=a(91262);const w={},I="day log",U={unversionedId:"day-log/index",id:"day-log/index",title:"day log",description:"{() => }",source:"@site/docs-others/day-log/index.mdx",sourceDirName:"day-log",slug:"/day-log/",permalink:"/docs-others/day-log/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calculator",permalink:"/docs-others/calculator/"},next:{title:"ImgFilter",permalink:"/docs-others/imgFilter/"}},D={},k=[],$={toc:k},R="wrapper";function L(e){let{components:t,...a}=e;return(0,o.kt)(R,(0,n.Z)({},$,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"day-log"},"day log"),(0,o.kt)(A.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(x,{date:"2024-11-17",data:[],mdxType:"Pregnant"}))))}L.isMDXComponent=!0},62906:(e,t,a)=>{a.d(t,{Z:()=>n});const n={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},15105:(e,t,a)=>{a.d(t,{Z:()=>r});var n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=n.F1&&t<=n.F12)return!1;switch(t){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=n.ZERO&&e<=n.NINE)return!0;if(e>=n.NUM_ZERO&&e<=n.NUM_MULTIPLY)return!0;if(e>=n.A&&e<=n.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const r=n},64217:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(1413),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",l="data-";function i(e,t){return 0===e.indexOf(t)}function c(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===a?{aria:!0,data:!0,attr:!0}:!0===a?{aria:!0}:(0,n.Z)({},a);var c={};return Object.keys(e).forEach((function(a){(t.aria&&("role"===a||i(a,o))||t.data&&i(a,l)||t.attr&&r.includes(a))&&(c[a]=e[a])})),c}}}]);