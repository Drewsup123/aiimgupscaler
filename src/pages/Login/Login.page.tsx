import { auth, db, firebaseClient } from "../../firebase/client";
import { doc, setDoc } from "firebase/firestore";
import {
    signInWithPopup,
    GoogleAuthProvider,
    browserLocalPersistence,
    browserSessionPersistence,
} from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { UPDATE_AUTH } from "../../contexts/reducers/auth.reducer";
const provider = new GoogleAuthProvider();

const LoginPage = () => {
    const { authState, updateAuthState } = useAuth();

    console.log("Firebase Auth : ", auth);

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

    console.log("Auth State : ", authState);

    return (
        <div className="route">
            <h1>Login page</h1>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default LoginPage;
