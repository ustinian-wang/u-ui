import React from "react";
import Button from ".";

import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Icon from "components/Icon";

export default {
  title: "component/Button",
  component: Button,
};

export const RectButton = () => <Button shape="rect">默认按钮</Button>;

export const CircleButton = () => (
  <Button>
    <Icon icon={Plus} width={12} height={12} />
  </Button>
);
