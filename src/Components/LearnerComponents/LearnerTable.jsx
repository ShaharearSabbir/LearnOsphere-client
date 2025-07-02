import React, { use, useState } from "react";
import EnrollmentTableRow from "./EnrollmentTableRow";
import {Link} from "react-router"
const LearnerTable = ({ getDataByUID }) => {
  const initialEnrollments = use(getDataByUID);
  const [enrollments, setEnrollments] = useState(initialEnrollments);
  return enrollments.length !== 0 ? (
    <table className="w-full table-auto text-sm text-left">
      <thead className="bg-blue-50 text-gray-600 font-medium border-b border-blue-200">
        <tr>
          <th className="py-3 px-6">Course Title</th>
          <th className="py-3 px-6 text-center">Enrollment Date</th>
          <th className="py-3 px-6 text-center">Category</th>
          <th className="py-3 px-6"></th>
        </tr>
      </thead>
      <tbody className="text-gray-600 *:border-b-1 *:border-blue-300">
        {enrollments?.map((enrollment, idx) => (
          <EnrollmentTableRow
            key={idx}
            enrollment={enrollment}
            setEnrollments={setEnrollments}
            enrollments={enrollments}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <div className="text-center p-5 space-y-3">
      <h4 className="text-2xl"> Start Learning Today!</h4>
      <Link className="btn btn-primary" to="/courses">
        Courses
      </Link>
    </div>
  );
};

export default LearnerTable;
