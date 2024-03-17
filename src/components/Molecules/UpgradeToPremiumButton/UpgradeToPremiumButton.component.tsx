import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import usePremiumStatus from "../../../hooks/usePremiumStatus";
import { createCheckoutSession } from "../../../stripe/createCheckoutSession";
import styles from "./UpgradeToPremiumButton.module.sass";
import { PulseLoader } from "react-spinners";

interface IProps {
    children?: any;
    label?: string;
    style?: any;
}

const UpgradeToPremiumButton = (props: IProps) => {
    const [isCreatingSession, setIsCreatingSession] = useState(false);
    const { authState } = useAuth();
    const isPremium = usePremiumStatus();

    const handleClick = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!authState.authenticated) {
            alert("Please login");
            return;
        }
        if (!authState.user?.uid) return;
        setIsCreatingSession(true);
        await createCheckoutSession(authState.user?.uid);
        setIsCreatingSession(false);
    };
    if (isPremium) return props.children || null;
    return (
        <button
            className={`${styles.glowOnHover} ${
                isCreatingSession ? styles.glowLoading : ""
            }`}
            onClick={handleClick}
            style={props.style || {}}
        >
            {isCreatingSession ? (
                <>
                    <PulseLoader color="#fff" size={10} />
                    Initiating Checkout 😃
                </>
            ) : (
                props.label || "Upgrade to Premium"
            )}
        </button>
    );
};

export default UpgradeToPremiumButton;
