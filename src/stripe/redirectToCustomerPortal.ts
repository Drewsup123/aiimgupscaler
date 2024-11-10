import { createPortalLink } from "../firebase/client";

export const redirectToCustomerPortal = async (uid?: string) => {
    const { data }: any = await createPortalLink({
        returnUrl: window.location.origin,
        locale: "auto",
    });
    if (!data.url) return;
    window.location.assign(data.url);
};
