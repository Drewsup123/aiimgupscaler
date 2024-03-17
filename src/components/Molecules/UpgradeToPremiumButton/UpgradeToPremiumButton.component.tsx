import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import usePremiumStatus from "../../../hooks/usePremiumStatus";
import { createCheckoutSession } from "../../../stripe/createCheckoutSession";
import styles from "./UpgradeToPremiumButton.module.sass";
import { PulseLoader } from "react-spinners";
import { UPDATE_AUTH } from "../../../contexts/reducers/auth.reducer";
import UpgradeDialog from "../../Organisms/UpgradeDialog/UpgradeDialog.component";

interface IProps {
    children?: any;
    label?: string;
    style?: any;
    triggerCheckoutSession?: boolean;
}

const UpgradeToPremiumButton = (props: IProps) => {
    const [isCreatingSession, setIsCreatingSession] = useState(false);
    const { authState, updateAuthState } = useAuth();
    const isPremium = usePremiumStatus();

    const handleClick = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!authState.authenticated) {
            updateAuthState(UPDATE_AUTH, { showLoginModal: true });
            return;
        }
        if (!authState.user?.uid) return;
        if (!!props.triggerCheckoutSession) {
            setIsCreatingSession(true);
            await createCheckoutSession(authState.user?.uid);
            setIsCreatingSession(false);
        } else {
            updateAuthState(UPDATE_AUTH, { showUpgradeModal: true });
        }
    };
    if (isPremium) return props.children || null;
    return (
        <>
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
                        Initiating Checkout
                    </>
                ) : (
                    props.label || "Upgrade to Premium"
                )}
            </button>
        </>
    );
};

export default UpgradeToPremiumButton;
