import React from "react";

import { motion } from "framer-motion";

export const FadeInDiv = (props: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
        />
    );
};

export const FadeInButton = (props: any) => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
        />
    );
};
