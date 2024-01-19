import React from "react";

const Card = ({ size, content }) => {
  const cardStyles = {
    small: "w-[40vw] max-w-52",
    medium: "w-[86vw] max-w-md",
    large: "w-[44vw] h-[48vw]",
  };

  const style = cardStyles[size];

  return <div className={`${style}`}>{content}</div>;
};

export default Card;
