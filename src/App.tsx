import React from "react";
import Header from "./components/Header/header.component";
import { Route, Routes } from "react-router";

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
