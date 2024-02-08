import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="rounded-xl bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
