import { UPDATE_AUTH } from "../../../contexts/reducers/auth.reducer";
import useAuth from "../../../hooks/useAuth";
import Dialog from "../../Atoms/Dialog/Dialog.component";
import { auth, db } from "../../../firebase/client";
import { doc, setDoc } from "firebase/firestore";
import {
    signInWithPopup,
    GoogleAuthProvider,
    browserLocalPersistence,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

const LoginDialog = () => {
    const { authState, updateAuthState } = useAuth();
    const { showLoginModal } = authState;

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

    if (!showLoginModal || authState.authenticated) return null;
    return (
        <Dialog
            open={showLoginModal}
            onClose={() => {
                updateAuthState(UPDATE_AUTH, { showLoginModal: false });
            }}
        >
            <button className="gsi-material-button" onClick={signInWithGoogle}>
                <div className="gsi-material-button-state" />
                <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{ display: "block" }}
                        >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            />
                            <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                    </div>
                    <span className="gsi-material-button-contents">
                        Sign in with Google
                    </span>
                    <span style={{ display: "none" }}>Sign in with Google</span>
                </div>
            </button>
        </Dialog>
    );
};

export default LoginDialog;
