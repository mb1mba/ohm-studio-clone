import React from "react";
import { motion } from "framer-motion";
import { useToggleContext } from "./AccordionContext";

const AccordionBody = ({ text, index }) => {
  const { toggle, setToggle } = useToggleContext();
  const variants = {
    open: { maxHeight: "auto", overflow: "visible" },
    closed: { maxHeight: 0, overflow: "hidden" },
  };

  return (
    <motion.div variants={variants} onClick={() => setToggle(false)}>
      <p>{toggle === index ? text : null}</p>
    </motion.div>
  );
};

export default AccordionBody;
