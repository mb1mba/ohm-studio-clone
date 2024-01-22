import React from "react";
import { Drawline } from "/src/components/Shared";
const Product = () => {
  return (
    <div>
      <img className="runded-lg" src="/images/ban-gray.webp" alt="" />

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

      <section className="bg-[#e3e3e3] pt-14 px-5">
        <div className="overflow-hidden">
          <div className="flex justify-between items-center relative  py-5">
            <p className=" font-helvetica text-lg ">Description</p>
            <svg
              fill="none"
              height="7"
              viewBox="0 0 10 7"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" strokeWidth="1.5" stroke="#111111"></path>
            </svg>
            <Drawline />
          </div>

          <div className="max-h-0">
            <p>
              Her line like her conception is clear simplicity, triviality, and
              sends us back to the notion of frugality. To make something better
              with less. To make something more beautiful with nothing. A story
              of blissful sobriety. Like a child’s answer to an adult’s query.
              The joy of the color before the austerity of the metal. Made in
              France, in aluminum.{" "}
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex justify-between items-center relative  py-5">
            <p className=" font-helvetica text-lg ">Dimensions</p>
            <svg
              fill="none"
              height="7"
              viewBox="0 0 10 7"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" strokeWidth="1.5" stroke="#111111"></path>
            </svg>
            <Drawline />
          </div>

          <div className="max-h-0">
            <p>product dimensions</p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex justify-between items-center relative  py-5">
            <p className=" font-helvetica text-lg ">Material & Finishes</p>
            <svg
              fill="none"
              height="7"
              viewBox="0 0 10 7"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" strokeWidth="1.5" stroke="#111111"></path>
            </svg>
            <Drawline />
          </div>

          <div className="max-h-0">
            <p>Products materials</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
