---
to: src/components/<%= name %>/index.js
---
import React from "react";
import PropTypes from "prop-types";
import Styled<%= name %> from "./style.js";


function <%= name %>({
    children,
    ...rest
                }){
    return (
        <Styled<%= name %> {...rest}>
            {children}
        </Styled<%= name %>>
    )
}

<%= name %>.propsType = {
    children:  PropTypes.any
}

export default <%= name %>