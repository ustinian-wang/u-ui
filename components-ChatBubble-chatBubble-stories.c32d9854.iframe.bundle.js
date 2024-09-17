"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[113],{"./src/components/ChatBubble/chatBubble.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FromOthers:()=>FromOthers,Mine:()=>Mine,VoiceMessageType:()=>VoiceMessageType,VoiceMessageTypeMine:()=>VoiceMessageTypeMine,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ChatBubble/index.js"),components_VoiceMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/VoiceMessage/index.js"),components_Emoji__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Emoji/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"component/ChatBubble",component:___WEBPACK_IMPORTED_MODULE_1__.A,decorators:[storyFn=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{padding:"24px"},children:storyFn()})]},FromOthers=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{time:"昨天 下午14：26",children:"这是一条其它人发送的聊天消息"}),Mine=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.A,{type:"mine",time:"昨天 下午16：30",children:["这是一条我自己发送的聊天消息",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Emoji__WEBPACK_IMPORTED_MODULE_3__.A,{label:"smile",children:"😄"})]}),VoiceMessageType=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{time:"昨天 下午18：30",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_VoiceMessage__WEBPACK_IMPORTED_MODULE_2__.A,{time:"01:24"})}),VoiceMessageTypeMine=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{type:"mine",time:"昨天 下午18：30",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_VoiceMessage__WEBPACK_IMPORTED_MODULE_2__.A,{type:"mine",time:"01:24"})}),__namedExportsOrder=["FromOthers","Mine","VoiceMessageType","VoiceMessageTypeMine"];FromOthers.parameters={...FromOthers.parameters,docs:{...FromOthers.parameters?.docs,source:{originalSource:'() => <ChatBubble time="昨天 下午14：26">这是一条其它人发送的聊天消息</ChatBubble>',...FromOthers.parameters?.docs?.source}}},Mine.parameters={...Mine.parameters,docs:{...Mine.parameters?.docs,source:{originalSource:'() => <ChatBubble type="mine" time="昨天 下午16：30">\n    这是一条我自己发送的聊天消息<Emoji label="smile">😄</Emoji>\n  </ChatBubble>',...Mine.parameters?.docs?.source}}},VoiceMessageType.parameters={...VoiceMessageType.parameters,docs:{...VoiceMessageType.parameters?.docs,source:{originalSource:'() => <ChatBubble time="昨天 下午18：30">\n    <VoiceMessage time="01:24" />\n  </ChatBubble>',...VoiceMessageType.parameters?.docs?.source}}},VoiceMessageTypeMine.parameters={...VoiceMessageTypeMine.parameters,docs:{...VoiceMessageTypeMine.parameters?.docs,source:{originalSource:'() => <ChatBubble type="mine" time="昨天 下午18：30">\n    <VoiceMessage type="mine" time="01:24" />\n  </ChatBubble>',...VoiceMessageTypeMine.parameters?.docs?.source}}}},"./src/components/ChatBubble/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_ChatBubble});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),Text=__webpack_require__("./src/components/Text/index.js");const Time=(0,styled_components_browser_esm.Ay)(Paragraph.A).attrs({type:"secondary",size:"small"})`
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
`;var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgBubbleTip(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:29,height:16,viewBox:"0 0 29 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M8.48799 1.14592C8.16527 2.53004 6.72888 6.53762 0.510644 10.9194C0.190634 11.145 0.0337882 11.5382 0.110928 11.9222C0.188085 12.3061 0.484537 12.6083 0.866706 12.6929C0.901367 12.7005 1.73407 12.8823 3.2305 13.0133C7.49745 13.3866 16.2914 13.3021 27.4453 8.58744C28.2641 8.70295 4.37803 -1.82241 8.48799 1.14592Z",fill:"white"})))}const ForwardRef=react.forwardRef(SvgBubbleTip);__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ChatBubble(_ref){let{children,type,time,...rest}=_ref;return(0,jsx_runtime.jsxs)(style,{type,...rest,children:[(0,jsx_runtime.jsxs)(Bubble,{children:[(0,jsx_runtime.jsx)(BubbleTip,{icon:ForwardRef,width:40,height:28,color:"white"}),(0,jsx_runtime.jsx)(MessageText,{children})]}),(0,jsx_runtime.jsx)(Time,{children:time})]})}const components_ChatBubble=ChatBubble;ChatBubble.__docgenInfo={description:"",methods:[],displayName:"ChatBubble",props:{children:{description:"",type:{name:"any"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"mine"',computed:!1}]},required:!1},time:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Emoji/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Emoji});__webpack_require__("./node_modules/react/index.js");const style=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.span``;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Emoji(_ref){let{children,label,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{role:"img","aria-label":label,...rest,children})}const components_Emoji=Emoji;Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji",props:{children:{description:"",type:{name:"any"},required:!1},label:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Paragraph});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Text/style.js");const Paragraph_style=(0,styled_components_browser_esm.Ay)(style.A)`
    ${_ref=>{let{ellipsis}=_ref;return ellipsis&&styled_components_browser_esm.AH`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `}}
        
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph(_ref){let{children,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsx)(Paragraph_style,{as:"p",ellipsis,...rest,children})}Paragraph.propsType={children:prop_types_default().any};const components_Paragraph=Paragraph;Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"}}}]);
//# sourceMappingURL=components-ChatBubble-chatBubble-stories.c32d9854.iframe.bundle.js.map