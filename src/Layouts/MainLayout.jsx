import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
