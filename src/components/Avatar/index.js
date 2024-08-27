import face1 from "../../assets/images/face-male-1.jpg";
import StyledAvatar, {AvatarClip, AvatarImage, StatusIcon} from "./style.js";

function Avatar(){
    return (
        <StyledAvatar>
            <StatusIcon/>
            <AvatarClip>
                <AvatarImage src={face1} alt=""/>
            </AvatarClip>
        </StyledAvatar>
    )
}

Avatar.propsType = {

}

export default Avatar