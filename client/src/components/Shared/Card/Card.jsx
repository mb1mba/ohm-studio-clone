import React from "react";

const Card = ({ size, children }) => {
  const cardStyles = {
    sm: "w-[40vw] max-w-52",
    md: "w-[86vw] max-w-md",
    lg: "w-full max-h-[350px]",
  };

  const style = cardStyles[size];

  return <div className={`${style}`}>{children}</div>;
};

export default Card;
