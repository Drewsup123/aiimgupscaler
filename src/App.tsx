import React from "react";
import Header from "./components/Header/header.component";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/Home.page";
import WhyPage from "./pages/Why.page";
import PricingPage from "./pages/Pricing.page";
import TermsAndConditionsPage from "./pages/TermsAndConditions.page";
import AccountPage from "./pages/Account.page";
import SamplePage from "./pages/Sample/Sample.page";
import LoginPage from "./pages/Login/Login.page";
import LoggedInRoute from "./components/Routing/LoggedInRoute.component";

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
            <Routes>
                <Route path="/" Component={HomePage} />
                {/* <Route path="/login" Component={LoginPage} /> */}
                <Route path="/why" Component={WhyPage} />
                <Route path="/pricing" Component={PricingPage} />
                <Route path="/samples" Component={SamplePage} />
                <Route
                    path="/terms-and-condition"
                    Component={TermsAndConditionsPage}
                />
                <Route path="/account" Component={AccountPage} />
            </Routes>
        </div>
    );
}

export default App;
