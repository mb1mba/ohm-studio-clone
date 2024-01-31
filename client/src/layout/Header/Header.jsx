import { useState } from "react";
import { CustomMenu, Button } from "/src/components/Header";
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
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart } = useCartContext();
  console.log(cart);
  const links = {
    Shop: [
      {
        name: "Pion",
        path: "/collections/pion",
      },
      {
        name: "Bloc",
        path: "/collections/bloc",
      },
      {
        name: "Ban",
        path: "/collections/ban",
      },
    ],
    About: [
      {
        name: "Who we are",
        path: "#",
      },
      {
        name: "Press",
        path: "#",
      },
      {
        name: "Dealers",
        path: "#",
      },
    ],
  };

  const [isSectionOpen, setIsSectionOpen] = useState(
    Array(links.length).fill(false)
  );

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
      <header className="fixed w-full px-5 pt-10 top-0">
        <nav className="flex justify-between min-h-20 relative">
          <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? "Close" : "Menu"}
          </Button>

          <Button onClick={() => setIsCartOpen((prev) => !prev)}>Cart</Button>
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
          <div className="absolute top-0 left-0 bg-white h-screen w-full  px-5 pt-10 ">
            <div className=" fixed top-0 flex justify-between min-h-20 items-center w-full">
              <h3 className="text-[8vw] font-helvetica">Cart</h3>
              <Button onClick={() => setIsCartOpen(false)}>Close</Button>
            </div>

            <div className="h-screen">
              {cart.map((item) => {
                return (
                  <>
                    <div className="grid grid-cols-2 gap-2 py-11">
                      <img
                        className="w-full object-cover rounded-lg"
                        src={`http://localhost:5500/${item.images[0]}`}
                      />
                      <div className="grid">
                        <div className="grid grid-row-3 h-20 gap-2 text-gray-400 font-helvetica ">
                          <span className=" text-black  ">{item.name}</span>
                          <span>{item.price}</span>
                          <div className="grid grid-rows-1 grid-cols-2 gap-2">
                            <p className="">Quantity</p>
                            <div className="flex w-full items-start justify-between ">
                              <button>-</button>
                              <p>{item.quantity}</p>
                              <button onClick={() => addToCart(item)}>+</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex  items-end pb-3">
                          <button>Delete</button>
                        </div>
                      </div>
                    </div>
                    <Drawline />
                  </>
                );
              })}
            </div>
            <div className="grid gap-3 fixed bottom-0">
              <div className="flex justify-between min-h-20 items-center">
                <h3 className="text-[8vw] font-helvetica">Cart</h3>
                <Button onClick={() => setIsCartOpen(false)}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
