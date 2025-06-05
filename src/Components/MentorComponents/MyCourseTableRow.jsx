import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router";
import { Toast } from "../../Utils/Utilities";

const MyCourseTableRow = ({ course, idx, setCourses }) => {
  const handleDeleteCourse = (id) => {
    axios
      .delete(`http://localhost:3000/course/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setCourses((prevCourses) =>
            prevCourses.filter((course) => course._id !== id)
          );
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  };

  const location = useLocation();
  return (
    <tr key={idx}>
      <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
        <img src={course.photoURL} className="w-10 h-10 rounded-full" />
        <div>
          <span className="block text-gray-700 text-sm font-medium">
            {course.title}
          </span>
          <span className="block text-gray-700 text-xs">
            {course.description}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {!parseInt(course.RemainingSeat) ? (
          "Full"
        ) : (
          <>
            {course.RemainingSeat}/{course.totalSeat}
          </>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{course.category}</td>
      <td className="text-right px-6 whitespace-nowrap">
        <Link
          state={location.pathname}
          to={`/updateCourse/${course._id}`}
          className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeleteCourse(course._id)}
          className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyCourseTableRow;
