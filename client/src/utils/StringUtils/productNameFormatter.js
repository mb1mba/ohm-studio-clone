const productNameFormatter = (string) => {
  return string.toLowerCase().split(" ").join("-");
};

const caseFormatter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

const cardProductNameFormatter = (text) => {
  const splittedText = text && text.split(" ");
  return splittedText
    .map((el, i) =>
      i === 0 ? el.toUpperCase() : el.charAt(0).toUpperCase() + el.slice(1)
    )

    .join(" - ");
};

export { productNameFormatter, caseFormatter, cardProductNameFormatter };
