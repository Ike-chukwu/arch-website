import React from "react";
import { motion } from "framer-motion";

const AnimatePage = ({ children }) => {
  const pageVariants = {
    init: {
      opacity: 0,
    },
    final: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="init"
      animate="final"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
