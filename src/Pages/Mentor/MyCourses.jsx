import React, { useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router";
import MyCourseTableRow from "../../Components/MentorComponents/MyCourseTableRow";

const MyCourses = () => {
  const location = useLocation();
  const [courses, setCourses] = useState(useLoaderData().data);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 my-16 md:px-8">
        <div className="justify-between items-center md:flex">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold">My Courses</h2>
          </div>
          <div className="mt-3 md:mt-0">
            <Link
              state={location.pathname}
              to="/addCourse"
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add Course
            </Link>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-blue-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Course Title</th>
                <th className="py-3 px-6 text-center">Seat Status</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {courses.map((course, idx) => (
                <MyCourseTableRow
                  course={course}
                  setCourses={setCourses}
                  idx={idx}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
