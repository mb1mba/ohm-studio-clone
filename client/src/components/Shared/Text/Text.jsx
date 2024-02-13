import React from "react";

const Text = ({ children }) => {
  return (
    <h3 className="font-favorit  text-4xl md:text-xl lg:text-3xl font-bold">
      {children}
    </h3>
  );
};

export default Text;
