import React, { Suspense, useContext } from "react";
import { Link, useLocation } from "react-router";
import MyCourseTableRow from "../../Components/MentorComponents/MyCourseTableRow";
import useSecureAPI from "../../Hooks/useSecureAPI";
import { AuthContext } from "../../AuthContext/AuthContext";
import Loader from "../../Components/SharedComponents/Loader";
import CoursesTable from "../../Components/MentorComponents/CoursesTable";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const { getDataByUID } = useSecureAPI();
  const location = useLocation();

  return (
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
        <Suspense fallback={<Loader />}>
          <CoursesTable getDataByUID={getDataByUID("courses", user.uid)} />
        </Suspense>
      </div>
    </div>
  );
};

export default MyCourses;
