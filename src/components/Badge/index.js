import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style.js";


function Badge({
    children,
    show = false,//是否显示徽章
    count = 0,//未读数
    showZero = false, //未读数为0的时候，是否展示徽章
    ...rest
                }){
    return (
        <StyledBadge
            variant={children ? 'dot': 'default'}
            show={show}
            count={count}
            showZero={showZero}
            {...rest}
        >
            {children || <Count>{count}</Count>}
        </StyledBadge>
    )
}

Badge.propsType = {
    show: PropTypes.bool,
    count: PropTypes.number,
    showZero: PropTypes.bool,
    children:  PropTypes.any,
}

export default Badge