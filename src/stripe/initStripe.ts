import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe(
            process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ""
        );
    }
    return stripePromise;
};

export default initStripe;
