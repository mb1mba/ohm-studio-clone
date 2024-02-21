const productNameFormatter = (string) => {
  return string.toLowerCase().split(" ").join("-");
};

const caseFormatter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

export { productNameFormatter, caseFormatter };
