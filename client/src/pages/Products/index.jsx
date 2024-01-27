import { useEffect, useState } from "react";
import axios from "/src/api/axios";
import { Card, CardDiv, CardImage } from "/src/components/Shared";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productNameFormatter } from "/src/utils";
import { useProductsContext } from "/src/context/productsContext";
import { transition } from "/src/components/Transition";
import { Product } from "..";

const Products = () => {
  const BASE_URL = "http://localhost:5500";
  const { collectionName } = useParams();
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createCards = (arr) => {
    return arr.map((product) => {
      return (
        <Link to={`/products/${productNameFormatter(product.name)}`}>
          <CardDiv
            key={product.name}
            text={product.name}
            price={product.price}
            align="between"
          >
            <Card size="md">
              <CardImage src={`${BASE_URL}/${product.images[0]}`} />
            </Card>
          </CardDiv>
        </Link>
      );
    });
  };

  const displayedElement = collectionName
    ? createCards(
        products.filter((product) =>
          product?.name.toLowerCase().match(collectionName)
        )
      )
    : createCards(products);

  return displayedElement && <div className="">{displayedElement}</div>;
};

export default transition(Products);
