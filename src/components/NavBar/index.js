import React from "react";
import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style.js";
import Badge from "../Badge";
import Avatar from "../Avatar";
import profileImage from "../../assets/images/face-male-1.jpg"
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, matchPath } from "react-router-dom";


function NavBar({
    ...rest
                }){
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status="online"></Avatar><MenuItems>
            <MenuItem to="/" showBadge icon={faCommentDots} />
            <MenuItem to="/contacts" icon={faUsers} />
            <MenuItem to="/files" icon={faFolder} />
            <MenuItem to="/notes" icon={faStickyNote} />
            <MenuItem icon={faEllipsisH} />
            <MenuItem
                to="/settings"
                icon={faCog}
                css={`
                    align-self: end;
                  `}
            />
        </MenuItems>
        </StyledNavBar>
    )
}

function MenuItem({ to = "#", icon, showBadge, ...rest }){
    // get current location
    const loc = useLocation();
    // check current menu is active
    const active = !!matchPath(
        {
            path: to,
            end: true,
        },
        loc.pathname
    );
    return (
        <StyledMenuItem active={active} {...rest}>
            <Link to={to}>
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}></MenuIcon>
                </Badge>
            </Link>
        </StyledMenuItem>
    )
}

NavBar.propsType = {
}

export {MenuItem}

export default NavBar