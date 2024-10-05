import Header from "./components/Header/header.component";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/Home.page";
import TermsAndConditionsPage from "./pages/TermsAndConditions/TermsAndConditions.page";
import AccountPage from "./pages/Account/Account.page";
import BgRemoverPage from "./pages/BgRemover/BgRemover.page";
import InPaintingPage from "./pages/Inpainting/inpainting.page";
import Footer from "./components/Global/Footer/Footer.component";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.page";
import Editor from "./pages/Editor/Editor.component";
import useAuth from "./hooks/useAuth";
import LoginDialog from "./components/Organisms/LoginDialog/LoginDialog.component";
import UpgradeDialog from "./components/Organisms/UpgradeDialog/UpgradeDialog.component";

function App() {
    const { authState } = useAuth();

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" Component={Editor} />
                <Route
                    path="/terms-and-conditions"
                    Component={TermsAndConditionsPage}
                />
                <Route path="/privacy-policy" Component={PrivacyPolicy} />
                <Route path="/bg-removal" Component={BgRemoverPage} />
                <Route path="/inpainting" Component={InPaintingPage} />
                <Route path="/account" Component={AccountPage} />
            </Routes>
            <LoginDialog />
            <UpgradeDialog />
            <Footer />
        </>
    );
}

export default App;
