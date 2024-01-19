import React from "react";
import { Link } from "react-router-dom";

const CardText = ({ path, text, title, description }) => {
  return (
    <div className="bg-[#f5f4f4] w-full h-full py-11 px-14 rounded-xl  grid gap-7">
      <div>
        <h3 className=" font-favorit text-4xl mb-3 font-bold">{title}</h3>
        <p className=" font-helvetica text-lg">{description}</p>
      </div>
      <div>
        <Link
          className="font-helvetica text-[#8e9194] underline underline-offset-8"
          to={path}
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default CardText;
