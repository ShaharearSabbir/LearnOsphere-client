import React from "react";

import icons from "currency-icons";
import { Link } from "react-router";

const CoursesTableDisplay = ({ courses }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-blue-200">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-blue-50 text-gray-600 font-medium border-b border-blue-200">
          <tr>
            <th className="py-3 px-6">Title</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6 text-center">Duration</th>
            <th className="py-3 px-6 text-center">Seats</th>
            <th className="py-3 px-6 text-center">Price</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y divide-blue-100">
          {courses.map((course) => (
            <tr
              key={course._id}
              className="hover:bg-blue-50 transition duration-150 ease-in-out"
            >
              <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-800">
                {course.title}
              </td>
              <td className="py-4 px-6 whitespace-nowrap">{course.category}</td>
              <td className="py-4 px-6 whitespace-nowrap text-center">
                {course.duration}H
              </td>
              <td className="py-4 px-6 whitespace-nowrap text-center">
                {/* Displaying RemainingSeat/totalSeat */}
                {course.RemainingSeat !== undefined &&
                course.totalSeat !== undefined
                  ? `${course.RemainingSeat}/${course.totalSeat}`
                  : "N/A"}
              </td>
              <td className="py-4 px-6 whitespace-nowrap text-center">
                {course.free ? (
                  <span className="text-green-600 font-semibold">Free</span>
                ) : (
                  <>
                    {course.price?.discountedPrice ? (
                      <span className="font-semibold">
                        {icons[course.price.currency]?.symbol || "$"}
                        {course.price.discountedPrice}
                      </span>
                    ) : (
                      <span className="font-semibold">
                        {icons[course.price.currency]?.symbol || "$"}
                        {course.price?.regularPrice || "N/A"}
                      </span>
                    )}
                  </>
                )}
              </td>
              <td className="py-4 px-6 whitespace-nowrap text-center">
                <Link
                  to={`/courseDetails/${course._id}`}
                  className="px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-150 ease-in-out"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTableDisplay;
