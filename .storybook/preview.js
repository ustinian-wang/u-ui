import {ThemeProvider} from "styled-components";
import theme from "../src/theme.js";

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
