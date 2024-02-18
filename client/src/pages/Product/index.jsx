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
const Product = () => {
  const { productName } = useParams();
  const { products, setProducts } = useProductsContext();
  const [product, setProduct] = useState({});
  const { addToCart } = useCartContext();

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    product[0] && (
      <>
        <section className="grid md:grid-cols-2 gap-4 ">
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

          <div className=" pt-10 justify-self-center pb-16 md:h-[50rem] md:sticky md:top-0 md:py-28 ">
            <h1 className="pb-8">
              <TextReveal>
                <span className="font-garamond text-[9.5vw] md:text-[3.45vw] 3xl:text-6xl leading-snug">
                  — Solid ash coffee table&nbsp;
                </span>
              </TextReveal>
              <TextReveal>
                <span className=" font-helvetica text-[7.75vw] md:text-[3vw] 3xl:text-5xl block leading-snug">
                  stackable, handmade
                </span>
              </TextReveal>
              <TextReveal>
                <span className="font-helvetica text-[7.75vw] md:text-[3vw] 3xl:text-5xl block leading-snug">
                  in our french workshop
                </span>
              </TextReveal>
              <TextReveal>
                <span className="font-helvetica text-[7.75vw] md:text-[3vw] 3xl:text-5xl block leading-snug">
                  and then varnished.
                </span>
              </TextReveal>
            </h1>

            <div className="grid py-7 md:py-[1vw] gap-1">
              <div className="flex justify-between">
                <TextReveal>
                  <p className="md:text-[1vw]">Price</p>
                </TextReveal>
                <TextReveal>
                  <p className="md:text-[1vw]">
                    &#8364;{product[0].price?.toFixed(2)}
                  </p>
                </TextReveal>
              </div>
              <Drawline />
            </div>
            <div className="grid  md:py-[1vw]  gap-1">
              <div className="flex justify-between">
                <TextReveal>
                  <p className="md:text-[1vw]">Color</p>
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

            <div className="flex justify-between py-7 ">
              <TextReveal>
                <p className="md:text-[1vw]">Delivery Time</p>
              </TextReveal>
              <TextReveal>
                <p className="md:text-[1vw]">{product[0].deliveryTime}</p>
              </TextReveal>
            </div>

            <div>
              <div className="flex gap-4">
                <div className="flex bg-[#e3e3e3] min-w-36 px-7 py-4 md:p-[1vw] md:min-w-fit rounded-xl">
                  <div className="cursor-pointer  md:text-[1vw]">-</div>
                  <input
                    className="bg-[#e3e3e3] text-center w-16  md:text-[1vw]"
                    type="number"
                    value="1"
                    max="20"
                  />
                  <div className="cursor-pointer md:text-[1vw]">+</div>
                </div>
                <button
                  onClick={() => addToCart(product[0])}
                  className="bg-[#e3e3e3] text-center w-full basis-auto rounded-lg md:p-[1vw]"
                  value="Shop Now"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e3e3e3] py-14 px-5 items md:h-auto ">
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
                <InfoTitle title={obj} />
              ))}
            </div>

            <div className="md:text-2xl lg:text-3xl leading-5 font-helvetica max-w-[25vw]">
              Directly inspired by trivial everyday objects, PION is the first
              piece in a collection which, through color and simplicity of form,
              attempts to reconcile the adult and the child. With a minimalist
              look, the piece of furniture is not limited to a single use. Thus
              PION can be a stool, a side table or a bedside table. Solo
              monochrome or well accompanied polychrome.
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
