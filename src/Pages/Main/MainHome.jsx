import React from "react";
import SimpleSlider from "../../Components/HomeComponents/Slider/SimpleSlider";
import Features from "../../Components/HomeComponents/Features";
import TopCategories from "../../Components/HomeComponents/TopCategories";
import { motion } from "motion/react";
import { container } from "../../animation/animate";
import LatestCourses from "../../Components/HomeComponents/LatestCourses";
import PopularCourses from "../../Components/HomeComponents/PopularCourses";
import TwinBoxes from "../../Components/HomeComponents/TwinBoxes";
import ReviewsOnHome from "../../Components/HomeComponents/ReviewsOnHome/ReviewsOnHome";
import TwinBoxesMobile from "../../Components/HomeComponents/TwinBoxesMobile";
import FAQ from "../../Components/HomeComponents/FAQ";

const MainHome = () => {
  return (
    <div className="overflow-hidden my-5 lg:my-12">
      <motion.div
        variants={container("BTT")}
        initial={"initial"}
        animate={`animate`}
      >
        <SimpleSlider />
        <Features />
      </motion.div>
      <motion.div
        variants={container("BTT")}
        initial={`initial`}
        whileInView={`animate`}
      >
        <TopCategories />
      </motion.div>
      <div className="hidden lg:block">
        <TwinBoxes />
      </div>
      <div className="lg:hidden">
        <TwinBoxesMobile />
      </div>
      <motion.div
        variants={container("BTT")}
        initial={`initial`}
        whileInView={`animate`}
      >
        <LatestCourses />
      </motion.div>

      <motion.div
        variants={container("BTT")}
        initial={`initial`}
        whileInView={`animate`}
      >
        <PopularCourses />
      </motion.div>

      <ReviewsOnHome />

      <FAQ />
    </div>
  );
};

export default MainHome;
