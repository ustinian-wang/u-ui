import { css } from "styled-components";

export const circle = (color, size="8px") => css`
    position: absolute;
    height: ${size};
    width: ${size};
    -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
    background: ${color};
`
