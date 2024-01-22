import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const CustomMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed left-1/2 top-10 -translate-x-1/2 bg-[#e3e3e3] h-auto w-28 rounded-xl">
      <div className="h-auto">
        <motion.div
          initial={{ height: "3rem" }}
          animate={{ height: "100%" }}
          exit={{ height: "3rem" }}
          onClick={handleClick}
          className="grid gap-2 justify-center pt-2  overflow-hidden"
        >
          {content.map((object, index) => (
            <CustomMenuLink key={index} object={object} index={index} />
          ))}
        </motion.div>
      </div>

      <CustomMenuBtn isMenuOpen={setIsMenuOpen} handleClick={handleClick} />
    </div>
  );
};

const CustomMenuLink = ({ object, index }) => {
  const { productName } = useParams();

  return (
    <Link
      to={object.path}
      onClick={() => setActive(index)}
      className="rounded-md w-[6.25rem]"
    >
      <h3
        className={`${
          productName.slice(0, object.title.length) ===
            object.title.toLowerCase() && "bg-white"
        } text-4xl font-bold`}
      >
        {object.title}
      </h3>
    </Link>
  );
};

const CustomMenuBtn = ({ isMenuOpen, handleClick }) => {
  return (
    <div className="flex justify-center h-7">
      <button onClick={handleClick}>
        <svg
          viewBox="0 0 20 7"
          fill="none"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 1L0 1" stroke="#8E9194" strokeWidth="1.5"></path>
          <path
            d="M20 6.00049L0 6.00049"
            stroke="#8E9194"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const content = [
  { title: "OHM", path: "/" },
  { title: "PION", path: "/products/pion-green" },
  { title: "BLOC", path: "/products/bloc-raw" },
];

export default CustomMenu;
