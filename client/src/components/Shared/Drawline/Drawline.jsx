import React from "react";
import { motion } from "framer-motion";

const Drawline = () => {
  return (
    <motion.div
      variants={{
        hidden: { width: 0 },
        visible: { width: "100%" },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, ease: "linear" }}
      className="absolute bg-[#8e91944d] h-[1px] w-full bottom-0"
    ></motion.div>
  );
};

export default Drawline;
