import React from "react";
import { Link } from "react-router-dom";
import { Text } from "/src/components/Shared";
import LinkCard from "/src/components/LinkCard";

const Home = () => {
  return (
    <>
      <section className="grid w-full justify-center">
        <img
          className=" rounded-t-xl"
          src="images/Session_studio_OHM-256-2.webp"
        />
        <div className="w-full bg-[#f2eef0]">
          <div className=" max-w-[86.67%] m-auto grid row-span-2 gap-10 pb-16">
            <div className=" text-4xl">
              <div className="flex items-baseline w-full  ">
                <Text>PION</Text>
                <span className="flex font-garamond">
                  &nbsp;—&nbsp;
                  <span className=" flex lg:hidden">4</span>
                  <span className=" hidden sm:flex">Four</span>
                  &nbsp;colored
                </span>
              </div>
              <span className="flex overflow-hidden">
                <span className="font-garamond">
                  stools&nbsp;
                  <span className="font-helvetica text-3xl">
                    made in France
                  </span>
                </span>
              </span>
              <span className="flex overflow-hidden">
                <span className=" font-helvetica text-3xl">
                  from recycled steel
                </span>
              </span>
              <span className="flex overflow-hidden">
                <span className=" font-helvetica text-3xl">
                  assembled by hand
                </span>
              </span>
              <span className="flex overflow-hidden">
                <span className=" font-helvetica text-3xl">
                  and then powder
                </span>
              </span>
              <span className=" font-helvetica text-3xl">coated.</span>
            </div>
            <Link
              className=" font-helvetica text-[#8e9194]"
              to="collections/pion"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="  py-9 max-w-[86.67%] m-auto grid row-span-2 gap-10">
          <div className="grid row-span-2 gap-4">
            <p className=" font-helvetica text-xl">
              The BLOC chair.
              <br />1 metal sheet, 2 pleats, 4 screws.
              <br /> Her line like her conception is clear simplicity,
              triviality.
            </p>
            <Link
              className=" font-helvetica text-[#8e9194]"
              to="collections/bloc"
            >
              Discover
            </Link>
          </div>

          <div className=" inline">
            <span className=" font-garamond text-4xl">
              — To make something better with less&nbsp;
            </span>
            <span className=" font-helvetica text-3xl">
              To make something more beautiful with nothing. A story of blissful
              sobriety. <br />
              Like a child’s answer to an adult’s query.
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="py-9 max-w-[86.67%] m-auto grid row-span-2 gap-10">
          <LinkCard size="lg" />
          <div className="grid gap-4">
            <img src="images/home-img2.webp" className="rounded-xl" />
            <p className=" font-garamond text-xl text-[#8e9194]">
              BAN collection
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="py-9 max-w-[86.67%] m-auto grid row-auto gap-10">
          <div className="inline">
            <span className="font-garamond text-4xl">
              — A traditional approach&nbsp;
            </span>
            <span className=" font-helvetica text-3xl">
              while imagining what the furniture of tomorrow could be, in its
              use and representation.
            </span>
          </div>

          <div className="grid row-span-2 gap-4">
            <p className="font-helvetica text-xl">
              OHM is a collectible furniture studio backed by a manufacturing
              workshop.
            </p>
            <Link
              className=" font-helvetica text-[#8e9194]"
              to="collections/bloc"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="  py-9 max-w-[86.67%] m-auto grid row-span-2 gap-10">
          <div className="grid gap-4">
            <img src="images/pion.webp" className="rounded-xl" />
            <p className=" font-garamond text-xl text-[#8e9194]">
              Orange PION created for COLLECTIBLE 2023
            </p>
          </div>
          <LinkCard size="lg" />
        </div>
      </section>

      <section>
        <div className="  py-9 max-w-[86.67%] m-auto grid row-span-2 gap-10">
          <div className="grid row-span-2 gap-4">
            <p className="font-helvetica text-xl">
              OHM is a collectible furniture studio backed by a manufacturing
              workshop.
            </p>
            <Link
              className=" font-helvetica text-[#8e9194]"
              to="collections/bloc"
            >
              Learn More
            </Link>
          </div>
          <div className=" inline">
            <span className=" font-garamond text-4xl">
              — Influenced by images know&nbsp;
            </span>
            <span className=" font-helvetica text-3xl">
              to the human eye, our pieces of furniture are simple and yet
              thought-through to be used in different ways.
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="  py-9 max-w-[86.67%] m-auto grid row-span-2 gap-10">
          <div className="grid gap-4">
            <img src="images/pion.webp" className="rounded-xl" />
            <p className=" font-garamond text-xl text-[#8e9194]">
              Orange PION created for COLLECTIBLE 2023
            </p>
          </div>
          <LinkCard size="lg" />
        </div>
      </section>

      <section>
        <div className="max-w-[86.67%] m-auto grid row-span-3 gap-y-9">
          <div>
            <p className=" text-4xl font-helvetica font-medium">
              Selected Products
            </p>
          </div>

          <div className="grid grid-cols-2 grid-flow-row  gap-x-5 gap-y-9">
            <LinkCard size="sm" />
            <LinkCard size="sm" />
            <LinkCard size="sm" />
            <LinkCard size="sm" />
            <LinkCard size="sm" />
          </div>

          <div className="w-full text-center">
            <Link className="" to="collections/pion">
              See All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 grid-flow-row  gap-x-5 gap-y-9"></div>
      </section>
    </>
  );
};

export default Home;
