import React from "react";
import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // const word = "OHM";

  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white origin-bottom grid grid-auto  justify-center items-center overflow-hidden"
        key="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* <div className="">
          {word.split("").map((char, index) => {
            return (
              <motion.span className="" variants={child} key={index}>
                {char}
              </motion.span>
            );
          })}
        </div> */}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-white origin-top"
        key="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
