import React, { use, useState } from "react";
import EnrollmentTableRow from "./EnrollmentTableRow";

const LearnerTable = ({ getDataByUID }) => {
  const initialEnrollments = use(getDataByUID);
  const [enrollments, setEnrollments] = useState(initialEnrollments);
  return (
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
  );
};

export default LearnerTable;
