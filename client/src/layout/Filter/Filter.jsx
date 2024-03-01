import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Drawline } from "/src/components/Shared";
const links = [
  {
    title: "Pion",
    path: "collections/pion",
  },
  {
    title: "Ban",
    path: "collections/ban",
  },
  {
    title: "Bloc",
    path: "collections/bloc",
  },
];

const Filter = () => {
  const { collectionName } = useParams();

  const styles = {
    selected:
      "md:text-[1.3vw] cursor-pointer text-[#111111]  text-[1vw] 3xl:text-2xl before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-1 ",
    notSelected:
      " md:text-[1.3vw] cursor-pointer text-[#1119] text-[1vw] 3xl:text-2xl before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform",
  };

  const element = links.map((link) => {
    const style =
      collectionName === link.title.toLowerCase()
        ? styles["selected"]
        : styles["notSelected"];

    return (
      <li className="relative max-w-fit overflow-hidden cursor-pointer">
        <NavLink className="relative h-fit" to={link.path}>
          <span className={style}>{link.title}</span>
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <div className="pt-44 px-5 md:px-[2vw] pb-16 ">
        <div className="grid row-auto columns-auto">
          <h1 className=" font-helvetica text-4xl md:text-[2.75vw] 3xl:text-5xl font-semibold pb-5  md:pb-[1vw] ">
            Products
          </h1>
          <Drawline />
        </div>

        <div className="py-9 md:pt-[1vw] md:pb-[2vw]">
          <ul className="flex gap-[3vw]">{element}</ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Filter;
