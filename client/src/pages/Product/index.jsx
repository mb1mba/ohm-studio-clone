import React from "react";
import { Drawline } from "/src/components/Shared";
import { Accordion } from "/src/components/Accordion";
import AccordionBody from "/src/components/Accordion/AccordionBody";
import AccordionHeader from "/src/components/Accordion/AccordionHeader";
import { Link } from "react-router-dom";
import { CardImage, Card, CardDiv } from "/src/components/Shared";

const Product = () => {
  const productsData = [
    {
      title: "Description",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium recusandae suscipit dicta soluta sunt, sapiente, minima consequatur nihil repellendus ea sed natus illum reiciendis excepturi ipsam laboriosam praesentium? Cumque.",
    },

    {
      title: "Dimensions",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium recusandae suscipit dicta soluta sunt, sapiente, minima consequatur nihil repellendus ea sed natus illum reiciendis excepturi ipsam laboriosam praesentium? Cumque.",
    },
    {
      title: "Material & Finishes",
      text: "Solid French ash then varnished with a natural or black stain.",
    },
  ];

  return (
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
            <p>€1.590,00€</p>
            <Drawline />
          </div>

          <div className="flex justify-between py-7 relative">
            <p>Color</p>
            <p>€1.590,00€</p>
            <Drawline />
          </div>

          <div className="flex justify-between py-7 relative">
            <p>Delivery Time</p>
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
        <Accordion>
          {productsData.map((obj, index) => (
            <div className="border-b border-[#8e91944d]">
              <AccordionHeader title={obj.title} index={index} />
              <AccordionBody text={obj.text} index={index} />
            </div>
          ))}
        </Accordion>
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
  );
};

export default Product;
