import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
            <p>&copy;2023 AI IMG UPSCALER | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
