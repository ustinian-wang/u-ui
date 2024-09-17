import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ChatApp from "./application/ChatApp";
import theme from "../src/theme.js";

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ChatApp />
            </ThemeProvider>
        </Router>
    );
}

export default App;
