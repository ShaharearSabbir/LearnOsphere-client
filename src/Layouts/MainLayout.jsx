import React, { useContext } from "react";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/SharedComponents/Footer";
import NavBar from "../Components/SharedComponents/NavBar";
import Loader from "../Components/SharedComponents/Loader";
import { AuthContext } from "../AuthContext/AuthContext";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  const { state } = useNavigation();

  return (
    <>
      <NavBar />
      <div className="py-3 px-4 max-w-screen-xl mx-auto">
        {loading && state === "loading" ? (
          <div className="min-h-screen w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
