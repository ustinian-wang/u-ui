import React from 'react';
import NavBar, { MenuItem } from "./index.js";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";

export default {
    title: "organization/NavBar",
    component: NavBar
}

export const Default = ()=> <NavBar/>

export const Menu = ()=>{
    //如果我想访问主题中的颜色，但是不想创建styleComponent，怎么实现？
    //通过babel生成一个style-component组件 这里需要babel-plugin-macro插件的支持
    return (
        <div css={`
            background-color: ${({theme})=>theme.darkPurple};
            width: 100px;
        `}>
            <MenuItem showBadge active icon={faCommentDots}></MenuItem>
        </div>
    )
}