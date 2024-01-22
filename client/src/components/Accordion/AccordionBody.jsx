import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToggleContext } from "./AccordionContext";

const AccordionBody = ({ text, index }) => {
  const { toggle, setToggle } = useToggleContext();
  return (
    <AnimatePresence>
      {toggle === index && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className="overflow-hidden"
        >
          <p>{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionBody;
