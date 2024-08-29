import StyledAvatar, {AvatarClip, AvatarImage, StatusIcon} from "./style.js";
import PropTypes from "prop-types";

function Avatar({
    src,
    size="48px",
    status,
    statusIconSize="8px",
    ...rest
                }){
    return (
        <StyledAvatar {...rest}>
            {(status &&
                <StatusIcon status={status} size={statusIconSize}/>
            )}
            <AvatarClip size={size}>
                <AvatarImage src={src} alt=""/>
            </AvatarClip>
        </StyledAvatar>
    )
}

Avatar.propsType = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(["online", "offline"]),
    statusIconSize: PropTypes.string
}

export default Avatar