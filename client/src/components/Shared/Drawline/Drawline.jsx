import React from "react";
import { motion } from "framer-motion";
const Drawline = ({
  isAnimate = true,
  className = "bg-[#8e91944d] h-[1px]",
}) => {
  return (
    <motion.div
      variants={{
        hidden: { width: 0 },
        visible: { width: "100%" },
        exit: { width: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={isAnimate && { duration: 0.75, ease: "linear" }}
      className={className}
    ></motion.div>
  );
};

export default Drawline;
