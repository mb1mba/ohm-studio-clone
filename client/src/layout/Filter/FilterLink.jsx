import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({ path, title }) => {
  return <NavLink to={path}>{title}</NavLink>;
};

export default FilterLink;
