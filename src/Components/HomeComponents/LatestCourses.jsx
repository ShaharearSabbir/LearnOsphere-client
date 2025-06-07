import axios from "axios";
import React, { useEffect, useState } from "react";
import underlineImage from "../../assets/line-2-category-2.svg";
import { underline } from "../../animation/animate";
import { motion } from "motion/react";
import CourseCard from "./CourseCard";

const LatestCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/courses?limit=6`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="my-16 lg:my-30">
      <div className="flex flex-col md:flex-row gap-10 not-lg:items-center lg:justify-between my-5 lg:my-12">
        <div>
          <h4 className="secondary-title">New Courses</h4>
          <h2 className="primary-title">
            Most New{" "}
            <div className="primary-title-second">
              <span>Courses</span>
              <motion.img
                variants={underline()}
                initial={`initial`}
                whileInView={`animate`}
                className="absolute -bottom-1 right-0 -z-10"
                src={underlineImage}
                alt=""
              />
            </div>
          </h2>
        </div>
        <button className="btn btn-primary">View All Courses</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;
