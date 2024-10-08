import React from "react";
import PropTypes from "prop-types";
import StyledBlockedList, {
  SettingsMenu,
  ClosableAvatar,
  BlockedAvatar,
  CloseIcon,
  BlockedName,
  FriendList,
} from "./style.js";
import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "assets/icons/closeCircle.svg";
import face from "assets/images/face-male-1.jpg";
import "styled-components/macro";
import Icon from "components/Icon";
import Text from "components/Text";
import { useNavigate } from "react-router-dom";
import blockedData from "data/blocked.js";

function BlockedList({ children, ...rest }) {
  const navigate = useNavigate();
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => navigate(-1)}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {blockedData.map((user, i) => {
          return (
            <ClosableAvatar key={user.id}>
              <BlockedAvatar size="105px" src={user.avatar} />
              <CloseIcon width={46} height={51} icon={closeCircle} />
              <BlockedName>{user.name}</BlockedName>
            </ClosableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
