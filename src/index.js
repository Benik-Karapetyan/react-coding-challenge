import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.Suspense fallback="Loading...">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Suspense>,
    document.getElementById("root")
);
