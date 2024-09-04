import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style.js";


function Paragraph({
    children,
    ellipsis,
    ...rest
                }){
    return (
        <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
            {children}
        </StyledParagraph>
    )
}

Paragraph.propsType = {
    children:  PropTypes.any
}

export default Paragraph