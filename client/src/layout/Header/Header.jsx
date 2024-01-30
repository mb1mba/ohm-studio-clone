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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            console.log(newState[index]);
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
      <header className="fixed w-full px-5 pt-10">
        <nav className="flex justify-between min-h-20 relative">
          <Button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? "Close" : "Menu"}
          </Button>
          {!isMenuOpen ? <Button>Cart</Button> : null}
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
      </header>
    </>
  );
};

export default Header;
