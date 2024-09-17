"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[4583],{"./src/components/MessageCard/messageCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Replied:()=>Replied,RepliedInactive:()=>RepliedInactive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MessageCard/index.js"),assets_images_face_male_1_jpg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/images/face-male-1.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI 组件/MessageCard",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{avatarSrc:assets_images_face_male_1_jpg__WEBPACK_IMPORTED_MODULE_2__,name:"李铭浩",avatarStatus:"online",statusText:"在线",time:"3 小时之前",message:"即使爬到最高的山上，一次也只能脚踏实地地",unreadCount:2}),Active=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{avatarSrc:assets_images_face_male_1_jpg__WEBPACK_IMPORTED_MODULE_2__,name:"李铭浩",avatarStatus:"online",statusText:"在线",time:"3 小时之前",message:"即使爬到最高的山上，一次也只能脚踏实地地",unreadCount:2,active:!0}),Replied=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{avatarSrc:assets_images_face_male_1_jpg__WEBPACK_IMPORTED_MODULE_2__,name:"李铭浩",avatarStatus:"online",statusText:"在线",time:"3 小时之前",message:"即使爬到最高的山上，一次也只能脚踏实地地",unreadCount:2,active:!0,replied:!0}),RepliedInactive=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{avatarSrc:assets_images_face_male_1_jpg__WEBPACK_IMPORTED_MODULE_2__,name:"李铭浩",avatarStatus:"online",statusText:"在线",time:"3 小时之前",message:"即使爬到最高的山上，一次也只能脚踏实地地",unreadCount:2,replied:!0}),__namedExportsOrder=["Default","Active","Replied","RepliedInactive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <MessageCard avatarSrc={face1} name="李铭浩" avatarStatus="online" statusText="在线" time="3 小时之前" message="即使爬到最高的山上，一次也只能脚踏实地地" unreadCount={2} />',...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'() => <MessageCard avatarSrc={face1} name="李铭浩" avatarStatus="online" statusText="在线" time="3 小时之前" message="即使爬到最高的山上，一次也只能脚踏实地地" unreadCount={2} active />',...Active.parameters?.docs?.source}}},Replied.parameters={...Replied.parameters,docs:{...Replied.parameters?.docs,source:{originalSource:'() => <MessageCard avatarSrc={face1} name="李铭浩" avatarStatus="online" statusText="在线" time="3 小时之前" message="即使爬到最高的山上，一次也只能脚踏实地地" unreadCount={2} active replied />',...Replied.parameters?.docs?.source}}},RepliedInactive.parameters={...RepliedInactive.parameters,docs:{...RepliedInactive.parameters?.docs,source:{originalSource:'() => <MessageCard avatarSrc={face1} name="李铭浩" avatarStatus="online" statusText="在线" time="3 小时之前" message="即使爬到最高的山上，一次也只能脚踏实地地" unreadCount={2} replied />',...RepliedInactive.parameters?.docs?.source}}}},"./src/components/Avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/style.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar(_ref){let{src,size="48px",status,statusIconSize="8px",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_style_js__WEBPACK_IMPORTED_MODULE_0__.Ay,{...rest,children:[status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.kW,{status,size:statusIconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.ks,{size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.BK,{src,alt:""})})]})}Avatar.propsType={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,status:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["online","offline"]),statusIconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"48px"',computed:!1},required:!1},statusIconSize:{defaultValue:{value:'"8px"',computed:!1},required:!1}}}},"./src/components/Avatar/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,BK:()=>AvatarImage,kW:()=>StatusIcon,ks:()=>AvatarClip});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_mixins__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mixins.js");const circleMixinFunc=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    content: "";
    display: block;
    position: absolute;
    ${(0,_utils_mixins__WEBPACK_IMPORTED_MODULE_1__.n1)(color,size)}
`},StyledAvatar=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div`
    position: relative;
`,StatusIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div`
    position: absolute;
    left: 2px;
    top: 4px;
    &::before{
        ${_ref=>{let{size}=_ref;return circleMixinFunc("white",size)}}
        transform: scale(2);
    }
    
    &::after{
        ${_ref2=>{let{theme,status,size}=_ref2;return"online"===status?circleMixinFunc(theme.green,size):"offline"===status?circleMixinFunc(theme.gray,size):void 0}}
`,AvatarClip=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div`
    width: ${_ref3=>{let{size}=_ref3;return size}};
    height: ${_ref4=>{let{size}=_ref4;return size}};
    -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
    overflow: hidden;
`,AvatarImage=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    object-position: center;
`,__WEBPACK_DEFAULT_EXPORT__=StyledAvatar},"./src/components/Badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Badge});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/utils/mixins.js");__webpack_require__("./src/theme.js");const variants={dot:styled_components_browser_esm.AH`
        position: relative;
        padding: 5px;
        &::after {
        display:${_ref=>{let{show}=_ref;return show?"block":"none"}};
        content: "";
        ${_ref2=>{let{theme}=_ref2;return(0,mixins.n1)(theme.red,"6px")}}
        position: absolute;
        right: 0;
        top:0;
    `,default:styled_components_browser_esm.AH`
        ${_ref3=>{let{theme}=_ref3;return(0,mixins.n1)(theme.red,"26px")}}
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 18px 40px 0 rgba(0，0，0，0 .04), 0 6px 12px 0 rgba(0，0，0，0 .08);

        ${_ref4=>{let{showZero,count}=_ref4;return!showZero&&0===count&&"visibility: hidden }"}}
    `},Count=styled_components_browser_esm.Ay.div`
    font-size: ${theme=>theme.normal};
    color: white;
`,style=styled_components_browser_esm.Ay.div`
    display: inline-block;
    //针对不同变体进行样式设置 
    ${_ref5=>{let{variant}=_ref5;return variants[variant]}}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge(_ref){let{children,show=!1,count=0,showZero=!1,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{variant:children?"dot":"default",show,count,showZero,...rest,children:children||(0,jsx_runtime.jsx)(Count,{children:count})})}Badge.propsType={show:prop_types_default().bool,count:prop_types_default().number,showZero:prop_types_default().bool,children:prop_types_default().any};const components_Badge=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{show:{defaultValue:{value:"false",computed:!1},required:!1},count:{defaultValue:{value:"0",computed:!1},required:!1},showZero:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="primary",shape="circle",size="30px",bgColor,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.A,{type,shape,size,bgColor,...rest,children})}const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1}]},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},description:"",type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"rect"',computed:!1}]},required:!1},size:{defaultValue:{value:'"30px"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Button/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const shapeVariants={circle:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    width: ${_ref=>{let{size}=_ref;return size}};
    height: ${_ref2=>{let{size}=_ref2;return size}};
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,rect:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    padding: 12px 18px;
    border-radius: 6px;
  `},typeVariants={primary:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    background-color: ${_ref3=>{let{theme}=_ref3;return theme.primaryColor}};
    color: white;
  `},__WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.button`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  ${_ref4=>{let{shape}=_ref4;return shapeVariants[shape]}}
  ${_ref5=>{let{type}=_ref5;return typeVariants[type]}}
  ${_ref6=>{let{bgColor}=_ref6;return`background-color: ${bgColor}`}};

  transform: scale(1);
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  }

`},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Icon});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),style=__webpack_require__("./src/components/Icon/style.js"),Button=__webpack_require__("./src/components/Button/index.js"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SocialIcon(_ref){let{icon,bgColor,href,...rest}=_ref;return(0,jsx_runtime.jsx)(Button.A,{size:"30px",bgColor,onClick:()=>href&&window.open(href,"_blank"),...rest,children:(0,jsx_runtime.jsx)(index_es.g,{icon,style:{fontSize:"16px"}})})}const Icon_SocialIcon=SocialIcon;function Icon(_ref){let{icon:IconComponent,width=24,height=24,color,opacity,...rest}=_ref;return(0,jsx_runtime.jsx)(style.A,{color,opacity,...rest,children:IconComponent&&(0,jsx_runtime.jsx)(IconComponent,{width,height})})}SocialIcon.__docgenInfo={description:"",methods:[],displayName:"SocialIcon",props:{icon:{description:"",type:{name:"elementType"},required:!1},bgColor:{description:"",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1}}},Icon.propsType={icon:prop_types_default().element,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),color:prop_types_default().string,opacity:prop_types_default().number},Icon.Social=Icon_SocialIcon;const components_Icon=Icon;Icon.__docgenInfo={description:"",methods:[{name:"Social",docblock:null,modifiers:["static"],params:[{name:"{ icon, bgColor, href, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Icon",props:{width:{defaultValue:{value:"24",computed:!1},required:!1},height:{defaultValue:{value:"24",computed:!1},required:!1}}}},"./src/components/Icon/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg,
    svg * {
        ${_ref=>{let{color}=_ref;return color?`fill: ${color}`:""}};
        ${_ref2=>{let{opacity}=_ref2;return opacity?`opacity: ${opacity}`:""}};
    }
        
`},"./src/components/MessageCard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_MessageCard});var _path,react=__webpack_require__("./node_modules/react/index.js"),style=__webpack_require__("./src/components/MessageCard/style.js"),Avatar=__webpack_require__("./src/components/Avatar/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgReplied(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:16,height:14,viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{opacity:.4,fillRule:"evenodd",clipRule:"evenodd",d:"M13.8304 4.65218C13.9435 4.76296 14 4.89408 14 5.04575C14 5.19739 13.9435 5.32842 13.8304 5.4392L10.2856 8.91076V9.52286C10.2856 9.76782 10.4018 9.93962 10.634 10.0388C10.7113 10.0679 10.7857 10.0825 10.8571 10.0825C11.0179 10.0825 11.1519 10.0271 11.259 9.91634L15.8304 5.43923C15.9434 5.32842 16 5.19733 16 5.04575C16 4.89417 15.9434 4.76305 15.8304 4.65218L11.259 0.17504C11.0864 -0.00569609 10.8781 -0.0463701 10.6341 0.0525584C10.4019 0.151732 10.2858 0.323677 10.2858 0.568518V1.17192L13.8304 4.65218ZM6.85739 2.85955C4.41093 3.0228 2.62819 3.66688 1.5092 4.792C0.503139 5.80061 0.000156403 7.28414 0 9.24292C0 9.58096 0.0506296 9.97003 0.151765 10.4103C0.252993 10.8505 0.367513 11.2527 0.49551 11.617C0.623507 11.9814 0.766578 12.3456 0.924222 12.7101C1.08196 13.0745 1.20248 13.3383 1.28573 13.5016L1.46426 13.8514C1.51198 13.9504 1.59523 14 1.71425 14C1.74997 14 1.77674 13.9972 1.79459 13.9913C1.94345 13.9447 2.01171 13.8456 1.99996 13.694C1.74399 11.3619 2.0595 9.7152 2.94644 8.75333C3.32743 8.33939 3.8348 8.01734 4.46869 7.78705C5.10286 7.55679 5.89889 7.40377 6.85714 7.32797V9.52286C6.85714 9.76782 6.97335 9.93962 7.20548 10.0388C7.28288 10.0679 7.35725 10.0825 7.42864 10.0825C7.58938 10.0825 7.72316 10.0271 7.83049 9.91634L12.4018 5.43923C12.5149 5.32842 12.5714 5.19733 12.5714 5.04575C12.5714 4.8942 12.515 4.76308 12.4018 4.65218L7.83061 0.17504C7.65802 -0.00569609 7.44965 -0.0463701 7.20564 0.0525584C6.9735 0.151732 6.85739 0.323677 6.85739 0.568518V2.85955Z",fill:"white"})))}const ForwardRef=react.forwardRef(SvgReplied);__webpack_require__.p;var Icon=__webpack_require__("./src/components/Icon/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MessageCard(_ref){let{avatarSrc,avatarStatus,statusText,name,time,message,unreadCount,active,replied,children,...rest}=_ref;const theme=(0,styled_components_browser_esm.DP)();return(0,jsx_runtime.jsxs)(style.Ay,{active,...rest,children:[(0,jsx_runtime.jsx)(Avatar.A,{status:avatarStatus,src:avatarSrc}),(0,jsx_runtime.jsx)(style.SX,{children:name}),(0,jsx_runtime.jsx)(style.nW,{children:statusText}),(0,jsx_runtime.jsx)(style.gX,{children:time}),(0,jsx_runtime.jsxs)(style.QB,{replied,children:[replied&&(0,jsx_runtime.jsx)(Icon.A,{width:16,height:14,icon:ForwardRef,color:active?theme.inactiveColorDark:theme.inactiveColor,opacity:active?.4:1,style:{justifyContent:"start"}}),(0,jsx_runtime.jsx)(style.JX,{children:message}),(0,jsx_runtime.jsx)(style.xw,{count:unreadCount})]})]})}const components_MessageCard=MessageCard;MessageCard.__docgenInfo={description:"",methods:[],displayName:"MessageCard",props:{avatarSrc:{description:"",type:{name:"string"},required:!0},avatarStatus:{description:"",type:{name:"any"},required:!1},statusText:{description:"",type:{name:"any"},required:!1},name:{description:"",type:{name:"any"},required:!1},time:{description:"",type:{name:"any"},required:!1},message:{description:"",type:{name:"any"},required:!1},unreadCount:{description:"",type:{name:"number"},required:!1},active:{description:"",type:{name:"bool"},required:!1},replied:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/MessageCard/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,JX:()=>MessageText,QB:()=>Message,SX:()=>Name,gX:()=>Time,nW:()=>Status,xw:()=>UnreadBadge});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),components_Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/index.js"),components_Paragraph__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Paragraph/index.js"),components_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/index.js"),utils_mixins__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/mixins.js"),components_Avatar_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Avatar/style.js");const Name=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(components_Text__WEBPACK_IMPORTED_MODULE_0__.A).attrs({size:"large"})`
  grid-area: name;
`,Time=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(components_Text__WEBPACK_IMPORTED_MODULE_0__.A).attrs({size:"medium",type:"secondary"})`
  grid-area: time;
  justify-self: end;
`,Status=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(components_Text__WEBPACK_IMPORTED_MODULE_0__.A).attrs({type:"secondary"})`
  grid-area: status;
`,Message=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  ${_ref=>{let{replied}=_ref;return replied&&styled_components__WEBPACK_IMPORTED_MODULE_4__.AH`
      grid-template-columns: 24px 1fr 30px;
    `}}
`,MessageText=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(components_Paragraph__WEBPACK_IMPORTED_MODULE_1__.A).attrs({ellipsis:!0})``,UnreadBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(components_Badge__WEBPACK_IMPORTED_MODULE_2__.A)`
  justify-self: end;
`,__WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  ${(0,utils_mixins__WEBPACK_IMPORTED_MODULE_5__.Nr)()};
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background: ${_ref2=>{let{theme}=_ref2;return theme.background}};
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }

  ${components_Avatar_style__WEBPACK_IMPORTED_MODULE_3__.Ay} {
    grid-area: avatar;
  }

  ${_ref3=>{let{active}=_ref3;return active&&styled_components__WEBPACK_IMPORTED_MODULE_4__.AH`
      background: ${_ref4=>{let{theme}=_ref4;return theme.darkPurple}};
      ${Name}, ${Status}, ${Time}, ${MessageText} {
        color: white;
      }
      ${Status}, ${Time} {
        opacity: 0.4;
      }
      ${(0,utils_mixins__WEBPACK_IMPORTED_MODULE_5__.UB)({barWidth:"4px",shadowWidth:"14px"})}

      /* 隐藏指示条露在外边的部分 */
      overflow: hidden;`}}
`},"./src/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Paragraph});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Text/style.js");const Paragraph_style=(0,styled_components_browser_esm.Ay)(style.A)`
    ${_ref=>{let{ellipsis}=_ref;return ellipsis&&styled_components_browser_esm.AH`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `}}
        
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph(_ref){let{children,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsx)(Paragraph_style,{as:"p",ellipsis,...rest,children})}Paragraph.propsType={children:prop_types_default().any};const components_Paragraph=Paragraph;Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"}},"./src/components/Text/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_style_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(_ref){let{children,type="primary",size="normal",bold,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_1__.A,{type,size,bold,...rest,children})}Text.propsType={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,type:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["primary","secondary","danger"]),size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["xxsmall","xsmall","small","normal","medium","large","xlarge","xxlarge"]),bold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const __WEBPACK_DEFAULT_EXPORT__=Text;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{type:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'normal'",computed:!1},required:!1}}}},"./src/components/Text/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const typeVariants={primary:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        color: ${_ref=>{let{theme}=_ref;return theme.grayDark}};
    `,secondary:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        color: ${_ref2=>{let{theme}=_ref2;return theme.grayDark}};
        opacity: 0.3;
    `,danger:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        color: ${_ref3=>{let{theme}=_ref3;return theme.red}};
    `},sizeVariants={normal:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref4=>{let{theme}=_ref4;return theme.normal}}
    `,medium:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref5=>{let{theme}=_ref5;return theme.medium}}
    `,large:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref6=>{let{theme}=_ref6;return theme.large}}
    `,xlarge:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref7=>{let{theme}=_ref7;return theme.xlarge}}
    `,xxlarge:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref8=>{let{theme}=_ref8;return theme.xxlarge}}
    `,small:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref9=>{let{theme}=_ref9;return theme.small}}
    `,xsmall:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref10=>{let{theme}=_ref10;return theme.xsmall}}
    `,xxsmall:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
        ${_ref11=>{let{theme}=_ref11;return theme.xxsmall}}
    `},__WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div`
    font-size: ${_ref12=>{let{size}=_ref12;return sizeVariants[size]||sizeVariants.normal}};
    ${_ref13=>{let{type}=_ref13;return typeVariants[type]||typeVariants.normal}}
    ${_ref14=>{let{bold}=_ref14;return bold&&"font-weight: 500"}}
`},"./src/utils/mixins.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nr:()=>card,UB:()=>activeBar,n1:()=>circle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const circle=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    position: absolute;
    height: ${size};
    width: ${size};
    -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
    background: ${color};
`},activeBar=function(){let{barWidth="8px",shadowWidth="20px"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    position: relative;
    &::before,
    &::after{
        display: block;
        content: "";
        position: absolute;
        height: 100%;
        left: 0
    }
    
    &::before{
        width: ${barWidth};
        background: linear-gradient(180deg,rgba(142, 197, 242, 1) 0%, rgba(79, 157, 222, 1) 100%);
    }
    
    &::after{
        width: ${shadowWidth};
        background: linear-gradient(270deg, rgba(41, 47, 76, 1) 0%, rgba(142, 197, 242, 1) 100%);
        opacity: 0.6;
    }
`},card=function(){let radius=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"6px",padding=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"20px 30px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
  padding: ${padding};
  background: ${_ref=>{let{theme}=_ref;return theme.background}};
  box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04);
  border-radius: ${radius};
`}},"./src/assets/images/face-male-1.jpg":module=>{module.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=components-MessageCard-messageCard-stories.d2118227.iframe.bundle.js.map