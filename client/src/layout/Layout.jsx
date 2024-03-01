import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <>
      <Header />
      <main className="rounded-xl bg-white">
        <Outlet context={{ isFooterInView }} />
      </main>
      <Footer
        isFooterInView={isFooterInView}
        setIsFooterInView={setIsFooterInView}
      />
    </>
  );
};

export default Layout;
