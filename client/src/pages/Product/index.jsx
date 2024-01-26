import { useEffect, useState } from "react";
import axios from "/src/api/axios";
import { Drawline } from "/src/components/Shared";
import { Accordion } from "/src/components/Accordion";
import AccordionBody from "/src/components/Accordion/AccordionBody";
import AccordionHeader from "/src/components/Accordion/AccordionHeader";
import { Link, useParams } from "react-router-dom";
import { CardImage, Card, CardDiv } from "/src/components/Shared";
import { productNameFormatter } from "/src/utils";

const Product = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${productName}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [productName]);

  return (
    product && (
      <div className=" ">
        <img className="" src="/images/ban-gray.webp" alt="" />

        <div className=" pt-16 px-5 pb-16">
          <section className="grid col-auto">
            <h1 className=" pb-8 relative">
              <span className="font-garamond text-4xl">
                — Raw aluminum chair&nbsp;
              </span>
              <span className=" font-helvetica text-3xl block">
                made in France.
              </span>
              <span className="font-helvetica text-3xl block">
                1 metal sheet, 2 pleats, 4 screws, to make something better with
                less.
              </span>
              <Drawline />
            </h1>

            <div className="flex justify-between py-7 relative">
              <p>Price</p>
              <p>&#8364;{product[0].price.toFixed(2)}</p>
              <Drawline />
            </div>

            <div className="flex justify-between py-7 relative">
              <p>Color</p>
              <div className="flex gap-2">
                {product[0].variants.map((variant) => {
                  return (
                    <Link
                      className={`h-6 w-6 flex items-center justify-center ${"rounded-full border border-solid border-red-600"}`}
                      to={`/products/${productNameFormatter(variant.name)}`}
                    >
                      <div
                        style={{ backgroundColor: variant.color }}
                        className=" rounded-full h-4 w-4  "
                      ></div>
                    </Link>
                  );
                })}
              </div>
              <Drawline />
            </div>

            <div className="flex justify-between py-7 relative">
              <p>Delivery Time</p>
              <p>{product[0].deliveryTime}</p>
            </div>

            <div>
              <form className="flex gap-4">
                <div className="flex bg-[#e3e3e3] w-[35vw] min-w-36 px-7 py-4 rounded-xl">
                  <div className="cursor-pointer">-</div>
                  <input
                    className="bg-[#e3e3e3] text-center w-16"
                    type="number"
                    value="1"
                    max="20"
                  />
                  <div className="cursor-pointer">+</div>
                </div>
                <input
                  className="bg-[#e3e3e3] text-center w-full basis-auto rounded-lg"
                  type="submit"
                  value="Shop Now"
                />
              </form>
            </div>
          </section>
        </div>

        <section className="bg-[#e3e3e3] pt-14 px-5 pb-14">
          {/* <Accordion>
          {Object.keys(product.info).map((obj, index) => (
            <div className="border-b border-[#8e91944d]">
              <AccordionHeader title={obj} index={index} />
              <AccordionBody text={product.info[obj]} index={index} />
            </div>
          ))}
        </Accordion> */}
        </section>

        <section className="pt-14 px-5 pb-14">
          <div className="grid row-span-3 gap-y-9">
            <div>
              <p className=" text-4xl font-helvetica font-medium">
                Selected Products
              </p>
            </div>

            <div className="grid grid-cols-2 grid-flow-row  gap-x-5 gap-y-9">
              <CardDiv text="BAN - Black" align="center">
                <Card size="sm">
                  <CardImage src="/images/ban-gray.webp" />
                </Card>
              </CardDiv>
              <CardDiv text="BAN - Black" align="center">
                <Card size="sm">
                  <CardImage src="/images/ban-gray.webp" />
                </Card>
              </CardDiv>
              <CardDiv text="BAN - Black" align="center">
                <Card size="sm">
                  <CardImage src="/images/ban-gray.webp" />
                </Card>
              </CardDiv>
              <CardDiv text="BAN - Black" align="center">
                <Card size="sm">
                  <CardImage src="/images/ban-gray.webp" />
                </Card>
              </CardDiv>
              <CardDiv text="BAN - Black" align="center">
                <Card size="sm">
                  <CardImage src="/images/ban-gray.webp" />
                </Card>
              </CardDiv>
            </div>

            <div className="w-full text-center">
              <Link className="" to="collections/pion">
                See All
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default Product;
