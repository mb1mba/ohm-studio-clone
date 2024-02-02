import React from "react";

const CardDiv = ({ children, text, price, gap = 4, align }) => {
  return (
    <div className={`grid gap-${gap} justify-center md:grid-areas-card md:grid-cols-card md:grid-rows-card`}>
      {children}
      <div className={`flex justify-${align} items-center grid-in-text`}>
        <p className="font-garamond text-xl text-center text-[#8e9194]">
          {text}
        </p>
        {price && <p>€{price}</p>}
      </div>
    </div>
  );
};

export default CardDiv;
