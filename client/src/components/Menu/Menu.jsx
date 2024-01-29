import React from "react";

const Menu = ({ children }) => {
  return (
    <div className="absolute top-0 left-0  px-5 pt-32 bg-white h-screen w-full ">
      {children}
    </div>
  );
};

export default Menu;
