import React from "react";
import Header from "./components/Header/header.component";
import { Route, Routes } from "react-router";

function App() {
    return (
        <div className="App">
            <Header />
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Routes></Routes>
        </div>
    );
}

export default App;
