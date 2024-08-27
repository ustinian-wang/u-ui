import styled, {css} from "styled-components";

const circleMixinFunc = color => css`
    content: "";
    display: block;
    position: absolute;
    height: 8px;
    width: 8px;
    -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
    background: ${color};
`

const StyledAvatar = styled.div`
    position: relative;
`;

const StatusIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 4px;
    &::before{
        content: "";
        display: block;
        position: absolute;
        height: 8px;
        width: 8px;
        -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
        transform: scale(2);
        background: #fff;
    }
    
    &::after{
        ${({theme})=>circleMixinFunc(theme.green)
    }
`;
const AvatarClip = styled.div`
    width: 48px;
    height: 48px;
    -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
    overflow: hidden;
`;
const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    object-position: center;
`;

export default StyledAvatar
export {StatusIcon, AvatarClip, AvatarImage}
