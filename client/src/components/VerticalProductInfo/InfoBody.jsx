import React from "react";

const InfoBody = ({ text, selectedInfo, currentKey }) => {
  return (
    <p
      className={`text-[2.75vw] f 3xl:text-5xl font-bold leading-snug pb-20 relative col-start-1 row-start-1 ${
        selectedInfo === currentKey ? "opacity-100" : "opacity-0"
      }`}
    >
      {text}
    </p>
  );
};

export default InfoBody;
