import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

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

  const element = links.map((link) => {
    const style = ` hover:underline hover:underline-offset-4  ${
      collectionName === link.title.toLowerCase() &&
      "underline underline-offset-4"
    }`;
    return (
      <li>
        <NavLink className={style} to={link.path}>
          {link.title}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <div className="pt-44 px-5 pb-16 ">
        <div className="grid row-auto columns-auto">
          <h1 className=" font-helvetica text-4xl pb-5">Products</h1>
          <div className="w-full bg-[#8e91944d] h-[1px]"></div>
        </div>

        <div className=" my-9">
          <ul className="flex gap-10">{element}</ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Filter;
