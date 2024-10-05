import { Link, NavLink, useLocation } from "react-router-dom";
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
// import usePremiumStatus from "../../hooks/usePremiumStatus";
import { MdAccountCircle } from "react-icons/md";
const provider = new GoogleAuthProvider();

const Header = () => {
    const { authState, updateAuthState } = useAuth();
    const location = useLocation();
    const isEditorPage = location.pathname === "/";
    // const premiumStatus = usePremiumStatus();

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
                    })
                    .catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        // const email = error.customData.email;
                        // // The AuthCredential type that was used.
                        // const credential =
                        //     GoogleAuthProvider.credentialFromError(error);
                        // // ...
                        console.log(errorCode, errorMessage);
                        alert(
                            "There was an error signing in. Please try again."
                        );
                    });
            });
    };

    auth.onAuthStateChanged(async () => {
        if (!authState.authenticated && auth.currentUser?.uid) {
            const token = await auth.currentUser.getIdTokenResult(true);
            updateAuthState(UPDATE_AUTH, {
                authenticated: true,
                user: auth.currentUser,
                token: token.token,
            });
        }
    });

    return (
        <div id="palleon-top-bar">
            {/* Logo */}
            <img src="/logo.png" alt="logo" style={{height: 50, width: 50, marginLeft: 12}}/>
            <a className="palleon-logo" href="/">
                AI Img Tools{" "}
            </a>
            {/* Top Bar Menu */}
            <div className="palleon-top-bar-menu">
                {isEditorPage && (
                    <>
                        {" "}
                        {/* History */}
                        <div className="palleon-undo">
                            <button
                                id="palleon-undo"
                                type="button"
                                className="palleon-btn-simple tooltip"
                                data-title="Undo"
                                // autoComplete="off"
                                disabled={undefined}
                            >
                                <span className="material-icons">undo</span>
                            </button>
                        </div>
                        <div className="palleon-redo">
                            <button
                                id="palleon-redo"
                                type="button"
                                className="palleon-btn-simple tooltip"
                                data-title="Redo"
                                // autoComplete="off"
                                disabled={undefined}
                            >
                                <span className="material-icons">redo</span>
                            </button>
                        </div>
                        <div className="palleon-history">
                            <button
                                id="palleon-history"
                                type="button"
                                className="palleon-btn-simple palleon-modal-open tooltip"
                                data-title="History"
                                // autoComplete="off"
                                data-target="#modal-history"
                                disabled={undefined}
                            >
                                <span className="material-icons">history</span>
                            </button>
                        </div>
                        {/* New */}
                        <div className="palleon-new">
                            <button
                                id="palleon-new"
                                type="button"
                                className="palleon-btn primary palleon-modal-open"
                                // autoComplete="off"
                                data-target="#modal-add-new"
                            >
                                <span className="material-icons">
                                    add_circle
                                </span>
                                <span className="palleon-btn-text">New</span>
                            </button>
                        </div>
                        {/* Save */}
                        <div className="palleon-save">
                            <button
                                id="palleon-save"
                                type="button"
                                className="palleon-btn primary palleon-modal-open"
                                // autoComplete="off"
                                data-target="#modal-save"
                                disabled={undefined}
                            >
                                <span className="material-icons">save</span>
                                <span className="palleon-btn-text">
                                    Save or Download
                                </span>
                            </button>
                        </div>
                    </>
                )}
                {/* User Menu */}
                {authState.authenticated ? (
                    <Link to="/account">
                        <MdAccountCircle size={40} />
                    </Link>
                ) : (
                    <div
                        className={styles.avatarNotSignedIn}
                        onClick={signInWithGoogle}
                    >
                        {/* <img
                            src="https://static.gamersclub.com.br/players/avatar/737335/737335_full.jpg"
                            alt="Usuário"
                            className={styles.avatarImage}
                        /> */}
                        <MdAccountCircle
                            size={40}
                            color={"#5c5c5c"}
                            className={styles.avatarImage}
                        />
                        <img
                            src="https://i.imgur.com/0aDdQyR.png"
                            alt="Moldura"
                            className={
                                styles.avatarFrame + " " + styles.animSpin
                            }
                        />
                    </div>
                )}
                {/* <div className="palleon-user-menu">
                    <div
                        id="palleon-user-menu"
                        className="palleon-dropdown-wrap"
                    >
                        <img alt="avatar" src="assets/avatar.png" />
                        <span className="material-icons">arrow_drop_down</span>
                        <div className="menu-menu-container">
                            <ul
                                id="palleon-be-menu"
                                className="palleon-dropdown"
                            >
                                <li>
                                    <a href="https://palleon.website/js-version/">
                                        Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
export default Header;

//? OLD CODE
// {/* <header className={styles.header}>
//     <Link to="/" className={styles.siteName}>
//         AI Img Tools
//     </Link>
//     <div className={styles.rightLinks}>
//         <NavLink to="/" className={styles.navLink}>
//             Upscale
//         </NavLink>
//         <NavLink to="/bg-removal" className={styles.navLink}>
//             Remove Background
//         </NavLink>
//         <a href="/editor.html" className={styles.navLink}>
//             Photo Editor
//         </a>
//         {authState.authenticated ? (
//             <Link to="/account">
//                 <MdAccountCircle size={40} />
//             </Link>
//         ) : (
//             <button
//                 id="loginBtn"
//                 className={styles.loginBtn}
//                 onClick={signInWithGoogle}
//             >
//                 Login/Signup
//             </button>
//         )}
//     </div>
// </header> */}
