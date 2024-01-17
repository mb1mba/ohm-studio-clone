import React from "react";
import { Link } from "react-router-dom";

const CustomMenu = () => {
  return (
    <div className="overflow-hidden h-5">
      {content.map((object) => {
        return <CustomMenuLink object={object} />;
      })}
    </div>
  );
};

const CustomMenuLink = ({ object }) => {
  return (
    <div className="">
      <Link to={object.path}>{object.title}</Link>
    </div>
  );
};

const CustomMenuBtn = () => {};

const content = [
  { title: "OHM", path: "/" },
  { title: "PION", path: "/products/pion-green" },
  { title: "BLOC", path: "/products/bloc-raw" },
];

export default CustomMenu;
