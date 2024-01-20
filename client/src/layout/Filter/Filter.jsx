import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const links = [
  {
    title: "Pion",
    path: "collections/pions",
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

const element = links.map((link) => (
  <li>
    <NavLink to={link.path}>{link.title}</NavLink>
  </li>
));

const Filter = () => {
  return (
    <>
      <div>
        <div className="  pt-44 px-5 pb-16 grid row-auto columns-auto relative">
          <h1 className=" font-helvetica text-4xl pb-5">Products</h1>
          <div className="w-full bg-[#8e91944d] h-[1px] bottom-0"></div>
        </div>

        <div className=" mt-9">
          <ul className="flex gap-10">{element}</ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Filter;
