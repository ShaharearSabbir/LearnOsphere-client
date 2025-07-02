import React, { use, useState } from "react";
import MyCourseTableRow from "./MyCourseTableRow";

const CoursesTable = ({ getDataByUID }) => {
  const initialCourses = use(getDataByUID);
  const [courses, setCourses] = useState(initialCourses);

  return courses.length !== 0 ? (
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
          <MyCourseTableRow course={course} setCourses={setCourses} idx={idx} />
        ))}
      </tbody>
    </table>
  ) : (
    <h4 className="text-2xl text-center p-5">Release Your First Course!</h4>
  );
};

export default CoursesTable;
