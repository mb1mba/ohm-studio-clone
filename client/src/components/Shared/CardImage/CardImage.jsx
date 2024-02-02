import React from "react";

const CardImage = ({ src, type }) => {
  const styles = {
    visible: "opacity-1",
    hidden:"opacity-0 hover:opacity-100"
  };
  
  const style = styles[type]
  return (
    <img className={`rounded-xl w-full object-cover md:grid-in-images ${style}`} src={src} alt="" />
  );
};

export default CardImage;
