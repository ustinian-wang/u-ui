"use strict";(self.webpackChunk_ustinian_wang_u_ui=self.webpackChunk_ustinian_wang_u_ui||[]).push([[3908],{"./src/components/Avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/style.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar(_ref){let{src,size="48px",status,statusIconSize="8px",...rest}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_style_js__WEBPACK_IMPORTED_MODULE_0__.Ay,{...rest,children:[status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.kW,{status,size:statusIconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.ks,{size,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_style_js__WEBPACK_IMPORTED_MODULE_0__.BK,{src,alt:""})})]})}Avatar.propsType={src:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,status:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["online","offline"]),statusIconSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string};const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"48px"',computed:!1},required:!1},statusIconSize:{defaultValue:{value:'"8px"',computed:!1},required:!1}}}},"./src/components/Avatar/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,BK:()=>AvatarImage,kW:()=>StatusIcon,ks:()=>AvatarClip});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_mixins__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mixins.js");const circleMixinFunc=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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

`},"./src/components/Emoji/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Emoji});__webpack_require__("./node_modules/react/index.js");const style=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.span``;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Emoji(_ref){let{children,label,...rest}=_ref;return(0,jsx_runtime.jsx)(style,{role:"img","aria-label":label,...rest,children})}const components_Emoji=Emoji;Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji",props:{children:{description:"",type:{name:"any"},required:!1},label:{description:"",type:{name:"string"},required:!1}}}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Icon});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),style=__webpack_require__("./src/components/Icon/style.js"),Button=__webpack_require__("./src/components/Button/index.js"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SocialIcon(_ref){let{icon,bgColor,href,...rest}=_ref;return(0,jsx_runtime.jsx)(Button.A,{size:"30px",bgColor,onClick:()=>href&&window.open(href,"_blank"),...rest,children:(0,jsx_runtime.jsx)(index_es.g,{icon,style:{fontSize:"16px"}})})}const Icon_SocialIcon=SocialIcon;function Icon(_ref){let{icon:IconComponent,width=24,height=24,color,opacity,...rest}=_ref;return(0,jsx_runtime.jsx)(style.A,{color,opacity,...rest,children:IconComponent&&(0,jsx_runtime.jsx)(IconComponent,{width,height})})}SocialIcon.__docgenInfo={description:"",methods:[],displayName:"SocialIcon",props:{icon:{description:"",type:{name:"elementType"},required:!1},bgColor:{description:"",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1}}},Icon.propsType={icon:prop_types_default().element,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),color:prop_types_default().string,opacity:prop_types_default().number},Icon.Social=Icon_SocialIcon;const components_Icon=Icon;Icon.__docgenInfo={description:"",methods:[{name:"Social",docblock:null,modifiers:["static"],params:[{name:"{ icon, bgColor, href, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Icon",props:{width:{defaultValue:{value:"24",computed:!1},required:!1},height:{defaultValue:{value:"24",computed:!1},required:!1}}}},"./src/components/Icon/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
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
`},"./src/pages/Profile/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>pages_Profile});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");const arrowRight=__webpack_require__.p+"static/media/arrowRight.68b2befcb48963353961fc8c5c7118b2.svg";var Icon=__webpack_require__("./src/components/Icon/index.js");const SocialLinks=styled_components_browser_esm.Ay.div`
  & > * {
    margin: 0 9px;
  }
`,ContactSection=styled_components_browser_esm.Ay.section`
  display: grid;
  row-gap: 18px;
`,AlbumSection=styled_components_browser_esm.Ay.section``,AlbumTitle=styled_components_browser_esm.Ay.div`
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: ${_ref=>{let{theme}=_ref;return theme.normal}};
    color: ${_ref2=>{let{theme}=_ref2;return theme.primaryColor}};
    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`,Album=styled_components_browser_esm.Ay.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`,Photo=styled_components_browser_esm.Ay.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`,CloseIcon=(0,styled_components_browser_esm.Ay)(Icon.A).attrs({opacity:.3})`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`,style=styled_components_browser_esm.Ay.div`
  display: grid;
  align-content: start;
  justify-content: center;
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`;var face_male_3=__webpack_require__("./src/assets/images/face-male-3.jpg"),Avatar=__webpack_require__("./src/components/Avatar/index.js"),Paragraph=__webpack_require__("./src/components/Paragraph/index.js"),Emoji=__webpack_require__("./src/components/Emoji/index.js"),free_brands_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-brands-svg-icons/index.mjs"),Seperator=__webpack_require__("./src/components/Seperator/index.js"),Text=__webpack_require__("./src/components/Text/index.js");const photo1_namespaceObject=__webpack_require__.p+"67a1e34ad86cae22f97e.jpg",photo2_namespaceObject=__webpack_require__.p+"b0461656b81f134b0af8.jpg",photo3_namespaceObject=__webpack_require__.p+"c10c01a94e8925b3b62d.jpg";var cross_path;function cross_extends(){return cross_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},cross_extends.apply(null,arguments)}function SvgCross(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",cross_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,cross_path||(cross_path=react.createElement("path",{opacity:.12,d:"M19.3239 3.93931L13.264 9.99986L19.3239 16.0601C20.2253 16.9619 20.2253 18.4225 19.3239 19.3243C18.8735 19.7746 18.2831 20 17.6929 20C17.1017 20 16.5112 19.775 16.0612 19.3243L9.99999 13.2633L3.93927 19.3242C3.48896 19.7746 2.89843 19.9999 2.30774 19.9999C1.71721 19.9999 1.12709 19.7749 0.676375 19.3242C-0.224999 18.4229 -0.224999 16.9621 0.676375 16.0601L6.73606 9.99981L0.676031 3.93931C-0.225344 3.03793 -0.225344 1.5769 0.676031 0.675521C1.57723 -0.225174 3.03738 -0.225174 3.93893 0.675521L9.99994 6.73607L16.0605 0.675521C16.9622 -0.225174 18.4225 -0.225174 19.3236 0.675521C20.2253 1.5769 20.2253 3.03793 19.3239 3.93931Z",fill:"#292F4C"})))}const cross_ForwardRef=react.forwardRef(SvgCross);__webpack_require__.p;var Button=__webpack_require__("./src/components/Button/index.js"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Profile(_ref){let{showEditBtn,showCloseIcon=!0,onCloseClick,onEdit,status,children,...rest}=_ref;return console.log("jser Profile",free_brands_svg_icons.g5c,free_brands_svg_icons.Vz1,free_brands_svg_icons.IAJ),(0,jsx_runtime.jsxs)(style,{...rest,children:[showCloseIcon&&(0,jsx_runtime.jsx)(CloseIcon,{icon:cross_ForwardRef,onClick:onCloseClick}),(0,jsx_runtime.jsx)(_StyledAvatar,{src:face_male_3,size:"160px",status,statusIconSize:"25px"}),showEditBtn&&(0,jsx_runtime.jsx)(_StyledButton,{size:"52px",onClick:onEdit,children:(0,jsx_runtime.jsx)(_StyledFontAwesomeIcon,{icon:free_solid_svg_icons.hpd})}),(0,jsx_runtime.jsx)(_StyledParagraph,{size:"xlarge",children:"慕容天宇"}),(0,jsx_runtime.jsx)(_StyledParagraph2,{size:"medium",type:"secondary",children:"北京市 朝阳区"}),(0,jsx_runtime.jsxs)(_StyledParagraph3,{children:["帮助客户构建网站，并协助在社交网站上进行推广"," ",(0,jsx_runtime.jsx)(Emoji.A,{label:"fire",children:"🔥"})]}),(0,jsx_runtime.jsxs)(SocialLinks,{children:[(0,jsx_runtime.jsx)(Icon.A.Social,{icon:free_brands_svg_icons.g5c,bgColor:"#F06767",href:"http://www.weibo.com"}),(0,jsx_runtime.jsx)(Icon.A.Social,{icon:free_brands_svg_icons.Vz1,bgColor:"black"}),(0,jsx_runtime.jsx)(Icon.A.Social,{icon:free_brands_svg_icons.IAJ,bgColor:"#2483C0"})]}),(0,jsx_runtime.jsx)(_StyledSeperator,{}),(0,jsx_runtime.jsxs)(ContactSection,{children:[(0,jsx_runtime.jsx)(Description,{label:"联系电话",children:"+86 18688888888"}),(0,jsx_runtime.jsx)(Description,{label:"电子邮件",children:"admin@fh.com"}),(0,jsx_runtime.jsx)(Description,{label:"个人网站",children:"https://zxuqian.cn"})]}),(0,jsx_runtime.jsx)(_StyledSeperator2,{}),(0,jsx_runtime.jsxs)(AlbumSection,{children:[(0,jsx_runtime.jsxs)(AlbumTitle,{children:[(0,jsx_runtime.jsx)(Text.A,{type:"secondary",children:"相册（31）"}),(0,jsx_runtime.jsx)("a",{children:"查看全部"})]}),(0,jsx_runtime.jsxs)(Album,{children:[(0,jsx_runtime.jsx)(Photo,{src:photo1_namespaceObject,alt:""}),(0,jsx_runtime.jsx)(Photo,{src:photo2_namespaceObject,alt:""}),(0,jsx_runtime.jsx)(Photo,{src:photo3_namespaceObject,alt:""})]})]})]})}function Description(_ref2){let{label,children}=_ref2;return(0,jsx_runtime.jsxs)(Paragraph.A,{children:[(0,jsx_runtime.jsxs)(Text.A,{type:"secondary",children:[label,"："]}),(0,jsx_runtime.jsx)(Text.A,{children})]})}const pages_Profile=Profile;Profile.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{showCloseIcon:{defaultValue:{value:"true",computed:!1},required:!1},children:{description:"",type:{name:"any"},required:!1}}};var _StyledAvatar=(0,styled_components_browser_esm.Ay)(Avatar.A)`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `,_StyledButton=(0,styled_components_browser_esm.Ay)(Button.A)`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `,_StyledFontAwesomeIcon=(0,styled_components_browser_esm.Ay)(index_es.g)`
              font-size: 24px;
            `,_StyledParagraph=(0,styled_components_browser_esm.Ay)(Paragraph.A)`
          margin-bottom: 12px;
        `,_StyledParagraph2=(0,styled_components_browser_esm.Ay)(Paragraph.A)`
          margin-bottom: 18px;
        `,_StyledParagraph3=(0,styled_components_browser_esm.Ay)(Paragraph.A)`
          margin-bottom: 26px;
        `,_StyledSeperator=(0,styled_components_browser_esm.Ay)(Seperator.A)`
          margin: 30px 0;
        `,_StyledSeperator2=(0,styled_components_browser_esm.Ay)(Seperator.A).withConfig({displayName:"Profile___StyledSeperator2",componentId:"sc-vkg40k-0"})(["margin:30px 0;"])},"./src/utils/mixins.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nr:()=>card,UB:()=>activeBar,n1:()=>circle});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const circle=function(color){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8px";return styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
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
//# sourceMappingURL=3908.ba6f030b.iframe.bundle.js.map