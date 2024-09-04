import styled, {css} from "styled-components";
import StyledText from "../Text/style.js";

const StyledParagraph=styled(StyledText)`
    ${({ ellipsis })=>
    ellipsis &&
        css`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `
    }
        
`

export default StyledParagraph
