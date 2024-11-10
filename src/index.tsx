import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import deepai from "deepai";
import GlobalStateProvider from "./contexts/globalStateProvider";
deepai.setApiKey(process.env.REACT_APP_DEEP_API_KEY || "");

const root = ReactDOM.createRoot(
    document.getElementById("palleon") as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStateProvider>
            <Router>
                <App />
            </Router>
        </GlobalStateProvider>
    </React.StrictMode>
);

reportWebVitals();
