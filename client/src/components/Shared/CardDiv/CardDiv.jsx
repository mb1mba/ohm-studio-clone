import React from "react";

const CardDiv = ({ children, text, price, gap = 4, align, order }) => {
  return (
    <div
      className={`lg:grid gap-${gap} justify-center lg:grid-areas-card lg:grid-cols-card lg:grid-rows-card  md:sticky md:bottom-0 md:self-end md:${
        order ? "justify-end" : "justify-start"
      } ${order && `order-${order}`} `}
    >
      {children}
      <div
        className={`flex justify-${align} text-center items-center grid-in-text`}
      >
        <p className="font-garamond text-xl text-center text-[#8e9194]">
          {text}
        </p>
        {price && <p>€{price}</p>}
      </div>
    </div>
  );
};

export default CardDiv;
