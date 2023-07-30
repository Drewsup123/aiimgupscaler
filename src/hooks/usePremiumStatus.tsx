import { useEffect, useState } from "react";
import isUserPremium from "../stripe/isUserPremium";
import useAuth from "./useAuth";

const usePremiumStatus = () => {
    const { authState } = useAuth();
    const [premiumStatus, setPremiumStatus] = useState<boolean>(false);

    useEffect(() => {
        if (authState.user) {
            const checkPremiumStatus = async () => {
                const status = await isUserPremium();
                setPremiumStatus(status);
            };
            checkPremiumStatus();
        } else {
            setPremiumStatus(false);
        }
    }, [authState.user]);

    return premiumStatus;
};

export default usePremiumStatus;
