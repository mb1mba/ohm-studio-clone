import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "/src/api/axios";

import { CardDiv, CardImage } from "/src/components/Shared";
import { productNameFormatter } from "/src/utils";
import { useProductsContext } from "/src/context/productsContext";
import { transition } from "/src/components/Transition";
import { cardProductNameFormatter } from "/src/utils";

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
            text={cardProductNameFormatter(product.name)}
            price={product.price}
            align="between"
          >
            <div className="grid min-h-[115vw] sm:min-h-[27rem] md:min-h-[29.5vw]  md:max-w-fit self-center">
              <CardImage
                src={`${BASE_URL}/${product.images[0]}`}
                type="visible"
              />
              <CardImage
                src={`${BASE_URL}/${product.images[1]}`}
                type="hidden"
              />
            </div>
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

  return (
    displayedElement && (
      <div className="grid row-auto pb-[14vw] sm:grid-cols-2  md:grid-cols-4 gap-8 md:gap-x-[1vw] md:gap-y-[1vw]">
        {displayedElement}
      </div>
    )
  );
};

export default transition(Products);
