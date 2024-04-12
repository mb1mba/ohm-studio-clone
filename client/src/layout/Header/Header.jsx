import React, { useState } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import axios from "/src/api/axios";
import { Link } from "react-router-dom";

import { useCartContext } from "/src/context/cartContext";
import { useUserContext } from "/src/context/authContext";

import {
  Menu,
  MenuItem,
  MenuLink,
  MenuList,
  MenuSection,
} from "/src/components/Menu";

import { CustomMenu, Button, links } from "/src/components/Header";
import { Drawline } from "/src/components/Shared";
import { TextReveal } from "/src/components/Reveal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    getCartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCartContext();

  const { scrollY } = useScroll();
  const { user } = useUserContext();
  const [isHover, setIsHover] = useState("");
  const [isLinkHover, setIsLinkHover] = useState("");
  const [isSectionOpen, setIsSectionOpen] = useState(Array(links.length).fill(false));
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsNavBarHidden(latest > previous && latest > 150);
  });

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

  const parentVariants = {
    open: {
      maxHeight: isHover === "Shop" ? "540px" : "350px",
      height: "fit-content",
      zIndex: isHover === "Shop" ? 1 : -1,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        when: "beforeChildren",
      },
    },
    hidden: {
      maxHeight: 0,
      transition: { delay: 1, ease: "easeInOut", duration: 0.4 },
    },
  };

  const menuElement = Object.keys(links).map((category, index) => (
    <MenuSection
      key={category}
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
          <MenuItem key={linkIndex} type={category.toLowerCase()}>
            <TextReveal>
              <MenuLink text={link.name} path={link.path} />
            </TextReveal>
            {category === "Shop" && linkIndex <= 1 && <Drawline isAnimate="false" />}
          </MenuItem>
        ))}
      </MenuList>
    </MenuSection>
  ));

  const renderNavItems = (navArray) => {
    if (isHover === "Shop") {
      return navArray.map((item, i) => (
        <motion.li
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              ease: [0.3, 0, 0, 1],
              duration: 0.7,
              delay: 0.6 + (i * 0.05) / 2,
            },
          }}
          exit={{
            y: "100%",
            opacity: 0,
            transition: {
              ease: [0.3, 0, 0, 1],
              duration: 0.7,
              delay: 0.6 + (i * 0.05) / 2,
            },
          }}
          className="flex"
        >
          <Link to={`/products/${item}`}>
            <motion.img
              whileHover={{ y: 7 }}
              src={`http://localhost:5500/uploads/${item}-small.avif`}
              className="w-[4.5vw] h-[5vw] 3xl:w-20 3xl:h-[89px]"
            ></motion.img>
          </Link>
        </motion.li>
      ));
    }
  };

  const navsItem = [
    {
      collectionName: "Pion",
      collections: [
        "pion-orange",
        "pion-blue",
        "pion-green",
        "pion-yellow",
        "pion-red",
      ],
    },
    {
      collectionName: "Bloc",
      collections: ["bloc-blue", "bloc-brushed", "bloc-raw"],
    },
    {
      collectionName: "Ban",
      collections: ["ban-black", "ban-natural"],
    },
  ];

  // Need to add document.body.style.overflow = "hidden";to all hoverSTart
  // Need to work on cart button responsive

  return (
    <>
      {/* <CustomMenu /> */}
      <header className="fixed w-full  top-0 z-10">
        {/* Nav for mobile */}
        {!isCartOpen && 
        <nav className="flex justify-between min-h-20 relative md:hidden z-10 px-[5.25vw] pt-[10.625vw]">
        <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </Button>

        <Button
          onClick={() => {
            setIsCartOpen((prev) => !prev);
          }}
        >
          {isMenuOpen ? "" : "Cart"}
        </Button>
      </nav>}

        {/* Nav for tablet and bigger screen */}
        <motion.nav
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          animate={isNavBarHidden ? "hidden" : "visible"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden md:flex justify-end font-helvetica px-5 md:px-10 pt-10 sticky top-0"
        >
          <ul className="flex gap-8 text-xl">
            <motion.li
              onHoverStart={() => setIsHover("Shop")}
              className="cursor-pointer w-fit relative overflow-hidden"
            >
              <Link to="/products">
                <span className=" text-[1vw] 3xl:text-lg before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                  Shop
                </span>
              </Link>
            </motion.li>

            <motion.li
              onHoverStart={() => setIsHover("About")}
              className="cursor-pointer w-fit relative overflow-hidden"
            >
              <Link className="cursor-pointer" to="/products">
                <span className="text-[1vw] 3xl:text-lg before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                  About
                </span>
              </Link>
            </motion.li>
            <motion.li
              className="cursor-pointer w-fit relative overflow-hidden"
              onHoverStart={() => setIsHover("")}
            >
              <Link to="/account" className="">
                <span className="text-[1vw] 3xl:text-lg before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                  Account
                </span>
              </Link>
            </motion.li>

            <Button
              onClick={() => {
                setIsCartOpen((prev) => !prev);

                document.body.style.overflow = "hidden";
              }}
              onHoverStart={() => setIsHover("")}
            >
              <span className="text-[1vw] 3xl:text-lg before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                Cart
              </span>
            </Button>
          </ul>
        </motion.nav>

        {isMenuOpen && (
          <Menu>
            <div className="mb-[11vw]">{menuElement}</div>
            <Drawline isAnimate="false" />
            <div className="grid mt-10">
              <TextReveal>
                <Link className="font-helvetica text-[4.8vw] font-bold">
                  Contact us
                </Link>
              </TextReveal>
              <TextReveal>
                <Link className="font-helvetica text-[4.8vw] font-bold">
                  Instagram
                </Link>
              </TextReveal>
              <TextReveal>
                <Link className="font-helvetica text-[4.8vw] font-bold">
                  FAQ
                </Link>
              </TextReveal>
              <TextReveal>
                <Link
                  target="_blank"
                  to="https://github.com/mb1mba"
                  className="font-helvetica text-[4.8vw] font-bold"
                >
                  Github
                </Link>
              </TextReveal>
            </div>
          </Menu>
        )}

        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[rgba(17,17,17,.1)] fixed top-0 left-0 w-full h-screen md:pt-10 "
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{
                  x: 0,
                  transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
                }}
                exit={{ x: "100%" }}
                className=" relative md:ml-auto md:mr-9 bg-white h-screen w-full pt-10 md:max-w-[28vw] md:max-h-[90vh] md:min-h-[90vh]  md:rounded-xl"
              >
                <div className=" relative flex  w-full min-h-20 px-[2vw] items-center justify-between">
                  <h3 className="text-[8vw] font-helvetica md:text-[3vw] 3xl:text-5xl">
                    Cart
                  </h3>
                  <Button
                    onClick={() => {
                      setIsCartOpen(false);
                      document.body.style.overflow = "unset";
                    }}
                  >
                    Close
                  </Button>
                </div>

                <div className="h-3/5 overflow-y-auto pb-24 px-[2vw]">
                  {cart &&
                    cart.map((item, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            className="grid grid-cols-2 md:grid-cols-cartItem md:grid-rows-cartItem border-t  border-black gap-2 py-11 md:py-[2vw] md:gap-10 "
                          >
                            <img
                              className="w-full object-cover rounded-lg"
                              src={`http://localhost:5500/${item?.image}`}
                            />
                            <div className="grid">
                              <div className="grid grid-row-3 h-20 md:h-auto md:gap-0 gap-2 text-gray-400 font-helvetica ">
                                <span className=" text-black md:text-[1vw]  ">
                                  {item?.name}
                                </span>
                                <span className="md:text-[1vw]">
                                  {item?.price}
                                </span>
                                <div className="grid grid-rows-1 grid-cols-2 gap-2">
                                  <p className="md:text-[1vw]">Quantity</p>
                                  <div className="flex w-full items-start justify-between md:text-[1vw] ">
                                    <button
                                      onClick={() => decreaseQuantity(item)}
                                    >
                                      -
                                    </button>
                                    <p>{item?.quantity}</p>
                                    <button
                                      onClick={() =>
                                        addToCart({ ...item, quantity: 1 })
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-end pb-3 md:text-[1vw] 3xl:text-lg text-[#8E9194] ">
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isHover && (
            <motion.nav
              initial="hidden"
              variants={parentVariants}
              animate="open"
              exit="hidden"
              onMouseLeave={() => setIsHover(false)}
              className="hidden md:grid w-[96.5vw] h-auto left-1/2 -translate-x-1/2 absolute top-32  rounded-xl origin-top bg-white"
            >
              <motion.ul
                initial={{ opacity: 0 }}
                animate={isHover === "Shop" ? { opacity: 1 } : { opacity: 0 }}
                className="row-start-1 col-start-1 h-fit grid p-[3vw]  "
              >
                {isHover === "Shop" && (
                  <>
                    {navsItem.map((item) => (
                      <>
                        <motion.li className="flex overflow-hidden w-full justify-between h-[4vw] 3xl:h-16  ">
                          <motion.div
                            onHoverStart={() => {
                              setIsLinkHover(item.collectionName);
                            }}
                            onMouseLeave={() => setIsLinkHover("")}
                            className="grid grid-cols-auto*2 gap-10"
                          >
                            <TextReveal>
                              <Link
                                className="text-[3vw] 3xl:text-5xl h-[4vw] 3xl:h-fit cursor-pointer flex gap-1 font-bold -tracking-[0.1em]"
                                to={`/collections/${item.collectionName.toLowerCase()}}`}
                              >
                                <motion.span className="uppercase">
                                  {item.collectionName}
                                </motion.span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  width="1vw"
                                  height="1vw"
                                  className="self-end max-w-3"
                                >
                                  <path
                                    d="M5.74852 11.435C5.19776 11.4309 4.65089 11.3414 4.12701 11.1698C3.69303 11.0255 3.27846 10.8274 2.8928 10.58C2.14187 10.1029 1.51155 9.45543 1.05193 8.6892C0.7441 8.18278 0.520189 7.62904 0.389024 7.04981C0.154911 5.97319 0.2353 4.85112 0.620439 3.81972C0.751823 3.47676 0.917397 3.14817 1.11461 2.83901C1.39686 2.38737 1.74188 1.97897 2.1391 1.6263C2.63483 1.18775 3.20188 0.838955 3.81524 0.595301C4.21563 0.43683 4.63356 0.327881 5.0599 0.270831C5.31296 0.23696 5.56796 0.219888 5.82324 0.219727C5.92931 0.219727 6.03617 0.21973 6.14465 0.228653C7.08582 0.277991 7.99768 0.575883 8.78904 1.09255C9.23788 1.38259 9.64369 1.73545 9.99432 2.14059C10.3567 2.55983 10.6571 3.02976 10.8862 3.53581C11.0818 3.96814 11.2186 4.42519 11.2928 4.89452C11.367 5.37394 11.3837 5.86063 11.3426 6.34409C11.2911 6.95326 11.137 7.5491 10.887 8.10596C10.6791 8.5697 10.4113 9.00365 10.0907 9.39654C9.75931 9.79991 9.37395 10.1548 8.94572 10.4511C8.46448 10.7876 7.93271 11.0437 7.37082 11.2095C6.85317 11.3597 6.31683 11.434 5.77825 11.4302L5.74852 11.435ZM5.80154 1.05686C5.41957 1.05576 5.03896 1.10291 4.66858 1.1972C4.03749 1.36464 3.44729 1.66141 2.93471 2.06904C2.42213 2.47668 1.99814 2.98645 1.68912 3.56663C1.36946 4.16098 1.18139 4.81829 1.13791 5.49317C1.11478 5.84022 1.12771 6.18876 1.17647 6.5331C1.23463 6.94792 1.349 7.3527 1.51637 7.73607C1.72284 8.20542 2.00043 8.63945 2.33917 9.02259C2.73038 9.46302 3.19827 9.82732 3.71963 10.0974C4.22039 10.3587 4.76572 10.5216 5.32667 10.5776C5.48978 10.5947 5.65364 10.6034 5.81762 10.6036C6.68781 10.6042 7.53996 10.3531 8.27318 9.88C8.7095 9.60089 9.09877 9.2531 9.42623 8.84981C9.76351 8.43275 10.0294 7.96174 10.2129 7.45621C10.4013 6.93474 10.4952 6.38326 10.4901 5.82819C10.4923 5.54464 10.4692 5.26148 10.421 4.98213C10.3291 4.47232 10.1554 3.98105 9.90674 3.5277C9.56414 2.90066 9.08765 2.35841 8.51182 1.94023C8.16381 1.68538 7.78254 1.48037 7.37886 1.33104C7.00751 1.19392 6.61977 1.10718 6.22581 1.07308C6.08117 1.06254 5.93895 1.05686 5.80154 1.05686Z"
                                    fill="#111111"
                                  />
                                  <path
                                    d="M6.73063 7.41064C6.98796 7.23962 7.19038 6.99665 7.31318 6.71141C7.58529 6.02877 7.58529 5.26634 7.31318 4.5837C7.1909 4.29813 6.98836 4.05502 6.73063 3.88446C6.46563 3.71849 6.15853 3.63393 5.84676 3.64111H5.76641C5.45754 3.63104 5.15292 3.71583 4.89281 3.88427C4.6327 4.05272 4.42935 4.29689 4.30964 4.58451C4.0386 5.26735 4.0386 6.02937 4.30964 6.71222C4.43215 6.99764 4.63464 7.24068 4.89218 7.41145V8.27941H3.96493V7.59234L3.88458 7.49257C3.78685 7.36933 3.70127 7.23675 3.62906 7.09671C3.42053 6.64289 3.3125 6.14864 3.3125 5.64837C3.3125 5.14809 3.42053 4.65383 3.62906 4.20001C3.82791 3.80758 4.13558 3.48205 4.51454 3.26311C4.91362 3.04898 5.35866 2.93701 5.81061 2.93701C6.26255 2.93701 6.70759 3.04898 7.10668 3.26311C7.48368 3.4826 7.79042 3.80662 7.99054 4.19677C8.20165 4.64986 8.3111 5.1444 8.3111 5.64512C8.3111 6.14583 8.20165 6.64037 7.99054 7.09347C7.91693 7.23322 7.83057 7.36574 7.73261 7.48932L7.65226 7.5891V8.27616H6.73143L6.73063 7.41064Z"
                                    fill="#111111"
                                  />
                                </svg>
                              </Link>
                            </TextReveal>

                            <motion.div
                              initial={{ y: "100%" }}
                              animate={
                                isLinkHover === item.collectionName
                                  ? { y: 0 }
                                  : { y: "100%" }
                              }
                              exit={{ y: "120%" }}
                              className="flex"
                            >
                              <Link
                                to={`/collections/${item.collectionName.toLowerCase()}`}
                                className="self-center text-[#8E9194] cursor-pointer"
                              >
                                See all
                              </Link>
                            </motion.div>
                          </motion.div>

                          <div className="flex gap-5 ">
                            {renderNavItems(item.collections)}
                          </div>
                        </motion.li>
                        <Drawline className="bg-[#8e91944d] h-[1px] mb-[2vw]" />
                      </>
                    ))}
                    <Link
                      className=" relative w-fit overflow-hidden cursor-pointer 3xl:mt-[3vw]"
                      to="/products"
                    >
                      <TextReveal>
                        <span className=" text-[1.2vw] 3xl:text-lg text-[#8e9194] font-bold before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-left before:scale-x-[-100%] hover:before:scale-x-[100%]  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-[100%] hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                          See all
                        </span>
                      </TextReveal>
                    </Link>
                  </>
                )}
              </motion.ul>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={isHover === "About" ? { opacity: 1 } : { opacity: 0 }}
                className={`row-start-1 col-start-1 h-fit grid ${
                  isHover === "About" ? "p-[3vw] md:p-[1.75vw]" : "p-0"
                }`}
              >
                {isHover === "About" && (
                  <>
                    <li className="mb-[2vw]">
                      <TextReveal>
                        <Link className="relative">
                          <span className="md:text-[2.75vw] 3xl:text-5xl  font-semibold   cursor-pointer text-[#000]  before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                            Who whe are
                          </span>
                        </Link>
                      </TextReveal>
                    </li>

                    <li className="mb-[2vw]">
                      <TextReveal>
                        <Link className="relative">
                          <span className="md:text-[2.75vw] 3xl:text-5xl  font-semibold   cursor-pointer text-[#000]  before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                            Press
                          </span>
                        </Link>
                      </TextReveal>
                    </li>

                    <li className="mb-[2vw]">
                      <TextReveal>
                        <Link className="relative">
                          <span className="md:text-[2.75vw]   3xl:text-5xl  font-semibold  cursor-pointer text-[#000]   before:h-[1px] before:w-full before:bg-[#8e9194] before:absolute before:bottom-0  before:left-0 before:origin-right before:scale-x-0 hover:before:scale-x-100  hover:before:origin-left before:delay-200 before:transition-transform before:duration-300  after:content-[' ']  after:h-[1px] after:w-full after:bg-[#8e9194] after:absolute after:bottom-0  after:left-0 before after:origin-right after:scale-x-0 hover:after:scale-x-[-100%] after:duration-700 hover:after:origin-right after:transition-transform">
                            Dealers
                          </span>
                        </Link>
                      </TextReveal>
                    </li>
                  </>
                )}
              </motion.ul>

            </motion.nav>
          )}
        </AnimatePresence>
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
