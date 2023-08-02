import useAuth from "../../hooks/useAuth";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import { redirectToCustomerPortal } from "../../stripe/redirectToCustomerPortal";
import styles from "./account.module.sass";

const AccountPage = () => {
    const { authState } = useAuth();
    const premiumStatus = usePremiumStatus();

    const goToCustomerPortal = () => {
        redirectToCustomerPortal();
    };

    return (
        <div className={`route ${styles.wrapper}`}>
            <div className={`${styles.section} ${styles.rightSection}`}>
                <h4>Basic Information</h4>
                <h6>Name: {authState.user?.displayName}</h6>
                <h6>Email : {authState.user?.email}</h6>
                <h6>
                    Account Created : {authState.user?.metadata?.creationTime}
                </h6>
                <button
                    className={styles.logoutBtn}
                    onClick={goToCustomerPortal}
                >
                    Logout
                </button>
            </div>
            <div className={`${styles.section} ${styles.leftSection}`}>
                <h4>Subscription Details</h4>
                <h6>Plan: {premiumStatus ? "Premium" : "Free"}</h6>
                <h6>
                    Usage :{" "}
                    {premiumStatus ? "Unlimited" : "5 upscales/edits per day"}
                </h6>
                <button
                    className={styles.cancelSubscriptionBtn}
                    onClick={goToCustomerPortal}
                >
                    Customer Portal
                </button>
            </div>
        </div>
    );
};

export default AccountPage;
