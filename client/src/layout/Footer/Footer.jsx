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
      className="bg-[#e3e3e3] py-[9.5vw] px-[5.25vw]"
    >
      <div className="grid row-auto gap-[10vw] py-[5vw] md:grid-cols-3">
        <Sentence
          beforeHyphen="OHM"
          array={[
            "A collectible",
            "furniture studio backed by a manufacturing workshop.",
          ]}
        />

        <nav className="grid grid-cols-2 grid-rows-2 gap-[5vw] md:grid-cols-4 md:grid-row-1">
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

        <div className="bg-white p-[8vw] rounded-xl grid gap-[10vw]">
          <div>
            <h3 className="uppercase font-favorit font-semibold text-[9.0625vw]  -tracking-[0.1em]">
              News
            </h3>
            <p className="font-helvetica text-[4.8vw]">
              Sign up and stay up to date on product launches and pre order.
            </p>
          </div>
          <div>
            <input type="email" placeholder="Email" />
            <button className=" border-none bg-[#e3e3e3]">Enter</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
