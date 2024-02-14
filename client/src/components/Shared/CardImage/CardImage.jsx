import React from "react";

const CardImage = ({ src, height = "100%", type, selectedProduct }) => {
  const styles = {
    visible: "opacity-1",
    hidden: "hidden md:block md:opacity-0 md:hover:opacity-100",
  };

  const style = styles[type];
  return (
    <img
      className={`rounded-xl w-full h-full object-cover md:w-60 md:h-80 lg:w-80 lg:h-[27rem] xl:w-[27.5rem] xl:h-[36rem] 2xl:w-[29rem] 2xl:h-[40rem] 3xl:w-[42rem] 3xl:${
        selectedProduct ? "h-[40rem]" : "h-[56rem]"
      } md:grid-in-images ${style} h-[${height}]`}
      src={src}
      alt=""
    />
  );
};

export default CardImage;
