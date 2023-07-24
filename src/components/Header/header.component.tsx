import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.sass";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { authState } = useAuth();

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.siteName}>
                AI Image Upscaler
            </Link>
            <div className={styles.rightLinks}>
                <NavLink to="/samples">Samples</NavLink>
                <NavLink to="/why">Why Choose Us</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                {authState.authenticated ? (
                    <Link to="/account">
                        <button id="accountBtn">My Account</button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button id="loginBtn">Login</button>
                    </Link>
                )}
            </div>
        </header>
    );
};
export default Header;
