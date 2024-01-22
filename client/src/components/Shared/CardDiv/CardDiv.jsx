import React from "react";

const CardDiv = ({ children, text, price, gap = 4, align }) => {
  return (
    <div className={`grid gap-${gap} justify-center`}>
      {children}
      <div className={`flex justify-${align} items-center`}>
        <p className="font-garamond text-xl text-center text-[#8e9194]">
          {text}
        </p>
        {price && <p>€{price}</p>}
      </div>
    </div>
  );
};

export default CardDiv;
