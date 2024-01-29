import React from "react";
import { motion } from "framer-motion";
const Drawline = ({ isAnimate = true }) => {
  return (
    <motion.div
      variants={{
        hidden: { width: 0 },
        visible: { width: "100%" },
      }}
      initial="hidden"
      animate="visible"
      transition={isAnimate && { duration: 0.75, ease: "linear" }}
      className=" bg-[#8e91944d] h-[1px]"
    ></motion.div>
  );
};

export default Drawline;
