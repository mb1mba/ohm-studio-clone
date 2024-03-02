import React from "react";

const CardImage = ({ src, height = "100%", type, selectedProduct = false }) => {
  const styles = {
    visible: "opacity-1",
    hidden: "hidden md:block md:opacity-0 md:hover:opacity-100",
  };

  const style = styles[type];
  return (
    <img
      className={`rounded-xl w-full h-full object-cover
      } md:grid-in-images ${style}`}
      src={src}
      alt=""
    />
  );
};

export default CardImage;
