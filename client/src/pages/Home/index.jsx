import React from "react";
import { Text } from "/src/components/Shared";
import { Link } from "react-router-dom";
const Home = () => {
  return (
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
                <span className="font-helvetica text-3xl">made in France</span>
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
              <span className=" font-helvetica text-3xl">and then powder</span>
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
  );
};

export default Home;
