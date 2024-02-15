import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "/src/api/axios";
import { productNameFormatter } from "/src/utils";
import { CardDiv, CardImage, Card, CardText } from "../Shared";
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
    <div className="grid gap-32 w-full text-center ">
      <h2 className="text-4xl font-helvetica font-medium md:text-[45px] lg:text-6xl xl:text-[80px] 3xl:text-8xl">
        Selected Products
      </h2>

      <div className="grid grid-cols-2 md:flex md:min-w-0 gap-x-5 gap-y-9 ">
        {products
          ?.filter((product) => product.isSelected)
          ?.map((product) => (
            <Link
              className="basis-full"
              to={`/products/${productNameFormatter(product.name)}`}
            >
              <CardDiv text={product.name} align="center">
                <Card size="md">
                  <CardImage
                    src={`http://localhost:5500/${product.images[0]}`}
                    type="visible"
                    height="100%"
                    selectedProduct="true"
                  />
                  <CardImage
                    height="100%"
                    type="hidden"
                    src={`http://localhost:5500/${product.images[1]}`}
                    selectedProduct="true"
                  />
                </Card>
              </CardDiv>
            </Link>
          ))}
      </div>

      <div className="w-full flex justify-center pb-20">
        <Link
          className="relative max-w-fit overflow-hidden flex justify-center"
          to="collections/pion"
        >
          <span className="before:h-[1px] before:w-full before:bg-[#8e9194] text-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
            See all
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SelectedProducts;
