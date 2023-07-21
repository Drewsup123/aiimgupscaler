import { Link } from "react-router-dom";
import styles from "./header.module.sass";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.siteName}>
                AI Image Upscaler
            </Link>
            <div className={styles.rightLinks}>
                <Link to="/samples">Samples</Link>
                <Link to="/why">Why Choose Us</Link>
                <Link to="/pricing">Pricing</Link>
            </div>
        </header>
    );
};
export default Header;
