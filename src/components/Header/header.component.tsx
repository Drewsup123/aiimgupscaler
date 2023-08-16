import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.sass";
import useAuth from "../../hooks/useAuth";
import { auth, db } from "../../firebase/client";
import { doc, setDoc } from "firebase/firestore";
import {
    signInWithPopup,
    GoogleAuthProvider,
    browserLocalPersistence,
} from "firebase/auth";
import { UPDATE_AUTH } from "../../contexts/reducers/auth.reducer";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import { MdAccountCircle } from "react-icons/md";
import Logo from "../../images/logo/logo_no_bg_910.png";
const provider = new GoogleAuthProvider();

const Header = () => {
    const { authState, updateAuthState } = useAuth();
    const premiumStatus = usePremiumStatus();

    const signInWithGoogle = async () => {
        return await auth
            .setPersistence(browserLocalPersistence)
            .then(async () => {
                await signInWithPopup(auth, provider)
                    .then(async (result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential =
                            GoogleAuthProvider.credentialFromResult(result);
                        const token = credential?.accessToken;
                        // The signed-in user info.
                        const user = result.user;
                        // IdP data available using getAdditionalUserInfo(result)
                        // ...
                        console.log("Logged In! : ", user, token);
                        await setDoc(
                            doc(db, "users", user.uid),
                            {
                                uid: user.uid,
                                displayName: user.displayName,
                                email: user.email,
                            },
                            { merge: true }
                        );
                        updateAuthState(UPDATE_AUTH, {
                            authenticated: true,
                            user,
                            token,
                        });
                        console.log("Current user from auth : ", auth);
                    })
                    .catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential =
                            GoogleAuthProvider.credentialFromError(error);
                        // ...
                    });
            });
    };

    auth.onAuthStateChanged(async () => {
        console.log("Auth state changed : ", auth);
        if (!authState.authenticated && auth.currentUser?.uid) {
            const token = await auth.currentUser.getIdTokenResult(true);
            console.log("token : ", token);
            updateAuthState(UPDATE_AUTH, {
                authenticated: true,
                user: auth.currentUser,
                token: token.token,
            });
        }
    });

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.siteName}>
                <img src={Logo} alt="Logo" className={styles.logo} />
                AI Img Tools
            </Link>
            <div className={styles.rightLinks}>
                <NavLink to="/" className={styles.navLink}>
                    Upscale
                </NavLink>
                <NavLink to="/bg-removal" className={styles.navLink}>
                    Remove Background
                </NavLink>
                <a href="/editor.html" className={styles.navLink}>
                    Photo Editor
                </a>
                {authState.authenticated ? (
                    <Link to="/account">
                        <MdAccountCircle size={40} />
                    </Link>
                ) : (
                    <button
                        id="loginBtn"
                        className={styles.loginBtn}
                        onClick={signInWithGoogle}
                    >
                        Login/Signup
                    </button>
                )}
            </div>
        </header>
    );
};
export default Header;
