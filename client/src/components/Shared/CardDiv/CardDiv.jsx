import React from "react";

const CardDiv = ({
  children,
  text,
  price,
  gap = 4,
  align,
  color = "#000",
  fontWeight = "semibold",
}) => {
  return (
    <div
      className={`cursor-pointer flex flex-col lg:grid gap-${gap} justify-center lg:grid-areas-card lg:grid-cols-card lg:grid-rows-card  md:sticky md:bottom-0 md:self-end`}
    >
      {children}
      <div
        className={`flex justify-${align} text-center items-center grid-in-text`}
      >
        <p
          className="font-helvetica text-[4.8vw] sm:text-[2vw]  md:text-[1vw] 3xl:text-lg text-center "
          style={{ color, fontWeight }}
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
