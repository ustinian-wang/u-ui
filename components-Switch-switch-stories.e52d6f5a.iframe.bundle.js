"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[2681],{"./src/components/Switch/switch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Switch/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"component/Input/Switch",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:"1vw"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{})}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <div style={{\n  padding: "1vw"\n}}>\n    <Switch />\n  </div>',...Default.parameters?.docs?.source}}}},"./src/components/Switch/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Switch});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Slider=styled_components_browser_esm.Ay.span`
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
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Switch(_ref){let{children,...rest}=_ref;return(0,jsx_runtime.jsxs)(style,{...rest,children:[(0,jsx_runtime.jsx)(Checkbox,{}),(0,jsx_runtime.jsx)(Slider,{})]})}const components_Switch=Switch;Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{children:{description:"",type:{name:"any"},required:!1}}}}}]);
//# sourceMappingURL=components-Switch-switch-stories.e52d6f5a.iframe.bundle.js.map