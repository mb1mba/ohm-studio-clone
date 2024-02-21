import React from "react";

const Info = ({ children }) => {
  return (
    <div className="hidden md:grid md:grid-cols-2 gap-20 md:max-w-[90%]  mx-auto">
      {children}
    </div>
  );
};

export default Info;
