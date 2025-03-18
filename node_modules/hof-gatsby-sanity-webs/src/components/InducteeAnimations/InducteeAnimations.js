import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const InducteeAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ scale: 0.75 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.75 }}
            transition={{ duration: 0.25 }}
        >
            {children}
        </motion.div>
    );
};

export default InducteeAnimation;