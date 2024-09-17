"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[2495],{"./src/components/Popover/popover.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithOffset:()=>WithOffset,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Popover/index.js"),components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI 组件/Popover",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{content:"Hello!",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{shape:"rect",children:"点我"})})}),WithOffset=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{offset:{x:"-25%"},content:"Hello!",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{shape:"rect",children:"点我"})})}),__namedExportsOrder=["Default","WithOffset"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <div style={{\n  display: "flex",\n  justifyContent: "center",\n  alignItems: "center",\n  height: "50vh"\n}}>\n    <Popover content="Hello!">\n      <Button shape="rect">点我</Button>\n    </Popover>\n  </div>',...Default.parameters?.docs?.source}}},WithOffset.parameters={...WithOffset.parameters,docs:{...WithOffset.parameters?.docs,source:{originalSource:'() => <div style={{\n  display: "flex",\n  justifyContent: "center",\n  alignItems: "center",\n  height: "50vh"\n}}>\n    <Popover offset={{\n    x: "-25%"\n  }} content={"Hello!"}>\n      <Button shape="rect">点我</Button>\n    </Popover>\n  </div>',...WithOffset.parameters?.docs?.source}}}},"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/style.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="primary",shape="circle",size="30px",bgColor,...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_style__WEBPACK_IMPORTED_MODULE_1__.A,{type,shape,size,bgColor,...rest,children})}const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1}]},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},description:"",type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"rect"',computed:!1}]},required:!1},size:{defaultValue:{value:'"30px"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Button/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const shapeVariants={circle:styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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

`},"./src/components/Popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Popover});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Content=styled_components_browser_esm.Ay.div`
  background: ${_ref=>{let{theme}=_ref;return theme.background}};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;

  bottom: calc(100% + 12px);

  ${_ref2=>{let{offset}=_ref2;return offset&&`transform: translate(${offset.x||0}, ${offset.y||0})`}};
  ${_ref3=>{let{visible}=_ref3;return!visible&&"display: none"}};
`,Triangle=styled_components_browser_esm.Ay.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: ${_ref4=>{let{theme}=_ref4;return theme.background}} transparent transparent
    transparent;
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);

  ${_ref5=>{let{offset}=_ref5;return offset&&`transform: translateY(${offset.y||0});`}}
  ${_ref6=>{let{visible}=_ref6;return!visible&&"display: none"}};
`,Target=styled_components_browser_esm.Ay.div``,style=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  position: relative;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Popover(_ref){let{children,content,offset={},onVisible,onHide,...rest}=_ref;const[visible,setVisible]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(style,{onClick:()=>{visible?(setVisible(!1),onHide&&onHide()):(setVisible(!0),onVisible&&onVisible())},...rest,children:[(0,jsx_runtime.jsx)(Content,{visible,offset,children:content}),(0,jsx_runtime.jsx)(Triangle,{visible,offset}),(0,jsx_runtime.jsx)(Target,{children})]})}const components_Popover=Popover;Popover.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{offset:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{x:{name:"string",required:!1},y:{name:"string",required:!1}}},required:!1},children:{description:"",type:{name:"any"},required:!1},content:{description:"",type:{name:"any"},required:!1},onVisible:{description:"",type:{name:"func"},required:!1},onHide:{description:"",type:{name:"func"},required:!1}}}}}]);
//# sourceMappingURL=components-Popover-popover-stories.4544f492.iframe.bundle.js.map