import { useEffect, useState } from "react";
import axios from "/src/api/axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className=" pt-44 px-5 pb-16"></div>;
};

export default Product;
