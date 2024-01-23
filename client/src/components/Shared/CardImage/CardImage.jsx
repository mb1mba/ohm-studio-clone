import React from "react";

const CardImage = ({ src }) => {
  return (
    <img className="rounded-xl h-full w-full object-cover" src={src} alt="" />
  );
};

export default CardImage;
