import React from "react";
import { useLoaderData, useParams } from "react-router";
import CourseCard from "./CourseCard";
import { Helmet } from "react-helmet";

const CourseByCategory = () => {
  const { cat } = useParams();
  const courses = useLoaderData().data;
  console.log(courses);
  return (
    <div>
      <Helmet>
        <title>{cat}</title>
      </Helmet>
      <h2 className="primary-title text-center my-10">{cat}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseByCategory;
