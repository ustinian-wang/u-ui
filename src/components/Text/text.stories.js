import React from 'react';
import Text from ".";

export default {
    title: "layout/Text",
    component: Text
}


export const Default = () => <Text>默认</Text>;
export const Secondary = () => <Text type="secondary">次要文本</Text>;
export const Medium = () => <Text size="medium">medium 大小文本</Text>;
export const LargeAndBold = () => (<Text size="large" bold>
    large 大小文本，加粗
</Text>);