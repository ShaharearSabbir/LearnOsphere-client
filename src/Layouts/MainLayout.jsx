import React, { useContext } from "react";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/SharedComponents/Footer";
import NavBar from "../Components/SharedComponents/NavBar";
import Loader from "../Components/SharedComponents/Loader";
import { AuthContext } from "../AuthContext/AuthContext";
import OnTop from "../Components/SharedComponents/OnTop";
import { motion } from "motion/react";
import { image } from "../animation/animate";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  const { state } = useNavigation();

  return (
    <>
      <NavBar />
      <div className="py-3 px-4 container mx-auto">
        {loading && state === "loading" ? (
          <div className="min-h-screen w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="my-5 md:my-10 lg:my-10">
            <Outlet />
          </div>
        )}
      </div>
      <Footer />
      <motion.div
        variants={image}
        initial="animate"
        onTap="initial"
        className="fixed bottom-4 right-4 z-[1000]"
      >
        <OnTop />
      </motion.div>
    </>
  );
};

export default MainLayout;
