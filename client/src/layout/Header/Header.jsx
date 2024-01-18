import React from "react";
import { CustomMenu, Button } from "/src/components/Header";

const Header = () => {
  return (
    <>
      <CustomMenu />

      <header className="absolute w-full px-5 pt-10  ">
        <nav className="flex justify-between min-h-20">
          <Button>Menu</Button>
          <Button>Cart</Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
