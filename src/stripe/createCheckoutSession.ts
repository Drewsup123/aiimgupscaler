import { doc, onSnapshot, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import getStripe from "./initStripe";
import { PREMIUM_PRODUCT_ID } from "../constants/keys.constant";

export const createCheckoutSession = async (uid: string) => {
    return new Promise(async (resolve, reject) => {
        const user_ref = doc(db, "users", uid);
        const checkout_sessions_ref = collection(user_ref, "checkout_sessions");
        const checkoutInfo = {
            price: PREMIUM_PRODUCT_ID,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        };
        try {
            const docRef = await addDoc(checkout_sessions_ref, checkoutInfo);
            onSnapshot(docRef, async (doc: any) => {
                const data = doc.data();
                if (data?.sessionId) {
                    const stripe = await getStripe();
                    stripe?.redirectToCheckout({ sessionId: data.sessionId });
                    resolve({ status: "success" });
                }
            });
        } catch (error) {
            console.error("Error creating checkout session:", error);
            reject(error);
        }
    });
};
