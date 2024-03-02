import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "/src/api/axios";

import { productNameFormatter, cardProductNameFormatter } from "/src/utils";

import { CardDiv, CardImage } from "../Shared";

const SelectedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (!products.length) {
      fetchData();
    }
  }, []);

  return (
    <div className="grid content-center gap-[10vw] md:gap-[3vw] w-full text-center min-h-screen mt-[10vw] md:my-[2.75vw] ">
      <h2 className="text-[9vw] h-fit font-helvetica font-semibold md:text-[45px] self-center lg:text-6xl xl:text-[80px] 3xl:text-8xl">
        Selected Products
      </h2>

      <div className="grid grid-cols-2 md:flex md:min-w-0 gap-x-[5vw] md:gap-x-[1.2vw]  gap-y-[9vw] ">
        {products
          ?.filter((product) => product.isSelected)
          ?.map((product) => (
            <Link
              className="basis-full"
              to={`/products/${productNameFormatter(product.name)}`}
            >
              <CardDiv
                text={cardProductNameFormatter(product.name)}
                align="center"
                fontWeight="normal"
              >
                <div className="grid w-[40.625vw] h-[53.4375vw] md:w-[18vw] md:h-[23.55vw] ">
                  <CardImage
                    src={`http://localhost:5500/${product.images[0]}`}
                    type="visible"
                    selectedProduct="true"
                  />
                  <CardImage
                    type="hidden"
                    src={`http://localhost:5500/${product.images[1]}`}
                    selectedProduct="true"
                  />
                </div>
              </CardDiv>
            </Link>
          ))}
      </div>

      <div className="w-full flex justify-center pb-20">
        <Link
          className="relative max-w-fit h-fit overflow-hidden flex justify-center"
          to="/collections/pion"
        >
          <span className=" font-helvetica md:text-[1vw] 3xl:text-lg before:h-[1px] before:w-full before:bg-[#8e9194] text-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
            See all
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SelectedProducts;
