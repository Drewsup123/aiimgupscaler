import { auth } from "../firebase/client";

const isUserPremium = async () => {
    const decoded_token = await auth.currentUser?.getIdTokenResult(true);
    console.log("Checking : ", decoded_token)
    if (decoded_token?.claims?.stripeRole === "premium") return true;
    return false;
};

export default isUserPremium;
