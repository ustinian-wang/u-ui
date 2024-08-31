import {ThemeProvider} from "styled-components";
import theme from "../src/theme.js";

//覆盖样式
import "../src/story.css";

export const decorators = [
    (Story) => {
        console.log("theme", theme)
        return (
            <ThemeProvider theme={theme}>
                <Story/>
            </ThemeProvider>
        )
    },
];
