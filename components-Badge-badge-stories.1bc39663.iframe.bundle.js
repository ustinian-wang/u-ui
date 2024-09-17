"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[7811],{"./src/components/Badge/badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DotVariant:()=>DotVariant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Badge/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"component/Badge",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{count:5}),DotVariant=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{show:!0,variant:"dot",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.g,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.Bep,style:{fontSize:"24px"}})}),__namedExportsOrder=["Default","DotVariant"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Badge count={5} />",...Default.parameters?.docs?.source}}},DotVariant.parameters={...DotVariant.parameters,docs:{...DotVariant.parameters?.docs,source:{originalSource:'() => {\n  return <Badge show variant="dot">\n            <FontAwesomeIcon icon={faCommentDots} style={{\n      fontSize: "24px"\n    }}></FontAwesomeIcon>\n        </Badge>;\n}',...DotVariant.parameters?.docs?.source}}}},"./src/components/Badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Badge});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),mixins=__webpack_require__("./src/utils/mixins.js");__webpack_require__("./src/theme.js");const variants={dot:styled_components_browser_esm.AH`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge(_ref){let{children,show=!1,count=0,showZero=!1,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{variant:children?"dot":"default",show,count,showZero,...rest,children:children||(0,jsx_runtime.jsx)(Count,{children:count})})}Badge.propsType={show:prop_types_default().bool,count:prop_types_default().number,showZero:prop_types_default().bool,children:prop_types_default().any};const components_Badge=Badge;Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{show:{defaultValue:{value:"false",computed:!1},required:!1},count:{defaultValue:{value:"0",computed:!1},required:!1},showZero:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/utils/mixins.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nr:()=>card,UB:()=>activeBar,n1:()=>circle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const circle=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
`}}}]);
//# sourceMappingURL=components-Badge-badge-stories.1bc39663.iframe.bundle.js.map