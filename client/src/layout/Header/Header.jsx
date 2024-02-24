import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "/src/api/axios";
import { CustomMenu, Button, links } from "/src/components/Header";
import { Drawline } from "/src/components/Shared";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuItem,
  MenuLink,
  MenuList,
  MenuSection,
} from "/src/components/Menu";
import { TextReveal } from "/src/components/Reveal";
import { useCartContext } from "/src/context/cartContext";
import { useUserContext } from "/src/context/authContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, decreaseQuantity, getCartTotal } =
    useCartContext();
  const { user } = useUserContext();
  const [isHover, setIsHover] = useState("");

  const [isSectionOpen, setIsSectionOpen] = useState(
    Array(links.length).fill(false)
  );

  const handleCheckout = (cartItems) => {
    axios
      .post("/stripe/create-checkout-session", {
        name: user.name,
        cartItems,
        userId: user.user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // initial={{ scaleY: 0 }}
  // animate={{
  //   scaleY: isHover ? 1 : 0,
  //   transition: {
  //     ease: "easeInOut",
  //     duration: 0.4,
  //     delayChildren: 2,
  //   },
  // }}
  // exit={{ scaleY: 0 }}

  const parentVariants = {
    open: {
      scaleY: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: { scaleY: 0, transition: { delay: 1 } },
  };

  const menuElement = Object.keys(links).map((category, index) => {
    return (
      <MenuSection
        name={category}
        onClick={() => {
          setIsSectionOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
          });
        }}
      >
        <MenuList isOpen={isSectionOpen[index]} index={index}>
          {links[category].map((link, linkIndex) => (
            <MenuItem type={category.toLowerCase()}>
              <MenuLink text={link.name} path={link.path}></MenuLink>
              {category === "Shop"
                ? linkIndex <= 1 && <Drawline isAnimate="false" />
                : null}
            </MenuItem>
          ))}
        </MenuList>
      </MenuSection>
    );
  });

  const renderNavItems = (navArray) => {
    return navArray.map((item, i) => (
      <motion.li
        key={i}
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.6 + i * 0.1,
          },
        }}
        exit={{
          y: "100%",
          opacity: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.8 - i * 0.1,
          },
        }}
        className="flex"
      >
        <Link>
          <motion.img
            whileHover={{ y: 7 }}
            src={`http://localhost:5500/uploads/${item}-small.avif`}
            className="w-[4.5vw] h-[5vw] 3xl:w-20 3xl:h-[89px]"
          ></motion.img>
        </Link>
      </motion.li>
    ));
  };

  const pionsNav = ["orange", "blue", "green", "yellow", "red"];
  const blocsNav = ["blue2", "brushed", "raw"];
  const bansNav = ["black", "natural"];

  return (
    <>
      {/* <CustomMenu /> */}
      <header className="fixed md:w-full  top-0 md:z-10   ">
        {/* Nav for mobile */}
        <nav className="flex justify-between min-h-20 relative md:hidden">
          <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? "Close" : "Menu"}
          </Button>

          <Button onClick={() => setIsCartOpen((prev) => !prev)}>Cart</Button>
        </nav>

        {/* Nav for tablet and bigger screen */}
        <nav className="hidden md:flex justify-end font-helvetica px-5 md:px-10 pt-10 sticky top-0">
          <ul className="flex gap-8 text-xl">
            <motion.li
              onHoverStart={() => setIsHover(true)}
              className="cursor-pointer"
            >
              <Link to="/products">Shop</Link>
            </motion.li>

            <motion.li
              onHoverStart={() => setIsHover(true)}
              className="cursor-pointer"
            >
              <Link className="cursor-pointer" to="/products">
                About
              </Link>
            </motion.li>
            <Button onClick={() => setIsCartOpen((prev) => !prev)}>Cart</Button>
          </ul>
        </nav>

        {isMenuOpen && (
          <Menu>
            {menuElement}
            <Drawline isAnimate="false" />
            <div className="grid mt-10">
              <TextReveal>
                <Link className="font-helvetica">Contact us</Link>
              </TextReveal>
              <TextReveal>
                <Link className="font-helvetica">Instagram</Link>
              </TextReveal>
              <TextReveal>
                <Link className="font-helvetica">FAQ</Link>
              </TextReveal>
              <TextReveal>
                <Link className="font-helvetica">Github</Link>
              </TextReveal>
            </div>
          </Menu>
        )}

        {isCartOpen && (
          <div className="bg-[rgba(17,17,17,.1)] fixed top-0 left-0 w-full h-screen md:pt-10">
            <div className=" relative md:ml-auto md:mr-9 bg-white h-screen w-full pt-10 md:max-w-[28vw] md:max-h-[90vh] md:min-h-[90vh]  md:rounded-xl">
              <div className=" relative flex  w-full min-h-20 px-[2vw] items-center justify-between">
                <h3 className="text-[8vw] font-helvetica md:text-[3vw]">
                  Cart
                </h3>
                <Button onClick={() => setIsCartOpen(false)}>Close</Button>
              </div>

              <div className=" h-3/5 overflow-y-auto pb-24 px-[2vw]">
                {cart.map((item, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="grid grid-cols-2 md:grid-cols-cartItem md:grid-rows-cartItem border-t  border-black gap-2 py-11 md:py-[2vw] md:gap-10 "
                      >
                        <img
                          className="w-full object-cover rounded-lg"
                          src={`http://localhost:5500/${item.image}`}
                        />
                        <div className="grid">
                          <div className="grid grid-row-3 h-20 md:h-auto md:gap-0 gap-2 text-gray-400 font-helvetica ">
                            <span className=" text-black md:text-[1vw]  ">
                              {item.name}
                            </span>
                            <span className="md:text-[1vw]">{item.price}</span>
                            <div className="grid grid-rows-1 grid-cols-2 gap-2">
                              <p className="md:text-[1vw]">Quantity</p>
                              <div className="flex w-full items-start justify-between md:text-[1vw] ">
                                <button onClick={() => decreaseQuantity(item)}>
                                  -
                                </button>
                                <p>{item.quantity}</p>
                                <button onClick={() => addToCart(item)}>
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-end pb-3 md:text-[1vw] ">
                            <button onClick={() => removeFromCart(item)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="w-full px-2 bg-white absolute bottom-8">
                <button
                  onClick={() => handleCheckout(cart)}
                  className=" bg-[#e3e3e3] h-14 w-full text-center rounded-xl md:h-auto md:py-2 md:px-9 md:text-[1vw]"
                >
                  <span>Checkout </span>&nbsp;
                  <span className="text-[#8e9194]">{`(€${getCartTotal()})`}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <motion.nav
          initial="hidden"
          variants={parentVariants}
          animate={isHover ? "open" : "hidden"}
          onMouseLeave={() => setIsHover(false)}
          className="hidden md:block max-h-60 min-h-60 w-full absolute top-32 origin-top px-10"
        >
          <AnimatePresence mode="wait">
            <motion.nav
              initial="hidden"
              variants={parentVariants}
              animate={isHover ? "open" : "hidden"}
              onMouseLeave={() => setIsHover(false)}
              className=" max-h-auto origin-top p-10 bg-white"
            >
              <AnimatePresence mode="wait">
                {isHover && (
                  <>
                    <div className="mb-5">
                      <motion.ul className="flex overflow-hidden w-full justify-between h-[3.5vw] 3xl:h-16 font-bold tracking-[-0.3em]">
                        <Link
                          className="text-[3vw] 3xl:text-5xl self-center cursor-pointer"
                          to="/collections/pion"
                        >
                          PION
                        </Link>
                        <div className="flex gap-5 ">
                          {renderNavItems(pionsNav)}
                        </div>
                      </motion.ul>
                      <Drawline />
                    </div>
                    <div className="mb-5">
                      <motion.ul className="flex overflow-hidden w-full justify-between h-[3.5vw] 3xl:h-16 font-bold tracking-[-0.3em]">
                        <Link
                          className="text-[3vw] 3xl:text-5xl self-center cursor-pointer"
                          to="/collections/bloc"
                        >
                          BLOC
                        </Link>
                        <div className="flex gap-5 ">
                          {renderNavItems(blocsNav)}
                        </div>
                      </motion.ul>
                      <Drawline />
                    </div>
                    <div className="mb-5">
                      <motion.ul className="flex overflow-hidden w-full justify-between h-[3.5vw] 3xl:h-16 font-bold tracking-[-0.3em]">
                        <Link
                          className="text-[3vw] 3xl:text-5xl self-center cursor-pointer"
                          to="/collections/ban"
                        >
                          BAN
                        </Link>
                        <div className="flex gap-5">
                          {renderNavItems(bansNav)}
                        </div>
                      </motion.ul>
                      <Drawline />
                    </div>
                    <div className="pt-[3.25vw]">
                      <Link className="relative h-fit">
                        <span className=" text-[1vw] 3xl:text-lg text-[#8E9194] before:absolute before:bottom-0  before:bg-[#8E9194] before:content-[' '] before:w-full before:h-[1px] hover:before:scale-0 hover:before:origin-left before:transition-transform">
                          See all
                        </span>
                      </Link>
                    </div>
                  </>
                )}
              </AnimatePresence>
            </motion.nav>
          </AnimatePresence>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={
            isHover
              ? {
                  opacity: 1,
                  translateY: 0,
                  transition: { ease: "easeInOut", duration: 0.4 },
                }
              : { opacity: 0, transition: { delay: 1 }, translateY: "-100%" }
          }
          exit={{
            transition: { delay: 1.2 },
            opacity: 0,
            translateY: "100%",
          }}
          className="absolute top-0 left-0 w-screen h-screen -z-50 bg-[rgba(17,17,17,.1)]  origin-top "
        ></motion.div>
      </header>
    </>
  );
};

export default Header;
