import React from "react";
import { Link } from "react-router-dom";

const CardText = ({ path, text, title, description }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <Link to={path}>{text}</Link>
      </div>
    </div>
  );
};

export default CardText;
