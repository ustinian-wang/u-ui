"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[2615],{"./src/components/TitleBar/titleBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TitleBar/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI 组件/TitleBar",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <TitleBar />",...Default.parameters?.docs?.source}}}},"./src/assets/icons/options.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgOptions(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:26,height:6,viewBox:"0 0 26 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.9994 6C24.6562 6 25.9994 4.65685 25.9994 3C25.9994 1.34315 24.6562 0 22.9994 0C21.3425 0 19.9994 1.34315 19.9994 3C19.9994 4.65685 21.3425 6 22.9994 6Z",fill:"#292F4C"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9994 6C14.6562 6 15.9994 4.65685 15.9994 3C15.9994 1.34315 14.6562 0 12.9994 0C11.3425 0 9.99939 1.34315 9.99939 3C9.99939 4.65685 11.3425 6 12.9994 6Z",fill:"#292F4C"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.99939 6C4.65624 6 5.99939 4.65685 5.99939 3C5.99939 1.34315 4.65624 0 2.99939 0C1.34254 0 -0.000610352 1.34315 -0.000610352 3C-0.000610352 4.65685 1.34254 6 2.99939 6Z",fill:"#292F4C"})))}const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgOptions);__webpack_require__.p},"./src/components/Avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/style.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar(_ref){let{src,size="48px",status,statusIconSize="8px",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_style_js__WEBPACK_IMPORTED_MODULE_0__.Ay,{...rest,children:[status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.kW,{status,size:statusIconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.ks,{size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.BK,{src,alt:""})})]})}Avatar.propsType={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,status:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["online","offline"]),statusIconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"48px"',computed:!1},required:!1},statusIconSize:{defaultValue:{value:'"8px"',computed:!1},required:!1}}}},"./src/components/Avatar/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,BK:()=>AvatarImage,kW:()=>StatusIcon,ks:()=>AvatarClip});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_mixins__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mixins.js");const circleMixinFunc=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
`,__WEBPACK_DEFAULT_EXPORT__=StyledAvatar},"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="primary",shape="circle",size="30px",bgColor,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.A,{type,shape,size,bgColor,...rest,children})}const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1}]},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},description:"",type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"rect"',computed:!1}]},required:!1},size:{defaultValue:{value:'"30px"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Button/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const shapeVariants={circle:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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

`},"./src/components/Dropdown/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Dropdown/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Dropdown(_ref){let{children,content,align="right",...rest}=_ref;const[visible,setVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__.Ay,{onClick:()=>setVisible(!visible),...rest,children:[children,content&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.RZ,{align,visible,children:content})]})}const __WEBPACK_DEFAULT_EXPORT__=Dropdown;Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{align:{defaultValue:{value:'"right"',computed:!1},description:"",type:{name:"enum",value:[{value:'"top"',computed:!1},{value:'"left"',computed:!1},{value:'"bottom"',computed:!1},{value:'"right"',computed:!1}]},required:!1},children:{description:"",type:{name:"any"},required:!1},content:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Dropdown/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,RZ:()=>DropdownContainer,tJ:()=>DropdownItem});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),components_Seperator_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Seperator/style.js");const DropdownItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
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
`},"./src/components/Text/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_style_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(_ref){let{children,type="primary",size="normal",bold,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_1__.A,{type,size,bold,...rest,children})}Text.propsType={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,type:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["primary","secondary","danger"]),size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["xxsmall","xsmall","small","normal","medium","large","xlarge","xxlarge"]),bold:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};const __WEBPACK_DEFAULT_EXPORT__=Text;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{type:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'normal'",computed:!1},required:!1}}}},"./src/components/Text/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const typeVariants={primary:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
//# sourceMappingURL=components-TitleBar-titleBar-stories.1d339b47.iframe.bundle.js.map