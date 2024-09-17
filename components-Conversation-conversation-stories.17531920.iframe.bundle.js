"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[7767],{"./src/components/Conversation/conversation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>conversation_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ChatBubble=__webpack_require__("./src/components/ChatBubble/index.js"),react_spring_modern=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs");const Conversations=(0,styled_components_browser_esm.Ay)(react_spring_modern.CS.div)`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  flex: 1;

  & > * {
    margin: 10px 0;
  }
`,MyChatBubble=(0,styled_components_browser_esm.Ay)(ChatBubble.A).attrs({type:"mine"})`
  align-self: flex-end;
`,style=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${_ref=>{let{theme}=_ref;return theme.gray4}};

  & > *:last-child {
    align-self: end;
  }
`;var TitleBar=__webpack_require__("./src/components/TitleBar/index.js"),VoiceMessage=__webpack_require__("./src/components/VoiceMessage/index.js"),Emoji=__webpack_require__("./src/components/Emoji/index.js"),Footer=__webpack_require__("./src/components/Footer/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Conversation(_ref){let{onAvatarClick,onVideoClicked,children,...rest}=_ref;const tBarAnimeProps=(0,react_spring_modern.zh)({opacity:1,transform:"translate3d(0px, 0px, 0px)",from:{opacity:0,transform:"translate3d(0px, -50px, 0px)"},delay:500}),convsAnimeProps=(0,react_spring_modern.zh)({opacity:1,transform:"translate3d(0px, 0px, 0px)",from:{opacity:0,transform:"translate3d(50px, 0px, 0px)"},delay:600}),ftAnimeProps=(0,react_spring_modern.zh)({opacity:1,transform:"translate3d(0px, 0px, 0px)",from:{opacity:0,transform:"translate3d(0px, 50px, 0px)"},delay:750});return(0,jsx_runtime.jsxs)(style,{...rest,children:[(0,jsx_runtime.jsx)(TitleBar.A,{onVideoClicked,onAvatarClick,animeProps:tBarAnimeProps}),(0,jsx_runtime.jsxs)(Conversations,{style:convsAnimeProps,children:[(0,jsx_runtime.jsx)(ChatBubble.A,{time:"昨天 下午14：26",children:"Hi 小宇，忙什么呢？"}),(0,jsx_runtime.jsx)(MyChatBubble,{time:"昨天 下午16：30",children:"Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！"}),(0,jsx_runtime.jsx)(ChatBubble.A,{time:"昨天 下午18：30",children:(0,jsx_runtime.jsx)(VoiceMessage.A,{time:"01:24"})}),(0,jsx_runtime.jsxs)(MyChatBubble,{time:"昨天 下午16：30",children:["明天约一把王者荣耀，不连赢5把不罢休 🤘",(0,jsx_runtime.jsx)(Emoji.A,{label:"smile",children:"🤘"})]})]}),(0,jsx_runtime.jsx)(Footer.A,{animeProps:ftAnimeProps})]})}const components_Conversation=Conversation;Conversation.__docgenInfo={description:"",methods:[],displayName:"Conversation",props:{children:{description:"",type:{name:"any"},required:!1}}};const conversation_stories={title:"页面组件/Conversation",component:components_Conversation},Default=()=>(0,jsx_runtime.jsx)(components_Conversation,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Conversation />",...Default.parameters?.docs?.source}}}},"./src/components/Avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/style.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar(_ref){let{src,size="48px",status,statusIconSize="8px",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_style_js__WEBPACK_IMPORTED_MODULE_0__.Ay,{...rest,children:[status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.kW,{status,size:statusIconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.ks,{size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.BK,{src,alt:""})})]})}Avatar.propsType={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,status:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["online","offline"]),statusIconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"48px"',computed:!1},required:!1},statusIconSize:{defaultValue:{value:'"8px"',computed:!1},required:!1}}}},"./src/components/Avatar/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,BK:()=>AvatarImage,kW:()=>StatusIcon,ks:()=>AvatarClip});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_mixins__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mixins.js");const circleMixinFunc=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
`,__WEBPACK_DEFAULT_EXPORT__=StyledAvatar},"./src/components/ChatBubble/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ChatBubble});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),Text=__webpack_require__("./src/components/Text/index.js");const Time=(0,styled_components_browser_esm.Ay)(Paragraph.A).attrs({type:"secondary",size:"small"})`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`,BubbleTip=(0,styled_components_browser_esm.Ay)(Icon.A)`
  position: absolute;
  bottom: -15%;
  left: 0;

  z-index: 5;
`,Bubble=styled_components_browser_esm.Ay.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`,MessageText=(0,styled_components_browser_esm.Ay)(Text.A)``,typeVariants={mine:styled_components_browser_esm.AH`
    ${Bubble} {
      background-color: ${_ref=>{let{theme}=_ref;return theme.primaryColor}};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;

      path {
        fill: ${_ref2=>{let{theme}=_ref2;return theme.primaryColor}};
      }
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `},style=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;

  ${_ref3=>{let{type}=_ref3;return type&&typeVariants[type]}}
`;var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgBubbleTip(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:29,height:16,viewBox:"0 0 29 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M8.48799 1.14592C8.16527 2.53004 6.72888 6.53762 0.510644 10.9194C0.190634 11.145 0.0337882 11.5382 0.110928 11.9222C0.188085 12.3061 0.484537 12.6083 0.866706 12.6929C0.901367 12.7005 1.73407 12.8823 3.2305 13.0133C7.49745 13.3866 16.2914 13.3021 27.4453 8.58744C28.2641 8.70295 4.37803 -1.82241 8.48799 1.14592Z",fill:"white"})))}const ForwardRef=react.forwardRef(SvgBubbleTip);__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ChatBubble(_ref){let{children,type,time,...rest}=_ref;return(0,jsx_runtime.jsxs)(style,{type,...rest,children:[(0,jsx_runtime.jsxs)(Bubble,{children:[(0,jsx_runtime.jsx)(BubbleTip,{icon:ForwardRef,width:40,height:28,color:"white"}),(0,jsx_runtime.jsx)(MessageText,{children})]}),(0,jsx_runtime.jsx)(Time,{children:time})]})}const components_ChatBubble=ChatBubble;ChatBubble.__docgenInfo={description:"",methods:[],displayName:"ChatBubble",props:{children:{description:"",type:{name:"any"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"mine"',computed:!1}]},required:!1},time:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Dropdown/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dropdown/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Dropdown(_ref){let{children,content,align="right",...rest}=_ref;const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__.Ay,{onClick:()=>setVisible(!visible),...rest,children:[children,content&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.RZ,{align,visible,children:content})]})}const __WEBPACK_DEFAULT_EXPORT__=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{align:{defaultValue:{value:'"right"',computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"left"',computed:!1},{value:'"bottom"',computed:!1},{value:'"right"',computed:!1}]},required:!1},children:{description:"",type:{name:"any"},required:!1},content:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Dropdown/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,RZ:()=>DropdownContainer,tJ:()=>DropdownItem});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),components_Seperator_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Seperator/style.js");const DropdownItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  margin: 12px 0;
`,DropdownContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: absolute;
  white-space: nowrap;
  padding: 4px 26px;
  background: ${_ref=>{let{theme}=_ref;return theme.background}};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);

  display: ${_ref2=>{let{visible}=_ref2;return visible?"block":"none"}};

  ${_ref3=>{let{align}=_ref3;return align}}: 0;

  ${components_Seperator_style__WEBPACK_IMPORTED_MODULE_0__.A} {
    margin: -3px -26px;
    width: calc(100% + 52px);
  }
`,__WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: relative;
  cursor: pointer;
`},"./src/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Paragraph});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Text/style.js");const Paragraph_style=(0,styled_components_browser_esm.Ay)(style.A)`
    ${_ref=>{let{ellipsis}=_ref;return ellipsis&&styled_components_browser_esm.AH`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `}}
        
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph(_ref){let{children,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsx)(Paragraph_style,{as:"p",ellipsis,...rest,children})}Paragraph.propsType={children:prop_types_default().any};const components_Paragraph=Paragraph;Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"}},"./src/components/Seperator/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Seperator/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Seperator(_ref){let{children,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.A,{...rest,children})}const __WEBPACK_DEFAULT_EXPORT__=Seperator;Seperator.__docgenInfo={description:"",methods:[],displayName:"Seperator",props:{children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Seperator/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${_ref=>{let{theme}=_ref;return theme.gray4}};
`},"./src/components/TitleBar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_TitleBar});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Icon/style.js"),react_spring_modern=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs");const Title=styled_components_browser_esm.Ay.div`
  display: grid;
`,Actions=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${style.A} {
    cursor: pointer;
  }
`,TitleBar_style=(0,styled_components_browser_esm.Ay)(react_spring_modern.CS.div)`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${_ref=>{let{theme}=_ref;return theme.gray4}};
`;var _path,face_male_3=__webpack_require__("./src/assets/images/face-male-3.jpg");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgCall(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M16.293 12.7537L16.2115 12.5137C16.0186 11.9529 15.3862 11.3681 14.8052 11.2141L12.655 10.6397C12.0719 10.4846 11.2401 10.6932 10.8135 11.1103L10.0353 11.8712C7.20711 11.124 4.98938 8.95547 4.2262 6.19068L5.00444 5.42973C5.43107 5.01258 5.64435 4.20036 5.48571 3.63021L4.89938 1.52673C4.74074 0.957618 4.14155 0.339275 3.56917 0.152702L3.32372 0.0720092C2.75025 -0.114564 1.93239 0.0741221 1.5058 0.491236L0.341713 1.63049C0.133749 1.83276 0.000835284 2.4113 0.000835284 2.41341C-0.0398793 6.02715 1.40931 9.50881 4.02362 12.0651C6.63151 14.615 10.179 16.0299 13.8641 15.9995C13.8834 15.9995 14.4922 15.8716 14.7002 15.6693L15.8643 14.5311C16.2908 14.114 16.4838 13.3144 16.293 12.7537Z",fill:"#292F4C"})))}const ForwardRef=react.forwardRef(SvgCall);__webpack_require__.p;var camera_path;function camera_extends(){return camera_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},camera_extends.apply(null,arguments)}function SvgCamera(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",camera_extends({width:24,height:14,viewBox:"0 0 24 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,camera_path||(camera_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.62582 0H13.5755C15.0197 0 16.2013 1.14711 16.2013 2.60708V11.3929C16.2013 12.8268 15.0197 14 13.5755 14H2.62582C1.18162 14 0 12.8268 0 11.3929V2.60708C0 1.17318 1.18162 0 2.62582 0ZM21.6105 1.61639C21.7418 1.53817 21.8993 1.45996 22.0569 1.43389C23.081 1.19926 24 1.98138 24 2.946V11.0019C24 11.2886 23.9212 11.5493 23.7899 11.784C23.3435 12.54 22.3982 12.8007 21.6368 12.3575L17.5142 10.0112V3.96276L21.6105 1.61639Z",fill:"#292F4C"})))}const camera_ForwardRef=react.forwardRef(SvgCamera);__webpack_require__.p;var options=__webpack_require__("./src/assets/icons/options.svg"),Avatar=__webpack_require__("./src/components/Avatar/index.js"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),Text=__webpack_require__("./src/components/Text/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),Dropdown_style=__webpack_require__("./src/components/Dropdown/style.js"),Dropdown=__webpack_require__("./src/components/Dropdown/index.js"),Seperator=__webpack_require__("./src/components/Seperator/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TitleBar(_ref){let{animeProps,style,onAvatarClick,onVideoClicked,children,...rest}=_ref;return(0,jsx_runtime.jsxs)(TitleBar_style,{style:{...style,...animeProps},...rest,children:[(0,jsx_runtime.jsx)(Avatar.A,{onClick:onAvatarClick,status:"offline",src:face_male_3}),(0,jsx_runtime.jsxs)(Title,{children:[(0,jsx_runtime.jsx)(Paragraph.A,{size:"large",children:"慕容天宇"}),(0,jsx_runtime.jsxs)(Paragraph.A,{type:"secondary",children:[(0,jsx_runtime.jsx)(Text.A,{children:"离线"}),(0,jsx_runtime.jsx)(Text.A,{children:"· 最后阅读：3小时前"})]})]}),(0,jsx_runtime.jsxs)(Actions,{children:[(0,jsx_runtime.jsx)(Icon.A,{opacity:.3,icon:ForwardRef,onClick:onVideoClicked}),(0,jsx_runtime.jsx)(Icon.A,{opacity:.3,icon:camera_ForwardRef}),(0,jsx_runtime.jsx)(Dropdown.A,{content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Dropdown_style.tJ,{children:(0,jsx_runtime.jsx)(Paragraph.A,{children:"个人资料"})}),(0,jsx_runtime.jsx)(Dropdown_style.tJ,{children:(0,jsx_runtime.jsx)(Paragraph.A,{children:"关闭会话"})}),(0,jsx_runtime.jsx)(Seperator.A,{}),(0,jsx_runtime.jsx)(Dropdown_style.tJ,{children:(0,jsx_runtime.jsx)(Paragraph.A,{type:"danger",children:"屏蔽此人"})})]}),children:(0,jsx_runtime.jsx)(Icon.A,{opacity:.3,icon:options.h})})]})]})}const components_TitleBar=TitleBar;TitleBar.__docgenInfo={description:"",methods:[],displayName:"TitleBar",props:{children:{description:"",type:{name:"any"},required:!1}}}},"./src/utils/mixins.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nr:()=>card,UB:()=>activeBar,n1:()=>circle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const circle=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
`}},"./src/assets/images/face-male-3.jpg":module=>{module.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=components-Conversation-conversation-stories.17531920.iframe.bundle.js.map