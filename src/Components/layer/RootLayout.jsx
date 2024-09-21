import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
