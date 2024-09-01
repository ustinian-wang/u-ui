import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "../../utils/mixins";
import StyledAvatar, { StatusIcon } from "../Avatar/style";

const StyledMenuItem = styled.div`
  & > a{
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${activeBar()};
    //为了后面设置交互动画使用的
    ${({active})=>(active?"":`&::before, &::after{height:0}`)}
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
    color: white;
        font-size: 24px;
        opacity: ${({active})=>active ? 1 : 0.3};
`;


const StyledNavBar = styled.div`
    display: grid;
    grid-template-rows: 1fr 4fr;
    width: 100px;
    height: 100vh;
    background-color: ${({theme})=>theme.darkPurple};
    padding: 30px 0;
    
    //使用头像类名，对样式进行覆盖
    ${StyledAvatar} {
        // 这个不需要父容器，就可以把自己居中了
        justify-self: center;
        // 对头像的状态图标也进行覆盖
        ${StatusIcon} {
            &::before {
                background-color: ${({theme})=>theme.darkPurple};
            }
        }
    }
`;

//菜单项样式
const MenuItems = styled.div`
    display: grid;
    grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

export default StyledNavBar

export {MenuIcon, StyledMenuItem, MenuItems}