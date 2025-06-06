import React from "react";
import SimpleSlider from "../../Components/HomeComponents/Slider/SimpleSlider";
import Features from "../../Components/HomeComponents/Features";
import TopCategories from "../../Components/HomeComponents/TopCategories";
import { motion } from "motion/react";
import { container } from "../../animation/animate";
import LatestCourses from "../../Components/HomeComponents/LatestCourses";
import PopularCourses from "../../Components/HomeComponents/PopularCourses";
import TwinBoxes from "../../Components/HomeComponents/TwinBoxes";

const MainHome = () => {
  return (
    <div>
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
      <div>
        <TwinBoxes />
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
    </div>
  );
};

export default MainHome;
