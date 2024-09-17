import React from 'react';
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faFolder, faStickyNote } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "component/Icon", component: Icon
}

export const Default = () => <Icon icon={ SmileIcon }/>

export const CustomColor = () => {
    return <Icon icon={ SmileIcon } width={ 48 } height={ 48 } color="#cccccc"/>
}

export const FontAwesome = () => {
    return <FontAwesomeIcon icon={ faCommentDots }></FontAwesomeIcon>
}
export const FontAwesomeColor = () => {
    return <FontAwesomeIcon icon={ faCommentDots } style={{color: "#ccc"}}></FontAwesomeIcon>
}
export const FontAwesomeSizes = () => {
    return (
        <div>
            <FontAwesomeIcon icon={ faFolder } style={{fontSize: "24px"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={ faStickyNote } style={{fontSize: "36px"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={ faCommentDots } style={{fontSize: "48px"}}></FontAwesomeIcon>
        </div>
    )
}