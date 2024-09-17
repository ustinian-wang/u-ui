"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[4975],{"./src/components/Paragraph/paragraph.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Ellipsis:()=>Ellipsis,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Paragraph/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"排版/Paragraph",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{children:"这是一个段落"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{children:"这是一个段落"})]}),Ellipsis=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{ellipsis:!0,children:"这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落"}),__namedExportsOrder=["Default","Ellipsis"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <React.Fragment>\n        <Paragraph>这是一个段落</Paragraph>\n        <Paragraph>这是一个段落</Paragraph>\n    </React.Fragment>",...Default.parameters?.docs?.source}}},Ellipsis.parameters={...Ellipsis.parameters,docs:{...Ellipsis.parameters?.docs,source:{originalSource:"() => <Paragraph ellipsis>这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落</Paragraph>",...Ellipsis.parameters?.docs?.source}}}},"./src/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Paragraph});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Text/style.js");const Paragraph_style=(0,styled_components_browser_esm.Ay)(style.A)`
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
`}}]);
//# sourceMappingURL=components-Paragraph-paragraph-stories.e67e7899.iframe.bundle.js.map