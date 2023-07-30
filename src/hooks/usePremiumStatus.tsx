import { useEffect, useState } from "react";
import isUserPremium from "../stripe/isUserPremium";

const usePremiumStatus = (user: any) => {
    const [premiumStatus, setPremiumStatus] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            const checkPremiumStatus = async () => {
                const status = await isUserPremium();
                setPremiumStatus(status);
            };
            checkPremiumStatus();
        } else {
            setPremiumStatus(false);
        }
    }, [user]);
};
