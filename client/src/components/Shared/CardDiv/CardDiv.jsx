import React from "react";

const CardDiv = ({ card, text, price }) => {
  return (
    <div className="grid gap-4">
      <div>{card}</div>
      <div className="flex justify-between">
        <p className="font-garamond text-xl text-[#8e9194]">{text}</p>
        {price && <p>€{price}</p>}
      </div>
    </div>
  );
};

export default CardDiv;
