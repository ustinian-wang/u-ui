"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[7325],{"./src/components/NoteCard/noteCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NoteCard/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"component/NoteCard",component:___WEBPACK_IMPORTED_MODULE_1__.A},Default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <NoteCard />",...Default.parameters?.docs?.source}}}},"./src/components/Heading/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Heading});__webpack_require__("./node_modules/react/index.js");const style=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div``;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Heading(_ref){let{children,level,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{as:`h${level}`,...rest,children})}const components_Heading=Heading;Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{description:"",type:{name:"any"},required:!1},level:{description:"",type:{name:"enum",value:[{value:"1",computed:!1},{value:"2",computed:!1},{value:"3",computed:!1},{value:"4",computed:!1},{value:"5",computed:!1},{value:"6",computed:!1}]},required:!1}}}},"./src/components/NoteCard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_NoteCard});var note_1=__webpack_require__("./src/assets/images/note-1.jpg"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),Heading=__webpack_require__("./src/components/Heading/index.js"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),mixins=__webpack_require__("./src/utils/mixins.js");const NoteImage=styled_components_browser_esm.Ay.img`
  grid-area: image;
  width: 60px;
  height: 60px;
  object-fit: cover;
`,NoteTitle=(0,styled_components_browser_esm.Ay)(Heading.A).attrs({level:2})`
  grid-area: title;
  align-self: center;
`,NoteExcerpt=(0,styled_components_browser_esm.Ay)(Paragraph.A).attrs({size:"small"})`
  grid-area: excerpt;
  align-self: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,NotePublishTime=(0,styled_components_browser_esm.Ay)(Paragraph.A).attrs({type:"secondary"})`
  grid-area: time;
  justify-self: end;
`,style=styled_components_browser_esm.Ay.div`
  ${(0,mixins.Nr)()}
  display: grid;
  grid-template-areas:
    "image title time"
    "image excerpt excerpt";
  grid-template-columns: 72px 2fr 1fr;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NoteCard(_ref){let{note,children,...rest}=_ref;return(0,jsx_runtime.jsxs)(style,{...rest,children:[(0,jsx_runtime.jsx)(NoteImage,{src:(null==note?void 0:note.image)||note_1}),(0,jsx_runtime.jsx)(NoteTitle,{children:null==note?void 0:note.title}),(0,jsx_runtime.jsx)(NoteExcerpt,{children:null==note?void 0:note.excerpt}),(0,jsx_runtime.jsx)(NotePublishTime,{children:null==note?void 0:note.publishedAt})]})}const components_NoteCard=NoteCard;NoteCard.__docgenInfo={description:"",methods:[],displayName:"NoteCard",props:{children:{description:"",type:{name:"any"},required:!1}}}},"./src/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Paragraph});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/components/Text/style.js");const Paragraph_style=(0,styled_components_browser_esm.Ay)(style.A)`
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
`}},"./src/assets/images/note-1.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"c7cf4a776913f1056e96.jpg"}}]);
//# sourceMappingURL=components-NoteCard-noteCard-stories.19548559.iframe.bundle.js.map