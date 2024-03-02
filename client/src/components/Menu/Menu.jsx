import React from "react";

const Menu = ({ children }) => {
  return (
    <div className="bg-white h-screen w-full fixed top-0 left-0 pt-[28vw] px-[5.25vw]">
      {children}
    </div>
  );
};

export default Menu;
