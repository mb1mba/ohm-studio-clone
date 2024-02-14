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
    <div className="grid gap-y-9 w-full">
      <p className="text-4xl font-helvetica font-medium">Selected Products</p>

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

      <div className="w-full text-center">
        <Link className="" to="collections/pion">
          See All
        </Link>
      </div>
    </div>
  );
};

export default SelectedProducts;
