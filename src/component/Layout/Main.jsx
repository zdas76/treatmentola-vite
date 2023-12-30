import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Navber from "../shared/Navber";
import { HelmetProvider } from "react-helmet-async";

const Main = () => {
  return (
    <HelmetProvider>
      <ScrollRestoration />
      <div>
        <Header />
        <Navber></Navber>
        <Outlet />
        <Footer></Footer>
      </div>
    </HelmetProvider>
  );
};

export default Main;
