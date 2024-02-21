import React from "react";
import { caseFormatter } from "/src/utils";
const InfoTitle = ({ title, selectedOne, setSelectedOne }) => {
  const styles = {
    selected:
      "relative font-helvetica cursor-pointer md:text-[1.3vw] text-2xl 3xl:text-[25px] after:content-[' '] after:absolute after:bottom-0 after:left-0 after:bg-[#1119]  after:w-full after:h-[1px] after:translate-x-100 md:mb-[1vw] md:pb-[0.5vw]",
    notSelected:
      "relative font-helvetica cursor-pointer text-[#1119] md:text-[1.3vw] text-2xl 3xl:text-[25px]  after:content-[' '] after:translate-x-0 after:h-[1px] after:w-full after:bg-[#1119] after:absolute after:bottom-0  after:left-0 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:duration-300 hover:after:origin-left after:transition-transform md:mb-[1vw] md:pb-[0.5vw]",
  };

  const style =
    title === selectedOne ? styles["selected"] : styles["notSelected"];

  return (
    <h3 onClick={() => setSelectedOne(title)} className={style}>
      {caseFormatter(title)}
    </h3>
  );
};

export default InfoTitle;
