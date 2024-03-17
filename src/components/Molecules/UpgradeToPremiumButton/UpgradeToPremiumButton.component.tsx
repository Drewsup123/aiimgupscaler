import useAuth from "../../../hooks/useAuth";
import usePremiumStatus from "../../../hooks/usePremiumStatus";
import { createCheckoutSession } from "../../../stripe/createCheckoutSession";
import styles from "./UpgradeToPremiumButton.module.sass";

interface IProps {
    children?: any;
    label?: string;
    style?: any;
}

const UpgradeToPremiumButton = (props: IProps) => {
    const { authState } = useAuth();
    const isPremium = usePremiumStatus();

    const handleClick = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!authState.authenticated) {
            alert("Please login");
            return;
        }
        if (!authState.user?.uid) return;
        createCheckoutSession(authState.user?.uid);
    };
    if (isPremium) return props.children || null;
    return (
        <button
            className={styles.glowOnHover}
            onClick={handleClick}
            style={props.style || {}}
        >
            {props.label || "Upgrade to Premium"}
        </button>
    );
};

export default UpgradeToPremiumButton;
