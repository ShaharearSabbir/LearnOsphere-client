import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/SharedComponents/Footer";
import NavBar from "../Components/SharedComponents/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="py-3 px-4 max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
