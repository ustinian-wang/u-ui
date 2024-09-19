"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[2537],{"./src/pages/Settings/settings.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithDescription:()=>WithDescription,WithMenu:()=>WithMenu,WithoutDescription:()=>WithoutDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>settings_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledSettingsItem=styled_components_browser_esm.Ay.div``,SettingsItemControl=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
`,StyledSettingsGroup=styled_components_browser_esm.Ay.div``,style=styled_components_browser_esm.Ay.div`
  padding: 72px;
`;var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgArrowMenuRight(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:13,height:23,viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.706875 21.9202C1.0974 22.3108 1.73056 22.3108 2.12109 21.9202L12.0206 12.0207C12.4111 11.6302 12.4111 10.9971 12.0206 10.6065L2.12109 0.707037C1.73056 0.316513 1.0974 0.316513 0.706874 0.707037C0.31635 1.09756 0.31635 1.73073 0.706874 2.12125L9.89926 11.3136L0.706875 20.506C0.31635 20.8966 0.31635 21.5297 0.706875 21.9202Z",fill:"#D8D8D8"})))}const ForwardRef=react.forwardRef(SvgArrowMenuRight);__webpack_require__.p;var Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),Switch=__webpack_require__("./src/components/Switch/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),Seperator=__webpack_require__("./src/components/Seperator/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_spring_modern=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Settings(_ref){let{children,...rest}=_ref;const animeProps=(0,react_spring_modern.zh)({transform:"translate3d(0px, 0px, 0px)",opacity:1,from:{transform:"translate3d(100px, 0px, 0px)",opacity:0},config:{tension:140},delay:300});return(0,jsx_runtime.jsx)(style,{...rest,children:(0,jsx_runtime.jsxs)(react_spring_modern.CS.div,{style:animeProps,children:[(0,jsx_runtime.jsxs)(SettingsGroup,{groupName:"隐私设置",children:[(0,jsx_runtime.jsx)(SettingsItem,{label:"添加好友时需要验证"}),(0,jsx_runtime.jsx)(SettingsItem,{label:"推荐通讯录好友",description:"上传的通讯录只用来匹配好友列表，本应用不会记录和发送任何信息给其它机构或"}),(0,jsx_runtime.jsx)(SettingsItem,{label:"只能通过手机号找到我"})]}),(0,jsx_runtime.jsxs)(SettingsGroup,{groupName:"通知设置",children:[(0,jsx_runtime.jsx)(SettingsItem,{label:"新消息通知"}),(0,jsx_runtime.jsx)(SettingsItem,{label:"语音和视频通话提醒"}),(0,jsx_runtime.jsx)(SettingsItem,{label:"显示通知详情"}),(0,jsx_runtime.jsx)(SettingsItem,{label:"声音"}),(0,jsx_runtime.jsx)(_StyledLink,{to:"/settings/blocked",children:(0,jsx_runtime.jsx)(SettingsItem,{label:"查看已静音的好友列表",type:"menu"})})]})]})})}function SettingsGroup(_ref2){let{groupName,children,...rest}=_ref2;return(0,jsx_runtime.jsxs)(StyledSettingsGroup,{children:[(0,jsx_runtime.jsx)(Paragraph.A,{size:"xxlarge",style:{paddingBottom:"24px"},children:groupName}),children]})}function SettingsItem(_ref3){let{type="switch",label,description,children,...rest}=_ref3;return(0,jsx_runtime.jsxs)(StyledSettingsItem,{...rest,children:[(0,jsx_runtime.jsxs)(SettingsItemControl,{children:[(0,jsx_runtime.jsx)(Paragraph.A,{size:"large",children:label}),"switch"===type&&(0,jsx_runtime.jsx)(Switch.A,{}),"menu"===type&&(0,jsx_runtime.jsx)(Icon.A,{icon:ForwardRef})]}),description&&(0,jsx_runtime.jsx)(Paragraph.A,{type:"secondary",style:{margin:"4px 0"},children:description}),(0,jsx_runtime.jsx)(Seperator.A,{style:{marginTop:"8px",marginBottom:"20px"}})]})}const pages_Settings=Settings;SettingsItem.__docgenInfo={description:"",methods:[],displayName:"SettingsItem",props:{type:{defaultValue:{value:'"switch"',computed:!1},required:!1}}},Settings.__docgenInfo={description:"",methods:[],displayName:"Settings",props:{type:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}};var _StyledLink=(0,styled_components_browser_esm.Ay)(dist.N_).withConfig({displayName:"Settings___StyledLink",componentId:"sc-1bbpfgm-0"})(["text-decoration:none;color:inherit;"]);const settings_stories={title:"page/Settings",component:pages_Settings},Default=()=>(0,jsx_runtime.jsx)(pages_Settings,{}),WithoutDescription=()=>(0,jsx_runtime.jsx)(SettingsItem,{label:"这是一个没有描述的设置项"}),WithDescription=()=>(0,jsx_runtime.jsx)(SettingsItem,{label:"这是一个有描述的设置项",description:"这是设置项描述"}),WithMenu=()=>(0,jsx_runtime.jsx)(SettingsItem,{label:"有子菜单的设置项",type:"menu"}),__namedExportsOrder=["Default","WithoutDescription","WithDescription","WithMenu"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Settings />",...Default.parameters?.docs?.source}}},WithoutDescription.parameters={...WithoutDescription.parameters,docs:{...WithoutDescription.parameters?.docs,source:{originalSource:'() => <SettingsItem label="这是一个没有描述的设置项" />',...WithoutDescription.parameters?.docs?.source}}},WithDescription.parameters={...WithDescription.parameters,docs:{...WithDescription.parameters?.docs,source:{originalSource:'() => <SettingsItem label="这是一个有描述的设置项" description="这是设置项描述" />',...WithDescription.parameters?.docs?.source}}},WithMenu.parameters={...WithMenu.parameters,docs:{...WithMenu.parameters?.docs,source:{originalSource:'() => <SettingsItem label="有子菜单的设置项" type="menu" />',...WithMenu.parameters?.docs?.source}}}},"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="primary",shape="circle",size="30px",bgColor,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.A,{type,shape,size,bgColor,...rest,children})}const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1}]},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},description:"",type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"rect"',computed:!1}]},required:!1},size:{defaultValue:{value:'"30px"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Button/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const shapeVariants={circle:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
`},"./src/components/Switch/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Switch});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Slider=styled_components_browser_esm.Ay.span`
  background-color: ${_ref=>{let{theme}=_ref;return theme.gray4}};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 16px;
  transition: 0.4s;

  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    top: 1px;
    left: 1px;
    background-color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 3px 1px rgba(0, 0, 0, 0.0510643);
    border-radius: 50%;
    transition: 0.4s;
  }
`,Checkbox=styled_components_browser_esm.Ay.input.attrs({type:"checkbox"})`
  width: 0;
  height: 0;
  opacity: 0;
  :checked + ${Slider} {
    background-color: ${_ref2=>{let{theme}=_ref2;return theme.primaryColor}};

    ::before {
      transform: translateX(20px);
    }
  }
`,style=styled_components_browser_esm.Ay.label`
  width: 51px;
  height: 31px;
  position: relative;
  display: inline-block;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Switch(_ref){let{children,...rest}=_ref;return(0,jsx_runtime.jsxs)(style,{...rest,children:[(0,jsx_runtime.jsx)(Checkbox,{}),(0,jsx_runtime.jsx)(Slider,{})]})}const components_Switch=Switch;Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Text/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const typeVariants={primary:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
`}}]);
//# sourceMappingURL=pages-Settings-settings-stories.e5a38072.iframe.bundle.js.map