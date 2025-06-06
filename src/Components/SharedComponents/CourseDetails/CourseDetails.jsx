import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MainCourseDetails from "./MainCourseDetails";
import SideCourseDetails from "./SideCourseDetails";
import { motion } from "motion/react";
import { container } from "../../../animation/animate";

const CourseDetails = () => {
  const course = useLoaderData().data;
  console.log(course);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8 lg:my-16">
      <motion.div
        variants={container("LTR")}
        initial="initial"
        animate="animate"
        className="lg:col-span-8"
      >
        <MainCourseDetails {...course} />
      </motion.div>
      <motion.div
        variants={container("RTL")}
        initial="initial"
        animate="animate"
        className="lg:col-span-4"
      >
        <SideCourseDetails />
      </motion.div>
    </div>
  );
};

export default CourseDetails;
