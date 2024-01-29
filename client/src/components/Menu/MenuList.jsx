import { motion } from "framer-motion";
import React from "react";

const MenuList = ({ children, isOpen }) => {
  const variants = {
    visible: { height: "auto", maxHeight: "100%" },
    hidden: { maxHeight: 0, overflow: "hidden" },
  };
  return (
    <motion.ul
      variants={variants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{ ease: "easeIn" }}
      exit="hidden"
      className="overflow-hidden rounded-xl"
    >
      {children}
    </motion.ul>
  );
};

export default MenuList;
