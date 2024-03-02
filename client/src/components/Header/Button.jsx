import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="relative w-fit overflow-hidden " onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
