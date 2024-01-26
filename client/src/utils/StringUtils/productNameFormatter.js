const productNameFormatter = (string) => {
  return string.toLowerCase().split(" ").join("-");
};

export default productNameFormatter;
