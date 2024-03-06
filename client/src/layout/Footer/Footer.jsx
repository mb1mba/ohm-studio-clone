import React from "react";
import { useInView } from "react-intersection-observer";
import { Sentence } from "/src/components/Sentence";
const Footer = ({ setIsFooterInView }) => {
  const [ref, inView] = useInView();

  React.useEffect(() => {
    setIsFooterInView(inView);
  }, [inView, setIsFooterInView]);

  return (
    <footer
      ref={ref}
      id="footer"
      className="bg-[#f2eef0] py-[9.5vw] px-[5.25vw] md:py-0"
    >
      <div className="grid grid-rows-1 gap-[10vw] md:gap-[5vw] py-[5vw] md:py-0 md:grid-cols-navFooter ">
        {/* <Sentence
          beforeHyphen="OHM"
          array={[
            "A collectible",
            "furniture studio backed by a manufacturing workshop.",
          ]}
        /> */}
        <p className="content-center">
          <span className="font-garamond  flex  leading-[0.8] md:leading-[1.25] text-[9.25vw] md:text-[1.8vw] 3xl:text-lg  ">
            OHM — A collectible &nbsp;
          </span>
          <span className="font-helvetica block leading-[1.2] md:leading-[1.25] font-semibold text-[8vw] md:text-[1.5635vw] 3xl:text-[3rem]  ">
            <span className="font-garamond  leading-[0.8] md:leading-[1.25] text-[9.25vw] md:text-[1.67vw] 3xl:text-6xl  ">
              furniture studio &nbsp;
            </span>
            backed by a manufacturing workshop.
          </span>
        </p>

        <nav className="grid grid-cols-2 grid-rows-2 gap-[5vw] md:grid-cols-4 md:grid-rows-auto*2">
          <ul className="grid gap-[3vw] content-start">
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Pion
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Ban
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Bloc
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              All
            </li>
          </ul>

          <ul className="grid gap-[3vw] content-start">
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Who we are
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Dealers
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Press
            </li>
          </ul>

          <ul className="grid gap-[3vw] content-start">
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Contact Us
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              FAQ
            </li>
          </ul>

          <ul className="grid gap-[3vw]  content-start">
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Terms & conditions
            </li>
            <li className="font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
              Legal notice
            </li>
          </ul>
        </nav>

        <div className="bg-white p-[8vw] h-fit rounded-xl grid gap-[10vw] md:gap-[3vw] md:p-[1.65vw] content-center">
          <div>
            <h3 className="uppercase font-favorit font-semibold text-[9.0625vw] md:text-[2.8vw]  -tracking-[0.1em] ">
              News
            </h3>
            <p className="font-helvetica text-[4.8vw] md:text-[1.15vw] ">
              Sign up and stay up to date on product launches and pre order.
            </p>
          </div>
          <div className="w-full flex">
            <input className="w-full" type="email" placeholder="Email" />
            <button className=" border-none bg-[#e3e3e3]">Enter</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
