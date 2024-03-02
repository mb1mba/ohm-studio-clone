import React from "react";

const Sentence = ({ array }) => {
  const sen = array.map((s, i) => {
    if (i === 0) {
      return (
        <span className="font-garamond  block  leading-[0.8] md:leading-[1.25] text-[9.25vw] md:text-[3.35vw] 3xl:text-6xl  ">
          —{s}&nbsp;
        </span>
      );
    } else {
      return (
        <span className="font-helvetica block leading-[1.2] md:leading-[1.25] font-semibold text-[8vw] md:text-[3vw] 3xl:text-[3rem]  ">
          {s}
        </span>
      );
    }
  });
  return <div className="inline  ">{sen}</div>;
};

export default Sentence;
