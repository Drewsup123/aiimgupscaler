import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const location = useLocation();
    const isEditor = location.pathname === "/";
    const year = new Date().getFullYear();

    if (isEditor) return null;
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="menu">
                <li className="menu__item">
                    <Link className="menu__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/terms-and-conditions">
                        Terms of Use
                    </Link>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/privacy-policy">
                        Privacy Policy
                    </Link>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/">
                        support@aiimgtools.com
                    </Link>
                </li>
            </ul>
            <p>&copy;{year} Adjacent Web LLC | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
