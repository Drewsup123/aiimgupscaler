import Header from "./components/Header/header.component";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/Home.page";
import TermsAndConditionsPage from "./pages/TermsAndConditions.page";
import AccountPage from "./pages/Account/Account.page";
import BgRemoverPage from "./pages/BgRemover/BgRemover.page";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <ul className="bg-bubbles">
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
            </ul> */}
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route
                    path="/terms-and-condition"
                    Component={TermsAndConditionsPage}
                />
                <Route path="/bg-removal" Component={BgRemoverPage} />
                <Route path="/account" Component={AccountPage} />
            </Routes>
        </div>
    );
}

export default App;
