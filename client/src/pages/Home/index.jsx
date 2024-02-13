import React, { useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Text,
  Card,
  CardDiv,
  CardText,
  CardImage,
} from "/src/components/Shared";
import { transition } from "/src/components/Transition";

const Home = () => {
  const images = ["red.webp", "blue.webp", "green.webp", "yellow.webp"];

  const randomIndex = Math.floor(Math.random() * 4);
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.05 });

  // useEffect(() => {
  //   if (inView) {
  //     animation.start("visible");
  //   } else {
  //     animation.start("hidden");
  //   }
  // }, [animation, inView]);

  const imagesEl = images.map((image, i) => (
    <motion.img
      key={i}
      loading="lazy"
      src={`http://localhost:5500/uploads/${image}`}
      height="963"
      width="863"
      className="max-w-full"
      style={{
        display: i !== randomIndex ? "none" : "block",
      }}
    />
  ));

  return (
    <>
      <section className="grid w-full justify-center md:min-w-screen md:justify-stretch md:h-[300vw] md:z-[1] md:sticky md:top-0 bg-[#e3e3e3] ">
        <picture className="md:hidden">
          <img
            className=" rounded-t-xl w-full"
            src="images/Session_studio_OHM-256-2.webp"
          />
        </picture>

        <div className=" grid w-full h-screen relative max-w-[90%] mx-auto">
          <div className="flex self-end">
            <div className="grid gap-10 md:pt-40 md:pb-40">
              <div className="text-4xl md:text-xl">
                <div className="flex items-baseline w-full  ">
                  <Text>PION</Text>
                  <span className="flex font-garamond md:text-xl lg:text-3xl">
                    &nbsp;—&nbsp;
                    <span className=" flex md:hidden ">4</span>
                    <span className=" hidden sm:flex">Four</span>
                    &nbsp;colored
                  </span>
                </div>
                <span className="flex overflow-hidden">
                  <span className="font-garamond md:text-xl lg:text-3xl">
                    stools&nbsp;
                    <span className="font-helvetica text-3xl md:text-xl lg:text-3xl">
                      made in France
                    </span>
                  </span>
                </span>
                <span className="flex overflow-hidden">
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl">
                    from recycled steel
                  </span>
                </span>
                <span className="flex overflow-hidden">
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl">
                    assembled by hand
                  </span>
                </span>
                <span className="flex overflow-hidden">
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl">
                    and then powder
                  </span>
                </span>
                <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl">
                  coated.
                </span>
              </div>
              <Link
                className=" font-helvetica text-[#8e9194]"
                to="collections/pion"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <picture className="hidden absolute md:-bottom-24  lg:right-20 right-28  md:grid">
            <img
              sizes="(max-width: 1726px) 100vw, 1726px"
              srcset="
            http://localhost:5500/uploads/red_yzy5gv_c_scale,w_768.webp 768w,
            http://localhost:5500/uploads/red_yzy5gv_c_scale,w_1096.webp 1024w,
            http://localhost:5500/uploads/red_yzy5gv_c_scale,w_1404.webp 1404w,
            http://localhost:5500/uploads/red_yzy5gv_c_scale,w_1668.webp 1668w,
            http://localhost:5500/uploads/red_yzy5gv_c_scale,w_1726.webp 1726w"
              src="red_yzy5gv_c_scale,w_1726.webp"
              alt=""
              className="w-[48vw] max-w-[865px]"
            />
          </picture>
        </div>
      </section>

      <AnimatePresence>
        <motion.div
          ref={ref}
          className="bg-white rounded-t-3xl m-auto md:z-[2] block md:relative md:rounded-xl   "
          // initial={{ scale: 0.95 }}
          // animate={{
          //   scale: inView ? 1 : 0.95,
          //   transition: { duration: 0.4, ease: [0.61, 1, 0.88, 1] },
          // }}
          // exit={{ scale: 0.95 }}
        >
          <section className="">
            <div className=" py-9 mx-20 grid gap-10 md:grid-cols-2">
              <div className="grid gap-4">
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
                  To make something more beautiful with nothing. A story of
                  blissful sobriety. <br />
                  Like a child’s answer to an adult’s query.
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="py-9 mx-20 grid gap-10 md:grid-cols-2">
              <CardDiv text="BLOC - Raw " price="1.125,00">
                <Card size="md">
                  <CardImage src="images/ban-gray.webp" />
                </Card>
              </CardDiv>

              <CardDiv text="BAN collection">
                <Card size="md">
                  <CardImage src="images/home-img2.webp" />
                </Card>
              </CardDiv>
            </div>
          </section>

          <section>
            <div className="py-9 mx-20 grid row-auto gap-10  md:grid-cols-2">
              <div className="inline">
                <span className="font-garamond text-4xl">
                  — A traditional approach&nbsp;
                </span>
                <span className=" font-helvetica text-3xl">
                  while imagining what the furniture of tomorrow could be, in
                  its use and representation.
                </span>
              </div>

              <div className="grid row-span-2 gap-4">
                <p className="font-helvetica text-xl">
                  OHM is a collectible furniture studio backed by a
                  manufacturing workshop.
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
            <div className="  py-9 mx-20 grid gap-10 md:grid-cols-2">
              <CardDiv text="Orange PION created for COLLECTIBLE 2023">
                <Card size="md">
                  <CardImage src="images/pion.webp" />
                </Card>
              </CardDiv>
              <CardDiv text="PION - Orange" price="600">
                <Card>
                  <CardImage src="images/ban-gray.webp" />
                </Card>
              </CardDiv>
            </div>
          </section>

          <section>
            <div className="  py-9 mx-20 grid gap-10 md:grid-cols-2">
              <div className="grid row-span-2 gap-4">
                <p className="font-helvetica text-xl">
                  OHM is a collectible furniture studio backed by a
                  manufacturing workshop.
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
            <div className="  py-9 mx-20 grid gap-10 md:grid-cols-2">
              <CardDiv text="Orange PION created for COLLECTIBLE 2023">
                <Card size="md">
                  <CardImage src="images/pion.webp" />
                </Card>
              </CardDiv>
              <CardDiv text="PION - Orange" price="600">
                <Card>
                  <CardImage src="images/ban-gray.webp" />
                </Card>
              </CardDiv>
            </div>
          </section>

          <section>
            <div className="mx-20 grid  gap-y-9">
              <div>
                <p className=" text-4xl font-helvetica font-medium">
                  Selected Products
                </p>
              </div>

              <div className="grid grid-cols-2 grid-flow-row  gap-x-5 gap-y-9">
                <Card size="sm">
                  <CardImage src="images/ban-gray.webp" />
                </Card>
                <Card size="sm">
                  <CardImage src="images/ban-gray.webp" />
                </Card>
                <Card size="sm">
                  <CardImage src="images/ban-gray.webp" />
                </Card>
                <Card size="sm">
                  <CardImage src="images/ban-gray.webp" />
                </Card>
                <Card size="sm">
                  <CardImage src="images/ban-gray.webp" />
                </Card>
              </div>

              <div className="w-full text-center">
                <Link className="" to="collections/pion">
                  See All
                </Link>
              </div>
            </div>
          </section>

          <section>
            <div className="mx-20 grid gap-y-9 ">
              <CardDiv gap="20">
                <div className="grid gap-6 md:grid-cols-1 md:grid-rows-1 w-full">
                  <Card size="lg">
                    <CardImage src="images/blue.webp" />
                  </Card>
                  <Card size="lg">
                    <CardText
                      title="BLOC"
                      path="/"
                      text="Buy Now"
                      description="Three aluminum chairs made in France in three versions : raw or brushed aluminum, and powder-coated blue."
                    />
                  </Card>
                </div>
                <div className="grid row-span-2 gap-6  ">
                  <Card size="lg">
                    <CardImage src="images/blue.webp" />
                  </Card>
                  <Card size="lg">
                    <CardText
                      title="PION"
                      path="/"
                      text="Buy Now"
                      description="Four colored stools made in France from recycled steel, assembled by hand and then powder coated."
                    />
                  </Card>
                </div>
              </CardDiv>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default transition(Home);
