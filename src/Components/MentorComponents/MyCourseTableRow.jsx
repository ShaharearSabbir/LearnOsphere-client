import axios from "axios";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { Toast } from "../../Utils/Utilities";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const MyCourseTableRow = ({ course, idx, setCourses }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const handleDeleteCourse = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://learnosphere-server.vercel.app/course/${id}`)
            .then((res) => {
              if (res.data.deletedCount) {
                setCourses((prevCourses) =>
                  prevCourses.filter((course) => course._id !== id)
                );
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  };

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
          className="btn btn-primary-outline"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeleteCourse(course._id)}
          className="ml-2 btn btn-secondary-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyCourseTableRow;
