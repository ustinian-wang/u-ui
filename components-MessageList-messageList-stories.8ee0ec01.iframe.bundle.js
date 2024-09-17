"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[2779],{"./src/components/MessageList/messageList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>messageList_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/MessageCard/style.js");const ChatList=styled_components_browser_esm.Ay.div`
  ${style.Ay} {
    margin-bottom: 20px;
  }
`,MessageList_style=styled_components_browser_esm.Ay.div``;__webpack_require__("./src/assets/icons/plus.svg"),__webpack_require__("./src/components/Filter/index.js"),__webpack_require__("./src/components/Select/index.js"),__webpack_require__("./src/components/Option/index.js"),__webpack_require__("./src/components/Button/index.js"),__webpack_require__("./src/components/Icon/index.js"),__webpack_require__("./src/components/Input/index.js");var MessageCard=__webpack_require__("./src/components/MessageCard/index.js"),face_male_1=__webpack_require__("./src/assets/images/face-male-1.jpg"),FilterList=__webpack_require__("./src/components/FilterList/index.js"),react_spring_modern=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs"),useStaggeredList=__webpack_require__("./src/hooks/useStaggeredList.js"),face_male_2=__webpack_require__("./src/assets/images/face-male-2.jpg"),face_male_3=__webpack_require__("./src/assets/images/face-male-3.jpg");const messages=[{id:1,avatarSrc:face_male_1,name:"李铭浩",status:"online",statusText:"在线",time:"3 小时之前",message:"即使爬到最高的山上，一次也只能脚踏实地地迈一步",unreadCount:2,replied:!1},{id:2,avatarSrc:__webpack_require__("./src/assets/images/face-female-1.jpg"),name:"孙文佳",status:"offline",statusText:"离线",time:"下午 14:45",message:"好的，明天我就把资料送过去！感谢提醒！",unreadCount:2,replied:!1},{id:3,avatarSrc:face_male_2,name:"慕容天宇",status:"offline",statusText:"离线",time:"早上 06:18",message:"明天约一把王者荣耀，不连赢5把不罢休 🤘",unreadCount:0,replied:!0},{id:4,avatarSrc:__webpack_require__("./src/assets/images/face-female-2.jpg"),name:"郭文菲",status:"online",statusText:"在线",time:"2018年9月5日",message:"明天我要去上课，如果有空的话我再和你说",unreadCount:0,replied:!0},{id:5,avatarSrc:face_male_3,name:"张峰",status:"online",statusText:"在线",time:"2018年9月1日",message:"公司打印机坏了，找个人维修一下",unreadCount:0,replied:!1},{id:6,avatarSrc:__webpack_require__("./src/assets/images/face-female-3.jpg"),name:"李凝",status:"offline",statusText:"离线",time:"2018年8月31日",message:"你知道吗？昨天发生了一件很神奇的事情！",unreadCount:0,replied:!0}];var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MessageList(_ref){let{children,...rest}=_ref;const trailAnimes=(0,useStaggeredList.A)(6);return(0,jsx_runtime.jsx)(MessageList_style,{...rest,children:(0,jsx_runtime.jsx)(FilterList.A,{options:["最新消息优先","在线好友优先"],actionLabel:"创建会话",children:(0,jsx_runtime.jsx)(ChatList,{children:messages.map(((message,index)=>(0,jsx_runtime.jsx)(react_spring_modern.CS.div,{style:trailAnimes[index],children:(0,jsx_runtime.jsx)(MessageCard.A,{active:3===index,replied:message.replied,avatarSrc:message.avatarSrc,name:message.name,avatarStatus:message.status,statusText:message.statusText,time:message.time,message:message.message,unreadCount:message.unreadCount},message.id)},message.id)))})})})}const components_MessageList=MessageList;MessageList.__docgenInfo={description:"",methods:[],displayName:"MessageList",props:{children:{description:"",type:{name:"any"},required:!1}}};const messageList_stories={title:"页面组件/MessageList",component:components_MessageList},Default=()=>(0,jsx_runtime.jsx)(components_MessageList,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <MessageList />",...Default.parameters?.docs?.source}}}},"./src/components/Badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Badge});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/utils/mixins.js");__webpack_require__("./src/theme.js");const variants={dot:styled_components_browser_esm.AH`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge(_ref){let{children,show=!1,count=0,showZero=!1,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{variant:children?"dot":"default",show,count,showZero,...rest,children:children||(0,jsx_runtime.jsx)(Count,{children:count})})}Badge.propsType={show:prop_types_default().bool,count:prop_types_default().number,showZero:prop_types_default().bool,children:prop_types_default().any};const components_Badge=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{show:{defaultValue:{value:"false",computed:!1},required:!1},count:{defaultValue:{value:"0",computed:!1},required:!1},showZero:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/MessageCard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_MessageCard});var _path,react=__webpack_require__("./node_modules/react/index.js"),style=__webpack_require__("./src/components/MessageCard/style.js"),Avatar=__webpack_require__("./src/components/Avatar/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgReplied(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:16,height:14,viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{opacity:.4,fillRule:"evenodd",clipRule:"evenodd",d:"M13.8304 4.65218C13.9435 4.76296 14 4.89408 14 5.04575C14 5.19739 13.9435 5.32842 13.8304 5.4392L10.2856 8.91076V9.52286C10.2856 9.76782 10.4018 9.93962 10.634 10.0388C10.7113 10.0679 10.7857 10.0825 10.8571 10.0825C11.0179 10.0825 11.1519 10.0271 11.259 9.91634L15.8304 5.43923C15.9434 5.32842 16 5.19733 16 5.04575C16 4.89417 15.9434 4.76305 15.8304 4.65218L11.259 0.17504C11.0864 -0.00569609 10.8781 -0.0463701 10.6341 0.0525584C10.4019 0.151732 10.2858 0.323677 10.2858 0.568518V1.17192L13.8304 4.65218ZM6.85739 2.85955C4.41093 3.0228 2.62819 3.66688 1.5092 4.792C0.503139 5.80061 0.000156403 7.28414 0 9.24292C0 9.58096 0.0506296 9.97003 0.151765 10.4103C0.252993 10.8505 0.367513 11.2527 0.49551 11.617C0.623507 11.9814 0.766578 12.3456 0.924222 12.7101C1.08196 13.0745 1.20248 13.3383 1.28573 13.5016L1.46426 13.8514C1.51198 13.9504 1.59523 14 1.71425 14C1.74997 14 1.77674 13.9972 1.79459 13.9913C1.94345 13.9447 2.01171 13.8456 1.99996 13.694C1.74399 11.3619 2.0595 9.7152 2.94644 8.75333C3.32743 8.33939 3.8348 8.01734 4.46869 7.78705C5.10286 7.55679 5.89889 7.40377 6.85714 7.32797V9.52286C6.85714 9.76782 6.97335 9.93962 7.20548 10.0388C7.28288 10.0679 7.35725 10.0825 7.42864 10.0825C7.58938 10.0825 7.72316 10.0271 7.83049 9.91634L12.4018 5.43923C12.5149 5.32842 12.5714 5.19733 12.5714 5.04575C12.5714 4.8942 12.515 4.76308 12.4018 4.65218L7.83061 0.17504C7.65802 -0.00569609 7.44965 -0.0463701 7.20564 0.0525584C6.9735 0.151732 6.85739 0.323677 6.85739 0.568518V2.85955Z",fill:"white"})))}const ForwardRef=react.forwardRef(SvgReplied);__webpack_require__.p;var Icon=__webpack_require__("./src/components/Icon/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MessageCard(_ref){let{avatarSrc,avatarStatus,statusText,name,time,message,unreadCount,active,replied,children,...rest}=_ref;const theme=(0,styled_components_browser_esm.DP)();return(0,jsx_runtime.jsxs)(style.Ay,{active,...rest,children:[(0,jsx_runtime.jsx)(Avatar.A,{status:avatarStatus,src:avatarSrc}),(0,jsx_runtime.jsx)(style.SX,{children:name}),(0,jsx_runtime.jsx)(style.nW,{children:statusText}),(0,jsx_runtime.jsx)(style.gX,{children:time}),(0,jsx_runtime.jsxs)(style.QB,{replied,children:[replied&&(0,jsx_runtime.jsx)(Icon.A,{width:16,height:14,icon:ForwardRef,color:active?theme.inactiveColorDark:theme.inactiveColor,opacity:active?.4:1,style:{justifyContent:"start"}}),(0,jsx_runtime.jsx)(style.JX,{children:message}),(0,jsx_runtime.jsx)(style.xw,{count:unreadCount})]})]})}const components_MessageCard=MessageCard;MessageCard.__docgenInfo={description:"",methods:[],displayName:"MessageCard",props:{avatarSrc:{description:"",type:{name:"string"},required:!0},avatarStatus:{description:"",type:{name:"any"},required:!1},statusText:{description:"",type:{name:"any"},required:!1},name:{description:"",type:{name:"any"},required:!1},time:{description:"",type:{name:"any"},required:!1},message:{description:"",type:{name:"any"},required:!1},unreadCount:{description:"",type:{name:"number"},required:!1},active:{description:"",type:{name:"bool"},required:!1},replied:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/MessageCard/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,JX:()=>MessageText,QB:()=>Message,SX:()=>Name,gX:()=>Time,nW:()=>Status,xw:()=>UnreadBadge});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),components_Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/index.js"),components_Paragraph__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Paragraph/index.js"),components_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Badge/index.js"),utils_mixins__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/mixins.js"),components_Avatar_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Avatar/style.js");const Name=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay)(components_Text__WEBPACK_IMPORTED_MODULE_0__.A).attrs({size:"large"})`
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
        
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph(_ref){let{children,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsx)(Paragraph_style,{as:"p",ellipsis,...rest,children})}Paragraph.propsType={children:prop_types_default().any};const components_Paragraph=Paragraph;Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"}},"./src/hooks/useStaggeredList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useStaggeredList});var react_spring__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs");function useStaggeredList(number){return(0,react_spring__WEBPACK_IMPORTED_MODULE_0__.wR)(number,{transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(-50px, 0px, 0px)"},config:{mass:.8,tension:280,friction:20}})}}}]);
//# sourceMappingURL=components-MessageList-messageList-stories.8ee0ec01.iframe.bundle.js.map