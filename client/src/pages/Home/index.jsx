import React, { useRef, useCallback, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

import { Text, CardDiv, CardText, CardImage } from "/src/components/Shared";

import { TextReveal } from "/src/components/Reveal";
import { Sentence } from "/src/components/Sentence";
import { transition } from "/src/components/Transition";
import { SelectedProducts } from "/src/components/SelectedProducts";

const Home = () => {
  const images = ["red.webp", "blue.webp", "green.webp", "yellow.webp"];

  const randomIndex = Math.floor(Math.random() * 4);
  const [ref, inView, entry] = useInView({ threshold: 0.05 });
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 });
  const { isFooterInView } = useOutletContext();

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

  const getScale = () => {
    if (isTabletOrBigger) {
      if (inView && !isFooterInView) {
        return 1;
      } else if (inView && isFooterInView) {
        return 0.95;
      }
    } else {
      return 1;
    }
  };

  return (
    <>
      <section className="grid w-full justify-center md:min-w-screen md:justify-stretch md:h-[300vw] md:z-[1] md:sticky md:top-0 bg-[#f2eef0] ">
        <picture className="md:hidden">
          <img
            className=" rounded-t-xl w-full"
            src="images/Session_studio_OHM-256-2.webp"
          />
        </picture>

        <div className=" grid w-full md:h-screen relative max-w-[90%] mx-auto">
          <div className="md:flex md:self-end">
            <div className="grid gap-10 my-20 md:pt-40 md:pb-40">
              <div className="text-[4vw] leading-[1.25] md:text-xl">
                <div className="flex items-baseline w-full">
                  <TextReveal>
                    <Text>PION</Text>
                  </TextReveal>
                  <TextReveal>
                    <span className="flex font-garamond text-[5.65vw] md:text-xl lg:text-3xl xl:text-5xl ">
                      &nbsp;—&nbsp;
                      <span className=" flex md:hidden ">4</span>
                      <span className=" hidden sm:flex">Four</span>
                      &nbsp;colored
                    </span>
                  </TextReveal>
                </div>
                <TextReveal>
                  <span className="font-garamond text-[5.65vw] md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl">
                    stools&nbsp;
                    <span className="font-helvetica text-[8vw] md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-semibold">
                      made in France
                    </span>
                  </span>
                </TextReveal>

                <TextReveal>
                  <span className=" font-helvetica text-[8vw] md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-semibold">
                    from recycled steel
                  </span>
                </TextReveal>

                <TextReveal>
                  <span className=" font-helvetica text-[8vw] md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-semibold">
                    assembled by hand
                  </span>
                </TextReveal>
                <TextReveal>
                  <span className=" font-helvetica text-[8vw] md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-semibold">
                    and then powder
                  </span>
                </TextReveal>
                <TextReveal>
                  <span className=" font-helvetica text-[8vw] md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-semibold">
                    coated.
                  </span>
                </TextReveal>
              </div>

              <TextReveal>
                <Link
                  className=" font-helvetica text-[#8e9194] relative max-w-fit overflow-hidden"
                  to="collections/pion"
                >
                  <span className=" before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
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
          className="bg-white rounded-t-3xl m-auto md:z-[2] block md:relative md:rounded-xl"
          initial={{ scale: 0.95 }}
          animate={{
            scale: getScale(),
            transition: { duration: 0.4, ease: [0.61, 1, 0.88, 1] },
          }}
          exit={{ scale: 0.95 }}
        >
          <section className="">
            <div className=" py-[5.65vw]  mx-[6.75vw] md:mx-[2.75vw]  grid gap-[13vw] md:gap-[8vw] md:grid-cols-3/10">
              <div className="flex flex-col gap-4 md:gap-[1vw]">
                <p className="font-helvetica text-xl md:text-[1.5vw] 3xl:text-[1.6rem] leading-[1.25] font-semibold">
                  The BLOC chair.
                  <br />
                  1 metal sheet, 2 pleats, 4 screws.
                  <br />
                  Her line like her conception is clear simplicity, triviality.
                </p>
                <Link
                  className="font-helvetica text-[4vw] md:text-[1vw] 3xl:text-lg text-[#8e9194] relative overflow-hidden w-fit"
                  to="collections/bloc"
                >
                  <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                    Discover
                  </span>
                </Link>
              </div>

              <Sentence
                array={[
                  "To make something better with less",
                  <>
                    To make something more beautiful with nothing.
                    <br />
                    A story of blissful sobriety.
                    <br />
                    Like a child’s answer to an adult’s query.
                  </>,
                ]}
              />
            </div>
          </section>

          <section>
            <div className="py-[5.65vw] mx-[6.75vw] md:mx-[2.75vw]  grid  gap-[16vw] md:gap-[8vw] md:grid-cols-3/10 relative">
              <CardDiv text="BLOC - Raw " price="1.125,00" align="between">
                <div className="grid">
                  <CardImage
                    src="http://localhost:5500/uploads/bloc-brush01.webp"
                    type="visible"
                  />
                  <CardImage
                    src="http://localhost:5500/uploads/bloc-brush02.webp"
                    type="hidden"
                  />
                </div>
              </CardDiv>

              <div className="grid justify-end gap-4">
                <img
                  src="/images/home-img2.webp"
                  className="w-full md:min-h-[550px] md:h-[75vw] flex rounded-lg justify-end"
                />
                <p className="flex justify-between w-full font-helvetica">
                  <span className="font-garamond font-semibold  text-[#8E9391] md:text-[1.35vw] 3xl:text-lg">
                    BLOC in OHM interiors
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="py-[5.65vw]  mx-[6.75vw] md:mx-[2.75vw]  grid gap-[14vw] md:grid-cols-10/3 relative">
              <Sentence
                array={[
                  "A traditional approach",
                  "while imagining what the furniture of tomorrow could be, in its use and representation.",
                ]}
              />

              <div className="flex flex-col gap-4  md:gap-[1vw]">
                <p className="font-helvetica text-xl md:text-[1.5vw] 3xl:text-[1.6rem] leading-[1.25] font-semibold">
                  OHM is a collectible furniture studio backed by a
                  manufacturing workshop.
                </p>
                <Link
                  className=" font-helvetica text-[4vw] md:text-[1vw] 3xl:text-lg text-[#8e9194] relative overflow-hidden w-fit "
                  to="collections/pion"
                >
                  <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                    Learn more
                  </span>
                </Link>
              </div>
            </div>
          </section>

          <section>
            <div className="py-[5.65vw]  mx-[6.75vw] md:mx-[2.75vw]  grid gap-[14vw] md:grid-cols-10/3 relative">
              <CardDiv
                text="PION - Orange"
                price="600"
                align="between"
                justify="justify-end"
                start="col-start-2"
              >
                <div className="grid">
                  <CardImage
                    src="http://localhost:5500/uploads/pion-orange.webp"
                    type="visible"
                  />
                  <CardImage
                    src="http://localhost:5500/uploads/pion-orange02.webp"
                    type="hidden"
                  />
                </div>
              </CardDiv>

              <div className="grid gap-4 justify-start col-start-1 row-start-1">
                <img
                  src="http://localhost:5500/uploads/pion-collection.webp"
                  className=" w-full md:min-h-[550px] md:h-[75vw] rounded-lg"
                />
                <p className="flex justify-between w-full font-helvetica">
                  <span className="font-garamond font-semibold  text-[#8E9391] md:text-[1.2vw] 3xl:text-lg">
                    Orange PION created for COLLECTIBLE 2023
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="py-[5.65vw]  mx-[6.75vw] md:mx-[2.75vw]  grid gap-[20vw] md:grid-cols-3/10 relative">
              <div className="flex flex-col gap-4 md:gap-[1vw]">
                <p className="font-helvetica text-xl md:text-[1.5vw] 3xl:text-[1.6rem] leading-[1.25] font-semibold">
                  OHM is a collectible furniture studio backed by a
                  manufacturing workshop.
                </p>
                <Link
                  className=" font-helvetica text-[4vw] md:text-[1vw] 3xl:text-lg text-[#8e9194] relative overflow-hidden w-fit "
                  to="collections/ban"
                >
                  <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                    Learn More
                  </span>
                </Link>
              </div>

              <Sentence
                array={[
                  " Influenced by images know",
                  `to the human eye, our pieces of furniture are simple and yet
                  thought-through to be used in different ways.`,
                ]}
              />
            </div>
          </section>

          <section>
            <div className="py-[5.65vw]  mx-[6.75vw] md:mx-[2.75vw]  grid gap-[14vw] md:grid-cols-3/10 relative">
              <CardDiv
                text="BAN - Black"
                price="1920.00"
                justify="justify-end"
                align="between"
              >
                <div className="grid">
                  <CardImage
                    src="http://localhost:5500/uploads/ban-black01.webp"
                    type="visible"
                  />
                  <CardImage
                    src="http://localhost:5500/uploads/ban-black02.webp"
                    type="hidden"
                  />
                </div>
              </CardDiv>

              <div className="grid justify-end gap-4">
                <img
                  src="http://localhost:5500/uploads/ban-collection.webp"
                  className="w-full md:min-h-[550px] md:h-[75vw] object-cover rounded-lg"
                />
                <p className="flex justify-between w-full font-helvetica">
                  <span className=" font-garamond font-semibold  text-[#8E9391] md:text-[1.35vw] 3xl:text-lg">
                    BAN collection
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="mx-[6.75vw] md:mx-[2.75vw]  grid gap-y-9">
              <SelectedProducts />
            </div>
          </section>

          <section className="">
            <div className="mx-[6.75vw] md:mx-[2.75vw] grid md:grid-cols-2 gap-5 ">
              <Link
                to="/collections/bloc"
                className="grid gap-10  cursor-pointer "
              >
                <div className="w-full h-[93vw] md:h-full md:row-start-1 md:col-start-1">
                  <img
                    src="images/blue.webp"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="grid gap-10 md:gap-[0.125vw] w-full p-[10vw] rounded-xl bg-[#f5f4f4] md:w-[17.6875vw] md:h-[17.6875vw] 3xl:w-72 3xl:h-72 3xl:p-7 md:min-h-36 md:p-[1.875vw] md:row-start-1 md:col-start-1 md:self-end md:mb-[2vw] md:ml-[2vw]">
                  <div className="grid content-center">
                    <p className=" uppercase leading-none font-helvetica font-bold -tracking-[0.1em] text-[10vw] md:text-[3vw] 3xl:text-[3rem] mb-3 md:mb-0">
                      Bloc
                    </p>
                    <p className=" font-helvetica text-[5vw] md:text-[1vw] 3xl:text-lg">
                      Three aluminum chairs made in France in three versions :
                      raw or brushed aluminum, and powder-coated blue.
                    </p>
                  </div>
                  <div className="overflow-hidden max-w-fit self-end ">
                    <Link
                      className="font-helvetica text-[#8e9194] text-[5vw] md:text-[1vw] 3xl:text-lg relative max-w-fit overflow-hidden"
                      classNameto="/collections/bloc"
                    >
                      <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                        Buy Now
                      </span>
                    </Link>
                  </div>
                </div>
              </Link>

              <Link
                to="/collections/pion"
                className="grid gap-10 cursor-pointer"
              >
                <div className="w-full h-[93vw] md:h-full md:row-start-1 md:col-start-1">
                  <img
                    src="http://localhost:5500/uploads/pion-collection02.webp"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="grid gap-10 md:gap-[0.125vw] w-full p-[10vw] rounded-xl bg-[#f5f4f4] md:w-[17.6875vw] md:h-[17.6875vw] 3xl:w-72 3xl:h-72 3xl:p-7 md:min-h-36 md:p-[1.875vw] md:row-start-1 md:col-start-1 md:self-end md:mb-[2vw] md:ml-[2vw]">
                  <div className="grid content-center">
                    <p className=" uppercase leading-none font-helvetica font-bold -tracking-[0.1em] text-[10vw] md:text-[3vw] 3xl:text-[3rem] mb-3 md:mb-0">
                      Pion
                    </p>
                    <p className="font-helvetica text-[5vw] md:text-[1vw] 3xl:text-lg">
                      Four colored stools made in France from recycled steel,
                      assembled by hand and then powder coated.
                    </p>
                  </div>
                  <div className="overflow-hidden max-w-fit self-end">
                    <Link
                      className="font-helvetica text-[#8e9194] text-[5vw] md:text-[1vw] 3xl:text-lg relative max-w-fit overflow-hidden"
                      classNameto="/collections/bloc"
                    >
                      <span className="before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                        Buy Now
                      </span>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <section>
        <div className="grid mx-[6.75vw] md:mx-[2.75vw] gap-[2rem] py-[13.35vw]">
          <div className="grid grid-cols-3 gap-[2vw] ">
            <div className="w-[25vw] h-[25vw] bg-[#8e9194] rounded-xl"></div>
            <div className="w-[25vw] h-[25vw] bg-[#8e9194] rounded-xl justify-self-center"></div>
            <div className="w-[25vw] h-[25vw] bg-[#8e9194] rounded-xl justify-self-end"></div>
          </div>
          <div className="text-center">
            <h2>
              <span className="font-garamond text-[9.375vw] block tracking-tighter">
                Follow us on instagram&nbsp;
              </span>

              <Link
                target="_blank"
                to="https://www.instagram.com/ohm.studio_/?hl=fr"
                className="text-[7.8125vw] font-helvetica font-bold"
              >
                @ohm.studio_
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default transition(Home);
