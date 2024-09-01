import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style.js";
import Badge from "../Badge";
import Avatar from "../Avatar";
import profileImage from "../../assets/images/face-male-1.jpg"
import { faCommentDots, faDog, faEllipsisH, faFolder, faStickyNote, faUsers } from "@fortawesome/free-solid-svg-icons";


function NavBar({
    ...rest
                }){
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status="online"></Avatar>
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots}></MenuItem>
                <MenuItem icon={faUsers}></MenuItem>
                <MenuItem icon={faFolder}></MenuItem>
                <MenuItem icon={faStickyNote}></MenuItem>
                <MenuItem icon={faEllipsisH}></MenuItem>
                <MenuItem icon={faDog} css={`align-self: end `}></MenuItem>
            </MenuItems>
        </StyledNavBar>
    )
}

function MenuItem({icon, active, showBadge, ...rest}){
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}></MenuIcon>
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

NavBar.propsType = {
}

export {MenuItem}

export default NavBar