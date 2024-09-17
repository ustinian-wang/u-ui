import {ThemeProvider} from "styled-components";
import theme from "../src/theme.js";

//覆盖样式
import "../src/story.css";
import { BrowserRouter as Router } from "react-router-dom";


export const decorators = [
    (Story) => {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <Story/>
                </ThemeProvider>
            </Router>

        )
    },
];
