import styled, { css } from "styled-components";
import { circle } from "../../utils/mixins";
import theme from "../../theme";

//定义不同徽章的变体
const variants = {
    dot: css`
        position: relative;
        padding: 5px;
        &::after {
        display:${({ show })=>(show ?"block" : "none")};
        content: "";
        ${({ theme })=> circle(theme.red, "6px")}
        position: absolute;
        right: 0;
        top:0;
    `,
    default: css`
        ${ ( { theme } ) => circle( theme.red, "26px" ) }
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 18px 40px 0 rgba(0，0，0，0 .04), 0 6px 12px 0 rgba(0，0，0，0 .08);

        ${ ( { showZero, count } ) => !showZero && count === 0 && `visibility: hidden }`}
    `,
};

const Count = styled.div`
    font-size: ${(theme)=>theme.normal};
    color: white;
`;

const StyledBadge = styled.div`
    display: inline-block;
    //针对不同变体进行样式设置 
    ${({variant})=>variants[variant]}
`

export default StyledBadge

export {
    Count
}