import React, { useEffect, useState } from "react";
import axios from "/src/api/axios";
import { Drawline } from "/src/components/Shared";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "/src/components/Accordion";
import { Info, InfoBody, InfoTitle } from "/src/components/VerticalProductInfo";
import { Link, useParams } from "react-router-dom";
import { CardImage, Card, CardDiv } from "/src/components/Shared";
import { productNameFormatter } from "/src/utils";
import { TextReveal } from "/src/components/Reveal";
import { useProductsContext } from "/src/context/productsContext";
import { transition } from "/src/components/Transition";
import { useCartContext } from "/src/context/cartContext";
import { SelectedProducts } from "/src/components/SelectedProducts";
import { caseFormatter } from "/src/utils";

const Product = () => {
  const { productName } = useParams();
  const { products, setProducts } = useProductsContext();
  const [product, setProduct] = useState({});
  const { addToCart } = useCartContext();
  const [selectedInfo, setSelectedInfo] = useState("description");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
        const filteredProduct = response.data.filter(
          (prod) => productNameFormatter(prod.name) === productName
        );
        setProduct(filteredProduct);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (!products.length) {
      fetchData();
    } else {
      const filteredProduct = products.filter((prod) => {
        return productNameFormatter(prod.name) === productName;
      });
      setProduct(filteredProduct);
    }
  }, [productName]);

  return (
    product[0] && (
      <>
        <section className="grid md:grid-cols-2 gap-4  ">
          <div className="h-[120vw] md:hidden">
            <img
              className="rounded-2xl object-cover w-full h-full"
              src={`http://localhost:5500/${product[0].images?.[0]}`}
              alt=""
              loading="lazy"
            />
          </div>

          <div className={`md:grid`}>
            {product[0].images.map((image) => (
              <img
                className="hidden object-cover w-full md:h-[460px] md:block lg:h-screen"
                src={`http://localhost:5500/${image}`}
                loading="lazy"
              />
            ))}
          </div>

          <div className=" pt-10 justify-self-center pb-16 md:h-fit md:sticky md:top-0 md:py-[11vw] break-words md:max-w-[29vw]">
            <h1 className="pb-8 md:leading-snug">
              {product[0].description.map((sentence, i) => {
                if (i === 0) {
                  return (
                    <TextReveal width="100%">
                      <span className="  flex w-full font-garamond text-[9.5vw] md:text-[3.125vw] 3xl:text-[57px] leading-none">
                        — {sentence}&nbsp;
                      </span>
                    </TextReveal>
                  );
                } else {
                  return (
                    <TextReveal>
                      <span className=" font-helvetica text-[7.75vw] md:text-[2.7vw] 3xl:text-5xl 3xl:leading-[1.2] block leading-[1.2]">
                        {sentence}
                      </span>
                    </TextReveal>
                  );
                }
              })}
            </h1>

            <div className="grid py-7 md:py-[1vw] gap-1 text-[#8E9194]">
              <div className="flex justify-between">
                <TextReveal>
                  <p className="md:text-[1vw] 3xl:text-lg">Price</p>
                </TextReveal>
                <TextReveal>
                  <p className="md:text-[1vw] 3xl:text-lg">
                    &#8364;{product[0].price?.toFixed(2)}
                  </p>
                </TextReveal>
              </div>
              <Drawline />
            </div>
            <div className="grid  md:py-[1vw]  gap-1 text-[#8E9194]">
              <div className="flex justify-between">
                <TextReveal>
                  <p className="md:text-[1vw] 3xl:text-lg">Color</p>
                </TextReveal>
                <div className="flex gap-2">
                  {product[0].variants?.map((variant) => {
                    return (
                      <TextReveal>
                        <Link
                          className={`h-6 w-6 flex items-center justify-center ${
                            productName === productNameFormatter(variant.name)
                              ? "rounded-full border border-solid border-[#8e919499]"
                              : ""
                          }`}
                          to={`/products/${productNameFormatter(variant.name)}`}
                        >
                          <div
                            style={{ backgroundColor: variant.color }}
                            className=" rounded-full h-4 w-4  "
                          ></div>
                        </Link>
                      </TextReveal>
                    );
                  })}
                </div>
              </div>
              <Drawline />
            </div>

            <div className="flex justify-between py-7 text-[#8E9194] ">
              <TextReveal>
                <p className="md:text-[1vw] 3xl:text-lg">Delivery Time</p>
              </TextReveal>
              <TextReveal>
                <p className="md:text-[1vw] 3xl:text-lg">
                  {product[0].deliveryTime}
                </p>
              </TextReveal>
            </div>

            <div>
              <div className="flex gap-4">
                <div className="flex bg-[#e3e3e3] min-w-36 px-7 py-4 md:p-[1vw] md:min-w-fit rounded-xl">
                  <button
                    onClick={() =>
                      setQuantity((prevQuantity) =>
                        Math.max(prevQuantity - 1, 0)
                      )
                    }
                    className="cursor-pointer  md:text-[1vw] 3xl:text-lg"
                  >
                    -
                  </button>
                  <p className="bg-[#e3e3e3] text-center w-16  md:text-[1vw] 3xl:text-lg">
                    {quantity}
                  </p>
                  <button
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity + 1)
                    }
                    className="cursor-pointer md:t ext-[1vw] 3xl:text-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCart({ ...product[0], quantity })}
                  className="bg-[#e3e3e3] text-center w-full basis-auto rounded-lg md:p-[1vw]"
                  value="Shop Now"
                >
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e3e3e3] py-14 md:pt-[10vw] px-5 items  md:min-h-screen h-fit ">
          <Accordion>
            {Object.keys(product[0]?.info)?.map((obj, index) => (
              <div className="border-b border-[#8e91944d]" key={index}>
                <AccordionHeader title={obj} index={index} />
                {typeof product[0]?.info[obj] === "object" ? (
                  <AccordionBody
                    text={Object.keys(product[0]?.info[obj]).map((ob) => (
                      <div className="flex justify-between" key={ob}>
                        <p>{ob.charAt(0).toUpperCase() + ob.slice(1)}</p>
                        <p>{product[0]?.info[obj][ob]}</p>
                      </div>
                    ))}
                    index={index}
                  />
                ) : (
                  <AccordionBody
                    text={<p>{product[0]?.info[obj]}</p>}
                    index={index}
                  />
                )}
              </div>
            ))}
          </Accordion>

          <Info>
            <div className="grid rows-1 h-24 pl-5 max-w-fit">
              {Object.keys(product[0]?.info)?.map((obj, index) => (
                <InfoTitle
                  key={index}
                  title={obj}
                  selectedOne={selectedInfo}
                  setSelectedOne={setSelectedInfo}
                />
              ))}
            </div>

            <div className="md:text-2xl lg:text-3xl leading-5 font-helvetica max-w-[30vw] grid">
              {Object.keys(product[0]?.info)?.map((obj, index) =>
                typeof product[0]?.info[obj] === "object" ? (
                  obj === selectedInfo && (
                    <ul className="col-start-1 row-start-1 [&>*:nth-child(3)]:py-[2vw] [&>*:nth-child(2)]:py-[2vw] [&>*:nth-child(1)]:pb-[2vw]">
                      {Object.keys(product[0]?.info[obj]).map((element) => (
                        <li className="flex justify-between w-full text-[3vw] 3xl:text-5xl border-b border-[rgba(142,145,148,.3)]  ">
                          <span>{caseFormatter(element)}</span>
                          <span>{product[0]?.info[obj][element]}</span>
                        </li>
                      ))}
                    </ul>
                  )
                ) : (
                  <InfoBody
                    selectedInfo={selectedInfo}
                    currentKey={obj}
                    text={product[0]?.info[obj]}
                  />
                )
              )}
            </div>
          </Info>
        </section>

        <section className="pt-14 px-5 pb-14 ">
          <SelectedProducts />
        </section>
      </>
    )
  );
};

export default transition(Product);
