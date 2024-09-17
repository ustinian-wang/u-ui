"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[5705],{"./src/components/NoteList/noteList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>noteList_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Notes=styled_components_browser_esm.Ay.div`
  & > * {
    margin: 8px 0;
  }
  margin-top: -8px;
`,style=styled_components_browser_esm.Ay.div``;var FilterList=__webpack_require__("./src/components/FilterList/index.js"),NoteCard=__webpack_require__("./src/components/NoteCard/index.js"),useStaggeredList=__webpack_require__("./src/hooks/useStaggeredList.js"),react_spring_modern=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs");const notes=[{id:1,image:__webpack_require__("./src/assets/images/note-1.jpg"),title:"学习英语笔记",excerpt:"Hello everyone！This is my first note!",publishedAt:"3 小时之前"},{id:2,image:__webpack_require__.p+"42222ccc26381d2c36b8.jpg",title:"学习后端笔记",excerpt:"学习了 Node.js + Express + Mongodb 组件开发 api",publishedAt:"2020-09-01"},{id:3,image:__webpack_require__.p+"c132f6dedad196ecce49.jpg",title:"学习移动端笔记",excerpt:"Kotlin开发 android app 还可以吧",publishedAt:"2020-08-30"},{id:4,image:__webpack_require__.p+"f73a80a097236b064edc.jpg",title:"学习大数据笔记",excerpt:"大数据服务器集群的组建十分考验系统设计能力",publishedAt:"2020-08-28"},{id:5,image:__webpack_require__.p+"7aa60be79415f462a2c8.jpg",title:"学习人工智能笔记",excerpt:"学完人工智能感觉自己的数学智商需要提高",publishedAt:"2020-08-26"},{id:6,image:__webpack_require__.p+"14cc3daf59e916c04637.jpg",title:"学习数据挖掘笔记",excerpt:"KNN 和 Naive Bays 感觉好简单！",publishedAt:"2020-08-24"},{id:7,image:__webpack_require__.p+"898c3abd7fd4f2085cec.jpg",title:"学习机器学习笔记",excerpt:"机器真的能到人脑的程度吗？我并不这么认为",publishedAt:"2020-08-22"}];var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NoteList(_ref){let{children,...rest}=_ref;const trailAnimes=(0,useStaggeredList.A)(10);return(0,jsx_runtime.jsx)(style,{...rest,children:(0,jsx_runtime.jsx)(FilterList.A,{options:["最新笔记优先","有改动的优先"],actionLabel:"添加笔记",children:(0,jsx_runtime.jsx)(Notes,{children:notes.map(((note,i)=>(0,jsx_runtime.jsx)(react_spring_modern.CS.div,{style:trailAnimes[i],children:(0,jsx_runtime.jsx)(NoteCard.A,{note},note.id)},note.id)))})})})}const components_NoteList=NoteList;NoteList.__docgenInfo={description:"",methods:[],displayName:"NoteList",props:{children:{description:"",type:{name:"any"},required:!1}}};const noteList_stories={title:"页面组件/NoteList",component:components_NoteList},Default=()=>(0,jsx_runtime.jsx)(components_NoteList,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <NoteList />",...Default.parameters?.docs?.source}}}},"./src/components/Heading/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Heading});__webpack_require__("./node_modules/react/index.js");const style=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div``;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Heading(_ref){let{children,level,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{as:`h${level}`,...rest,children})}const components_Heading=Heading;Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{description:"",type:{name:"any"},required:!1},level:{description:"",type:{name:"enum",value:[{value:"1",computed:!1},{value:"2",computed:!1},{value:"3",computed:!1},{value:"4",computed:!1},{value:"5",computed:!1},{value:"6",computed:!1}]},required:!1}}}},"./src/components/NoteCard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_NoteCard});var note_1=__webpack_require__("./src/assets/images/note-1.jpg"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),Heading=__webpack_require__("./src/components/Heading/index.js"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),mixins=__webpack_require__("./src/utils/mixins.js");const NoteImage=styled_components_browser_esm.Ay.img`
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
        
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Paragraph(_ref){let{children,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsx)(Paragraph_style,{as:"p",ellipsis,...rest,children})}Paragraph.propsType={children:prop_types_default().any};const components_Paragraph=Paragraph;Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph"}},"./src/hooks/useStaggeredList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useStaggeredList});var react_spring__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs");function useStaggeredList(number){return(0,react_spring__WEBPACK_IMPORTED_MODULE_0__.wR)(number,{transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(-50px, 0px, 0px)"},config:{mass:.8,tension:280,friction:20}})}},"./src/utils/mixins.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nr:()=>card,UB:()=>activeBar,n1:()=>circle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const circle=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
//# sourceMappingURL=components-NoteList-noteList-stories.31542636.iframe.bundle.js.map