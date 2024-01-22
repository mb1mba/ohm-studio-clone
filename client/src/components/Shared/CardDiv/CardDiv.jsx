import React from "react";

const CardDiv = ({ children, text, price, gap = 4 }) => {
  return (
    <div className={`grid gap-${gap}`}>
      {children}
      <div className="flex justify-between">
        <p className="font-garamond text-xl text-[#8e9194]">{text}</p>
        {price && <p>€{price}</p>}
      </div>
    </div>
  );
};

export default CardDiv;
