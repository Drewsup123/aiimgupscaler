import { createPortalLink } from "../firebase/client";

export const redirectToCustomerPortal = async (uid?: string) => {
    const { data }: any = await createPortalLink({
        returnUrl: window.location.origin,
        locale: "auto",
        // configuration: "bpc_1JSEAKHYgolSBA358VNoc2Hs",
    });
    if (!data.url) return;
    window.location.assign(data.url);
};
