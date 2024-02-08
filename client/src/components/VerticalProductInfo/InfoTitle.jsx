import React from "react";

const InfoTitle = ({ title }) => {
  return (
    <h3 className="relative font-helvetica cursor-pointer md:text-xl text-2xl after:content-[' '] after:translate-x-0 after:h-[1px] after:w-full after:bg-black after:absolute after:bottom-0  after:left-0 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:duration-300 hover:after:origin-left after:transition-transform">
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </h3>
  );
};

export default InfoTitle;
