"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[9239],{"./src/components/VideoCall/videoCall.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>videoCall_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/components/Button/index.js"),Avatar=__webpack_require__("./src/components/Avatar/index.js"),mixins=__webpack_require__("./src/utils/mixins.js");const Actions=styled_components_browser_esm.Ay.div`
  grid-area: actions / title;
  align-self: end;
  justify-self: center;

  display: grid;
  grid-template-columns: 90px 90px 90px;
`,Action=(0,styled_components_browser_esm.Ay)(Button.A).attrs({size:"64px"})`
  font-size: 32px;
  color: white;

  box-shadow: none;
  background: ${_ref=>{let{theme,type}=_ref;return"hangoff"===type?theme.red2:theme.grayDark2}};
`,Self=(0,styled_components_browser_esm.Ay)(Avatar.A)`
  grid-area: self;
  align-self: end;
  justify-self: end;
`,Minimize=(0,styled_components_browser_esm.Ay)(Button.A)`
  justify-self: end;
  grid-area: title;
  background-color: ${_ref2=>{let{theme}=_ref2;return theme.gray3}};
  padding: 0;
  width: 62px;
  height: 62px;
  font-size: 46px;
`,VideoCallAlert=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-areas:
    "avatar info info"
    "avatar action icon";
  row-gap: 5px;
  column-gap: 10px;
  align-items: center;
  width: max-content;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${_ref3=>{let{theme}=_ref3;return theme.gray4}};
  z-index: 200;
  ${mixins.Nr}
`,style=styled_components_browser_esm.Ay.div`
  height: 100%;
  padding: 20px;
  padding-bottom: 40px;
  background-image: url(${_ref4=>{let{src}=_ref4;return src}});
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-areas:
    "title title"
    "actions self";
`,video_caller_namespaceObject=__webpack_require__.p+"1d57ca4a244b7c0ae133.jpg";var face_male_1=__webpack_require__("./src/assets/images/face-male-1.jpg"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function VideoCall(_ref){let{children,onHangOffClicked,...rest}=_ref;const[fullScreen,setFullScreen]=(0,react.useState)(!0);return fullScreen?(0,jsx_runtime.jsxs)(style,{src:video_caller_namespaceObject,...rest,children:[(0,jsx_runtime.jsx)(Minimize,{shape:"rect",onClick:()=>setFullScreen(!1),children:(0,jsx_runtime.jsx)(index_es.g,{icon:free_solid_svg_icons.rMD})}),(0,jsx_runtime.jsxs)(Actions,{children:[(0,jsx_runtime.jsx)(Action,{children:(0,jsx_runtime.jsx)(index_es.g,{icon:free_solid_svg_icons.A54})}),(0,jsx_runtime.jsx)(Action,{type:"hangoff",children:(0,jsx_runtime.jsx)(index_es.g,{icon:free_solid_svg_icons.Jo,onClick:onHangOffClicked})}),(0,jsx_runtime.jsx)(Action,{children:(0,jsx_runtime.jsx)(index_es.g,{icon:free_solid_svg_icons.PKk})})]}),(0,jsx_runtime.jsx)(Self,{src:face_male_1,size:"140px"})]}):(0,jsx_runtime.jsxs)(VideoCallAlert,{children:[(0,jsx_runtime.jsx)(_StyledAvatar,{src:face_male_1}),(0,jsx_runtime.jsx)(_StyledParagraph,{size:"medium",children:"正在跟 李铭浩 进行视频通话"}),(0,jsx_runtime.jsx)(_StyledParagraph2,{type:"secondary",onClick:()=>setFullScreen(!0),children:"点击切换全屏"}),(0,jsx_runtime.jsx)(_StyledFontAwesomeIcon,{icon:free_solid_svg_icons.n2W})]})}const components_VideoCall=VideoCall;VideoCall.__docgenInfo={description:"",methods:[],displayName:"VideoCall",props:{children:{description:"",type:{name:"any"},required:!1}}};var _StyledAvatar=(0,styled_components_browser_esm.Ay)(Avatar.A)`
            grid-area: avatar;
          `,_StyledParagraph=(0,styled_components_browser_esm.Ay)(Paragraph.A)`
            grid-area: info;
          `,_StyledParagraph2=(0,styled_components_browser_esm.Ay)(Paragraph.A)`
            grid-area: action;
            cursor: pointer;
          `,_StyledFontAwesomeIcon=(0,styled_components_browser_esm.Ay)(index_es.g).withConfig({displayName:"VideoCall___StyledFontAwesomeIcon",componentId:"sc-10hedrh-0"})(["grid-area:icon;font-size:20px;justify-self:end;opacity:0.3;"]);const videoCall_stories={title:"organization/VideoCall",component:components_VideoCall},Default=()=>(0,jsx_runtime.jsx)("div",{style:{height:"100vh"},children:(0,jsx_runtime.jsx)(components_VideoCall,{})}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <div style={{\n  height: "100vh"\n}}>\n    <VideoCall />\n  </div>',...Default.parameters?.docs?.source}}}},"./src/components/Avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/style.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar(_ref){let{src,size="48px",status,statusIconSize="8px",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_style_js__WEBPACK_IMPORTED_MODULE_0__.Ay,{...rest,children:[status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.kW,{status,size:statusIconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.ks,{size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.BK,{src,alt:""})})]})}Avatar.propsType={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,status:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["online","offline"]),statusIconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"48px"',computed:!1},required:!1},statusIconSize:{defaultValue:{value:'"8px"',computed:!1},required:!1}}}},"./src/components/Avatar/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,BK:()=>AvatarImage,kW:()=>StatusIcon,ks:()=>AvatarClip});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_mixins__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mixins.js");const circleMixinFunc=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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

`},"./src/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Paragraph});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Text/style.js");const Paragraph_style=(0,styled_components_browser_esm.Ay)(style.A)`
    ${_ref=>{let{ellipsis}=_ref;return ellipsis&&styled_components_browser_esm.AH`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `}}
        
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph(_ref){let{children,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsx)(Paragraph_style,{as:"p",ellipsis,...rest,children})}Paragraph.propsType={children:prop_types_default().any};const components_Paragraph=Paragraph;Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"}},"./src/components/Text/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const typeVariants={primary:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
//# sourceMappingURL=components-VideoCall-videoCall-stories.09350985.iframe.bundle.js.map