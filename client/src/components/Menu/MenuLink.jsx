import React from "react";
import { Link } from "react-router-dom";
const MenuLink = ({ path, text }) => {
  return <Link to={path}>{text}</Link>;
};

export default MenuLink;
