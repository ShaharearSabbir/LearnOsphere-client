import React from "react";
import SimpleSlider from "../../Components/HomeComponents/Slider/SimpleSlider";
import Features from "../../Components/HomeComponents/Features";
import TopCategories from "../../Components/HomeComponents/TopCategories";
import { motion } from "motion/react";
import { container } from "../../animation/animate";
import LatestCourses from "../../Components/HomeComponents/LatestCourses";

const MainHome = () => {
  return (
    <div>
      <motion.div
        variants={container("BTT", 0.1)}
        initial={"initial"}
        animate={`animate`}
      >
        <SimpleSlider />
        <Features />
      </motion.div>
      <motion.div
        variants={container("BTT", 0.2)}
        initial={`initial`}
        whileInView={`animate`}
      >
        <TopCategories />
      </motion.div>
      <motion.div
        variants={container("BTT", 0.2)}
        initial={`initial`}
        whileInView={`animate`}
      >
        <LatestCourses />
      </motion.div>
    </div>
  );
};

export default MainHome;
