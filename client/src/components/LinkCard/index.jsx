import React from "react";
import { Link } from "react-router-dom";

const LinkCard = ({ size }) => {
  const cardClasses = {
    sm: "w-[40vw] max-w-52",
    md: "w-[86vw] max-w-md",
  };

  const currentClass = cardClasses[size];

  return (
    <div className="grid gap-4">
      <img
        className={`${currentClass} rounded-lg`}
        src="images/ban-gray.webp"
        alt="Card"
      />

      {size === "lg" && (
        <div className="flex justify-between gap-4">
          <p>BlOC - Raw</p>
          <p>€1.125,00</p>
        </div>
      )}

      {size === "sm" && (
        <div className="m-auto">
          <p className="font-helvetica text-lg">BlOC - Black</p>
        </div>
      )}
    </div>
  );
};

export default LinkCard;
