import { useState } from "react";
import { UPDATE_AUTH } from "../../contexts/reducers/auth.reducer";
import { auth } from "../../firebase/client";
import useAuth from "../../hooks/useAuth";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import { redirectToCustomerPortal } from "../../stripe/redirectToCustomerPortal";
import styles from "./account.module.sass";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router";

const AccountPage = () => {
    const { authState, updateAuthState } = useAuth();
    const premiumStatus = usePremiumStatus();
    const [loggingOut, setLoggingOut] = useState(false);
    const [loadingCustomerPortal, setLoadingCustomerPortal] = useState(false);
    const navigate = useNavigate();

    const goToCustomerPortal = () => {
        setLoadingCustomerPortal(true);
        redirectToCustomerPortal();
    };

    const logout = () => {
        auth.signOut()
            .then(() => {
                updateAuthState(UPDATE_AUTH, {
                    authenticated: false,
                    user: {},
                    token: null,
                });
                setLoggingOut(false);
                navigate("/");
            })
            .catch(() => {
                setLoggingOut(false);
            });
    };

    return (
        <div className={`route ${styles.wrapper}`}>
            <div className={`${styles.section} ${styles.leftSection}`}>
                <h4>Basic Information</h4>
                <h6>Name: {authState.user?.displayName}</h6>
                <h6>Email : {authState.user?.email}</h6>
                <h6>
                    Account Created : {authState.user?.metadata?.creationTime}
                </h6>
                <button className={styles.logoutBtn} onClick={logout}>
                    {loggingOut ? (
                        <PulseLoader
                            color="#fff"
                            size={5}
                            style={{ marginLeft: 5 }}
                        />
                    ) : (
                        "Logout"
                    )}
                </button>
            </div>
            <div className={`${styles.section} ${styles.rightSection}`}>
                <h4>Subscription Details</h4>
                <h6>Plan: {premiumStatus ? "Premium" : "Free"}</h6>
                <h6>
                    Usage :{" "}
                    {premiumStatus
                        ? "Unlimited"
                        : "Basic Editor - No Premium Features"}
                </h6>
                <button
                    className={styles.cancelSubscriptionBtn}
                    onClick={goToCustomerPortal}
                >
                    {loadingCustomerPortal ? (
                        <PulseLoader
                            color="#fff"
                            size={5}
                            style={{ marginLeft: 5 }}
                        />
                    ) : (
                        "Customer Portal"
                    )}
                </button>
            </div>
        </div>
    );
};

export default AccountPage;
