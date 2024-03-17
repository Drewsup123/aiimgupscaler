import { useState } from "react";
import { UPDATE_AUTH } from "../../../contexts/reducers/auth.reducer";
import useAuth from "../../../hooks/useAuth";
import usePremiumStatus from "../../../hooks/usePremiumStatus";
import Checkbox from "../../Atoms/Checkbox/Checkbox.component";
import Dialog from "../../Atoms/Dialog/Dialog.component";
import UpgradeToPremiumButton from "../../Molecules/UpgradeToPremiumButton/UpgradeToPremiumButton.component";
import { Link } from "react-router-dom";

const UpgradeDialog = () => {
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const { authState, updateAuthState } = useAuth();
    const isPremium = usePremiumStatus();
    const { showUpgradeModal } = authState;

    const handleTermsChange = (isChecked: boolean) => {
        setAcceptedTerms(isChecked);
    };

    if (isPremium || !showUpgradeModal) return null;
    return (
        <Dialog
            open={showUpgradeModal}
            onClose={() => {
                updateAuthState(UPDATE_AUTH, { showUpgradeModal: false });
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    padding: 40,
                }}
            >
                <Checkbox
                    onChange={handleTermsChange}
                    checked={acceptedTerms}
                    label={
                        <>
                            By proceeding, I consent to the{" "}
                            <Link
                                to={"/privacy-policy"}
                                target="_blank"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                Privacy Policy
                            </Link>{" "}
                            and accept the{" "}
                            <Link
                                to={"/terms-and-conditions"}
                                target="_blank"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                Terms and Conditions
                            </Link>
                            .
                        </>
                    }
                />
                {acceptedTerms && (
                    <UpgradeToPremiumButton triggerCheckoutSession />
                )}
            </div>
        </Dialog>
    );
};

export default UpgradeDialog;
