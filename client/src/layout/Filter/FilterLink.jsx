import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({ path }) => {
  return <NavLink to={path}></NavLink>;
};

export default FilterLink;
