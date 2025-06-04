import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <NavBar />
      <div className="py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
