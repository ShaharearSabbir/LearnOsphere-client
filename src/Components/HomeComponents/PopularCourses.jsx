import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router";
import Title from "../SharedComponents/Title";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios(
      `https://learnosphere-server.vercel.app/courses?sortBy=totalEnrollment&limit=8`
    )
      .then((res) => setCourses(res.data))
      .catch((err) => err.message);
  }, []);
  return (
    <div className="my-16 lg:my-30 space-y-4 lg:space-y-8">
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center lg:justify-between">
        <Title
          secondary="Popular Courses"
          title="Most Popular"
          utitle="Courses"
        />
        <Link to="/courses" className="btn btn-primary-outline">
          View All Courses
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
