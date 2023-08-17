import Header from "./components/Header/header.component";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/Home.page";
import TermsAndConditionsPage from "./pages/TermsAndConditions/TermsAndConditions.page";
import AccountPage from "./pages/Account/Account.page";
import BgRemoverPage from "./pages/BgRemover/BgRemover.page";
import InPaintingPage from "./pages/Inpainting/inpainting.page";
import Footer from "./components/Global/Footer/Footer.component";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.page";

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
                    path="/terms-and-conditions"
                    Component={TermsAndConditionsPage}
                />
                <Route path="/privacy-policy" Component={PrivacyPolicy} />
                <Route path="/bg-removal" Component={BgRemoverPage} />
                <Route path="/inpainting" Component={InPaintingPage} />
                <Route path="/account" Component={AccountPage} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
