import React from "react";
import { CustomMenu, Button } from "/src/components/Header";

const Header = () => {
  return (
    <header className="absolute w-full px-5 pt-10 ">
      <nav className="flex justify-between">
        <Button>Menu</Button>
        <CustomMenu />
        <Button>Cart</Button>
      </nav>
    </header>
  );
};

export default Header;
