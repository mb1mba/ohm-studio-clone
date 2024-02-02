import React from "react";

const Card = ({ size, children }) => {
  const cardStyles = {
    sm: "w-[40vw] max-w-52",
    md: "w-[86vw] w-full ",
    lg: "w-full max-h-[350px]",
  };

  const style = cardStyles[size];

  return <div className={`${style} grid`}>{children}</div>;
};

export default Card;
