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

  return (
    <>
      {/* <CustomMenu /> */}
      <header className="fixed w-full px-5 md:px-10 pt-10 top-0 md:z-10 overflow-hidden">
        {/* Nav for mobile */}
        <nav className="flex justify-between min-h-20 relative md:hidden">
          <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? "Close" : "Menu"}
          </Button>

          <Button onClick={() => setIsCartOpen((prev) => !prev)}>Cart</Button>
        </nav>

        {/* Nav for tablet and bigger screen */}
        <nav className="hidden md:flex font-helvetica z-10">
          <div className=" mx-auto basis-full">costum menu</div>
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
          </ul>
        </nav>

        <motion.nav
          initial="hidden"
          variants={parentVariants}
          animate={isHover ? "open" : "hidden"}
          onMouseLeave={() => setIsHover(false)}
          className="hidden md:block max-h-60 min-h-60 w-full bg-black origin-top"
        >
          <AnimatePresence mode="wait">
            <nav className="hidden md:flex font-helvetica z-10">
              <div className=" mx-auto basis-full">costum menu</div>
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
              </ul>
            </nav>

            <motion.nav
              initial="hidden"
              variants={parentVariants}
              animate={isHover ? "open" : "hidden"}
              onMouseLeave={() => setIsHover(false)}
              className=" max-h-auto w-full bg-black origin-top"
            >
              <AnimatePresence mode="wait">
                {isHover && (
                  <>
                    <motion.ul className="flex px-5 pb-5 overflow-hidden">
                      <Link className="basis-full" to="/collections/pion">
                        PION
                      </Link>
                      <div className="flex gap-5">
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.6,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.8,
                            },
                          }}
                          className="flex "
                        >
                          <Link className=" pb-4 overflow-hidden">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>

                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.65,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.75,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.7,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.7,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.7,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.65,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.8,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.6,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                      </div>
                    </motion.ul>
                    <motion.ul className="flex px-5 pb-5 overflow-hidden">
                      <Link className="basis-full" to="/collections/pion">
                        PION
                      </Link>
                      <div className="flex gap-5">
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.6,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.8,
                            },
                          }}
                          className="flex "
                        >
                          <Link className=" pb-4 overflow-hidden">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>

                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.65,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.75,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.7,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.7,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.7,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.65,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                        <motion.li
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.8,
                            },
                          }}
                          exit={{
                            y: "100%",
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.2,
                              delay: 0.6,
                            },
                          }}
                          className="flex "
                        >
                          <Link className="">
                            <motion.img
                              whileHover={{ y: 7 }}
                              src="https://localhost:5500/uploads/red-small.avif"
                            ></motion.img>
                          </Link>
                        </motion.li>
                      </div>
                    </motion.ul>
                  </>
                )}
              </AnimatePresence>
            </motion.nav>
          </AnimatePresence>
        </motion.nav>

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
          <div className="absolute top-0 left-0 bg-white h-screen w-full px-5 pt-10 ">
            <div className="top-0 flex  w-full min-h-20 items-center justify-between">
              <h3 className="text-[8vw] font-helvetica ">Cart</h3>
              <Button onClick={() => setIsCartOpen(false)}>Close</Button>
            </div>

            <div className="h-screen overflow-y-auto pb-20">
              {cart.map((item) => {
                return (
                  <>
                    <div className="grid grid-cols-2 gap-2 py-11 ">
                      <img
                        className="w-full object-cover rounded-lg"
                        src={`http://localhost:5500/${item.image}`}
                      />
                      <div className="grid">
                        <div className="grid grid-row-3 h-20 gap-2 text-gray-400 font-helvetica ">
                          <span className=" text-black  ">{item.name}</span>
                          <span>{item.price}</span>
                          <div className="grid grid-rows-1 grid-cols-2 gap-2">
                            <p className="">Quantity</p>
                            <div className="flex w-full items-start justify-between ">
                              <button onClick={() => decreaseQuantity(item)}>
                                -
                              </button>
                              <p>{item.quantity}</p>
                              <button onClick={() => addToCart(item)}>+</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex  items-end pb-3">
                          <button onClick={() => removeFromCart(item)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <Drawline />
                  </>
                );
              })}
            </div>
            <div className="fixed bottom-0 left-0 w-full p-5 bg-white">
              <button
                onClick={() => handleCheckout(cart)}
                className=" bg-[#e3e3e3]  h-14 w-full text-center rounded-xl"
              >
                <span>Checkout </span>
                <span className="text-[#8e9194]">{`(€${getCartTotal()})`}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
