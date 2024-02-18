import React from "react";

const CardDiv = ({
  children,
  text,
  price,
  gap = 4,
  align,
  order,
  color = "#000",
}) => {
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
        <p
          className="  font-helvetica text-xl  md:text-[1vw] 3xl:text-lg text-center font-semibold"
          style={{ color }}
        >
          {text}
        </p>
        {price && (
          <p className=" md:text-[1vw] 3xl:text-lg text-[#8e9194]">€{price}</p>
        )}
      </div>
    </div>
  );
};

export default CardDiv;
