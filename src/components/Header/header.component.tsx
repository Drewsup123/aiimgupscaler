import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.sass";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.siteName}>
                AI Image Upscaler
            </Link>
            <div className={styles.rightLinks}>
                <NavLink to="/samples">Samples</NavLink>
                <NavLink to="/why">Why Choose Us</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
            </div>
        </header>
    );
};
export default Header;
