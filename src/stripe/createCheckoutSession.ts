import { doc, onSnapshot, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import getStripe from "./initStripe";
const PREMIUM_ID = "price_1NZ0sUFLfOdR6n29ElFnIWea";

export const createCheckoutSession = async (uid: string) => {
    const user_ref = doc(db, "users", uid);
    const checkout_sessions_ref = collection(user_ref, "checkout_sessions");
    const checkoutInfo = {
        price: PREMIUM_ID,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    };
    try {
        const docRef = await addDoc(checkout_sessions_ref, checkoutInfo);
        onSnapshot(docRef, async (doc: any) => {
            const data = doc.data();
            console.log("Current Doc : ", data);
            if (data?.sessionId) {
                console.log("Found Session ID");
                const stripe = await getStripe();
                stripe?.redirectToCheckout({ sessionId: data.sessionId });
            }
        });
    } catch (error) {
        console.error("Error creating checkout session:", error);
    }
};
