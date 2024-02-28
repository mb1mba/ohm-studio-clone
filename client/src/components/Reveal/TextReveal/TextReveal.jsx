import React from "react";
import { motion } from "framer-motion";

const TextReveal = ({ children, width = "fit-content" }) => {
  return (
    <div style={{ width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 100 },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
