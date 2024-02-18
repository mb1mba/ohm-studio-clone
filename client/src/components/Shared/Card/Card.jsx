import React from "react";

const Card = ({ size, children }) => {
  const cardStyles = {
    sm: "w-[40vw] max-w-52",
  };

  const style = cardStyles[size];

  return <div className={`${style} grid  `}>{children}</div>;
};

export default Card;
