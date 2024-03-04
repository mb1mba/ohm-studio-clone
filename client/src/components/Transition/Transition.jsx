import React from "react";
import { animate, motion } from "framer-motion";

const transition = (OgComponent) => {
  const title = ["O", "H", "M"];

  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed flex z-50 left-0 w-full h-full bg-white origin-bottom justify-center items-center overflow-hidden"
        initial={{ top: 0 }}
        animate={{
          top: "-100vh",
          transition: { duration: 1.5, delay: 0.75, ease: [0.76, 0, 0.24, 1] },
          transitionEnd: {
            top: "100vh",
          },
        }}
        exit={{
          top: 0,
          transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <motion.div className=" w-fit overflow-hidden flex">
          {title.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 1 }}
              animate={{
                opacity: 1,
                y: "-100%",
                transition: {
                  duration: 1,
                  delay: 0.35 + i * 0.05,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              exit={{
                y: [120, 0],
                transition: {
                  duration: 1.45,
                  delay: 0.35 + i * 0.05,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              className="text-[1.8vw] md:text-[1.2v] 3xl:text-8xl -tracking-[0.1em] font-bold "
            >
              {letter}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default transition;
