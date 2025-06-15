import axios from "axios";
import { Toast } from "../../Utils/Utilities";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

const EnrollmentTableRow = ({ enrollment, idx, setEnrollments }) => {
  const { user } = useContext(AuthContext);

  console.log(enrollment);

  const handleDeleteEnrollment = (id) => {
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
            .delete(`https://learnosphere-server.vercel.app/enrollment/${id}`)
            .then((res) => {
              if (res.data.deletedCount) {
                user.enrolledCourses = user.enrolledCourses.filter(
                  (courseId) => courseId !== enrollment.courseId
                );
                console.log(user);
                setEnrollments((prevEnrollment) =>
                  prevEnrollment.filter((enrollment) => enrollment._id !== id)
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
        <img
          src={enrollment.coursePhotoURL}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <span className="block text-gray-700 text-sm font-medium">
            {enrollment.courseTitle}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {format(enrollment.enrollmentDate, "yyyy MM dd")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {enrollment.courseCategory}
      </td>
      <td className="text-right px-6 ">
        <button
          onClick={() => handleDeleteEnrollment(enrollment._id)}
          className="btn btn-secondary-outline"
        >
          Remove Enrollment
        </button>
      </td>
    </tr>
  );
};

export default EnrollmentTableRow;
