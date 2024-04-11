import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Footer = ({ setIsFooterInView }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    setIsFooterInView(inView);
  }, [inView, setIsFooterInView]);

  const collectionsLinks = [
    { text: "Pion", href: "/collections/pion" },
    { text: "Ban", href: "/collections/ban" },
    { text: "Bloc", href: "/collections/bloc" },
    { text: "All", href: "/collections" },
  ];

  const otherLinks = [
    { text: "Who we are", href: "#" },
    { text: "Dealers", href: "#" },
    { text: "Press", href: "#" },
  ];

  const othersLinks2 = [
    { text: "Contact Us", href: "#" },
    { text: "FAQ", href: "#" },
  ];

  const legalLinks = [
    { text: "Terms & Conditions", href: "#" },
    { text: "Legal notice", href: "#" },
  ];

  return (
    <footer ref={ref} id="footer" className="bg-[#f2eef0] py-[9.5vw] px-[5.25vw] md:py-20">
      <div className="grid grid-rows-1 gap-[10vw] md:gap-[5vw] py-[5vw] md:py-0 md:grid-cols-navFooter">
        <p className="content-center">
          <span className="font-garamond flex leading-[0.8] md:leading-[1.25] text-[9.25vw] md:text-[1.8vw] 3xl:text-3xl">
            OHM — A collectible &nbsp;
          </span>
          <span className="font-helvetica block leading-[1.2] md:leading-[1.25] font-semibold text-[8vw] md:text-[1.5635vw] 3xl:text-[1.75rem]">
            <span className="font-garamond leading-[0.8] md:leading-[1.25] text-[9.25vw] md:text-[1.67vw] 3xl:text-3xl">
              furniture studio &nbsp;
            </span>
            backed by a manufacturing workshop.
          </span>
        </p>

        <nav className="grid grid-cols-2 grid-rows-2 gap-[5vw] md:grid-cols-4 md:grid-rows-auto*2">
          {renderLinks(collectionsLinks)}
          {renderLinks(otherLinks)}
          {renderLinks(othersLinks2)}
          {renderLinks(legalLinks)}
        </nav>

        <div className="bg-white max-w-72 max-h-72 p-[8vw] h-fit rounded-xl grid gap-[10vw] md:gap-[3vw] md:p-[1.65vw] content-center">
          <div>
            <h3 className="uppercase font-favorit font-semibold text-[9.0625vw] md:text-[2.8vw] 3xl:text-[50px] -tracking-[0.1em]">
              News
            </h3>
            <p className="font-helvetica text-[4.8vw] md:text-[1.15vw] 3xl:text-lg">
              Sign up and stay up to date on product launches and pre order.
            </p>
          </div>
          <div className="w-full flex">
            <input className="w-full" type="email" placeholder="Email" />
            <button className="border-none bg-[#e3e3e3]">Enter</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const renderLinks = (links) => {
  return (
    <ul className="grid gap-[3vw] md:gap-[1vw] content-start">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.href} className="cursor-pointer font-helvetica text-[4.8vw] md:text-[1vw] 3xl:text-lg">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
