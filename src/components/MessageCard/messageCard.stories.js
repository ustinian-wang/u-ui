import React from "react";
import MessageCard from ".";

import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "component/MessageCard",
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    name="李铭浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    name="李铭浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    active
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    name="李铭浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    active
    replied
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face1}
    name="李铭浩"
    avatarStatus="online"
    statusText="在线"
    time="3 小时之前"
    message="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    replied
  />
);
