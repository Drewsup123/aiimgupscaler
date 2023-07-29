import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import getStripe from "./initStripe";
const PREMIUM_ID = "price_1NZ0sUFLfOdR6n29ElFnIWea";

export const createCheckoutSession = async (uid: string) => {
    const checkout_ref = doc(db, "checkout_sessions", uid);
    setDoc(checkout_ref, {
        price: PREMIUM_ID,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    });
    // await setDoc(doc(db, "users", uid), {

    // })
    onSnapshot(checkout_ref, async (doc: any) => {
        const data = doc.data();
        console.log("Current Doc : ", data);
        if (data?.sessionId) {
            console.log("Found Session ID");
            const stripe = await getStripe();
            stripe?.redirectToCheckout({ sessionId: data.sessionId });
        }
    });
};
