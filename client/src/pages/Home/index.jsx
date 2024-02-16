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
import { TextReveal } from "/src/components/Reveal";
import { transition } from "/src/components/Transition";
import { SelectedProducts } from "/src/components/SelectedProducts";

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

        <div className=" grid w-full md:h-screen relative max-w-[90%] mx-auto">
          <div className="md:flex md:self-end">
            <div className="grid gap-10 my-20 md:pt-40 md:pb-40">
              <div className="text-4xl md:text-xl">
                <div className="flex items-baseline w-full  ">
                  <TextReveal>
                    <Text>PION</Text>
                  </TextReveal>
                  <TextReveal>
                    <span className="flex font-garamond md:text-xl lg:text-3xl xl:text-5xl ">
                      &nbsp;—&nbsp;
                      <span className=" flex md:hidden ">4</span>
                      <span className=" hidden sm:flex">Four</span>
                      &nbsp;colored
                    </span>
                  </TextReveal>
                </div>
                <TextReveal>
                  <span className="font-garamond md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl">
                    stools&nbsp;
                    <span className="font-helvetica text-3xl md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl ">
                      made in France
                    </span>
                  </span>
                </TextReveal>

                <TextReveal>
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl ">
                    from recycled steel
                  </span>
                </TextReveal>

                <TextReveal>
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl ">
                    assembled by hand
                  </span>
                </TextReveal>
                <TextReveal>
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl ">
                    and then powder
                  </span>
                </TextReveal>
                <TextReveal>
                  <span className=" font-helvetica text-3xl md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl ">
                    coated.
                  </span>
                </TextReveal>
              </div>

              <TextReveal>
                <Link
                  className=" font-helvetica text-[#8e9194] relative max-w-fit overflow-hidden"
                  to="collections/pion"
                >
                  <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                    Shop Now
                  </span>
                </Link>
              </TextReveal>
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
          initial={{ scale: 0.95 }}
          animate={{
            scale: inView ? 1 : 0.95,
            transition: { duration: 0.4, ease: [0.61, 1, 0.88, 1] },
          }}
          exit={{ scale: 0.95 }}
        >
          <section className="">
            <div className=" py-[5vw]  mx-[5vw]  grid gap-20 md:grid-cols-2">
              <div className="grid">
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
            <div className="py-[5vw]  mx-[5vw] grid gap-20 md:grid-cols-auto*2 relative">
              <CardDiv text="BLOC - Raw " price="1.125,00">
                <Card size="md">
                  <CardImage
                    src="http://localhost:5500/uploads/bloc-brush01.webp"
                    type="visible"
                  />
                  <CardImage
                    src="http://localhost:5500/uploads/bloc-brush02.webp"
                    type="hidden"
                  />
                </Card>
              </CardDiv>

              <div className="grid justify-end">
                <img
                  src="/images/home-img2.webp"
                  className=" w-full md:min-h-[550px] md:h-[75vw] flex rounded-lg justify-end"
                />
                <p className="flex justify-between w-full font-helvetica">
                  <span className=" font-garamond font-semibold  text-[#8E9391] ">
                    BLOC in OHM interiors
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="py-[5vw] mx-[5vw]  grid gap-20 row-auto md:grid-cols-2">
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
            <div className="py-[5vw] gap-20  mx-[5vw] grid  md:grid-cols-auto*2 relative">
              <CardDiv
                className="col-start-2"
                text="PION - Orange"
                price="600"
                align="between"
                order="2"
                justify="justify-end"
              >
                <Card size="md">
                  <CardImage
                    src="http://localhost:5500/uploads/pion-orange.webp"
                    type="visible"
                  />
                  <CardImage
                    src="http://localhost:5500/uploads/pion-orange02.webp"
                    type="hidden"
                  />
                </Card>
              </CardDiv>

              <div className="grid gap-4 justify-start">
                <img
                  src="http://localhost:5500/uploads/pion-collection.webp"
                  className=" w-full md:min-h-[550px] md:h-[75vw] rounded-lg"
                />
                <p className="flex justify-between w-full font-helvetica">
                  <span className=" font-garamond font-semibold  text-[#8E9391] ">
                    Orange PION created for COLLECTIBLE 2023
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="  py-[5vw] mx-[5vw] grid  gap-20 md:grid-cols-2">
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
            <div className="py-[5vw]  mx-[5vw] grid gap-10 md:grid-cols-auto*2 relative">
              <CardDiv text="BAN - Black" price="1920.00" justify="justify-end">
                <Card size="md">
                  <CardImage
                    src="http://localhost:5500/uploads/ban-black01.webp"
                    type="visible"
                  />
                  <CardImage
                    src="http://localhost:5500/uploads/ban-black02.webp"
                    type="hidden"
                  />
                </Card>
              </CardDiv>

              <div className="grid justify-end">
                <img
                  src="http://localhost:5500/uploads/ban-collection.webp"
                  className="w-full md:min-h-[550px] md:h-[75vw] object-cover rounded-lg"
                />
                <p className="flex justify-between w-full font-helvetica">
                  <span className=" font-garamond font-semibold  text-[#8E9391] ">
                    BAN collection
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="mx-[5vw]  grid  gap-y-9">
              <SelectedProducts />
            </div>
          </section>

          <section>
            <div className="mx-[5vw] grid">
              <div className="grid gap-10">
                <div className="w-full h-[93vw]  md:row-start-1 md:col-start-1">
                  <img
                    src="images/blue.webp"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="grid gap-10 w-full min-h-72  p-[10vw] rounded-xl bg-[#f5f4f4] md:w-64 md:h-64 md:p-4 md:row-start-1 md:col-start-1 md:self-end md:mb-5 md:ml-5">
                  <div className="flex flex-col justify-between">
                    <p className=" font-helvetica text-[10vw] md:text-[2vw]">
                      BLOC
                    </p>
                    <p className=" font-helvetica text-[5vw] md:text-[1vw]">
                      Three aluminum chairs made in France in three versions :
                      raw or brushed aluminum, and powder-coated blue.
                    </p>
                  </div>
                  <div className="overflow-hidden max-w-fit">
                    <Link
                      className=" font-helvetica text-[#8e9194] text-[5vw] md:text-[1vw] relative max-w-fit overflow-hidden"
                      classNameto="/collections/bloc"
                    >
                      <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                        Buy Now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mx-[2vw]  grid gap-y-9 ">
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
            </div> */}
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default transition(Home);
