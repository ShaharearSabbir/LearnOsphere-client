import React from "react";
import { motion } from "motion/react";
import { image } from "../../animation/animate";
import { FaClock, FaStar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import icons from "currency-icons";
import { Link } from "react-router";
import { pricePercentage } from "../../Utils/Utilities";
import { format } from "date-fns";

const CourseCard = ({ course }) => {
  if (course.price) {
    var discountPercentage = pricePercentage(course.price);
  }

  const createdTime = () => {
    if (course.createdAt) {
      return format(new Date(course.createdAt), "yyyy-MM-dd");
    } else {
      return "No Time Found";
    }
  };

  return (
    <div className="border-2 border-blue-200 p-5 rounded-2xl relative hover:shadow-xl overflow-hidden h-fit pb-20 lg:pb-50">
      <div className="overflow-hidden rounded-2xl">
        <motion.img
          variants={image()}
          initial="initial"
          whileHover="animate"
          className="w-full h-full object-cover"
          src={course.photoURL}
          alt=""
        />
      </div>
      <motion.div
        initial={{ y: 65 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-3 mt-5 lg:absolute lg:bottom-0 lg:right-0 lg:left-0 lg:p-5 bg-white"
      >
        <div className="flex justify-between">
          <p className="py-1 px-2 bg-blue-100 text-gray-600 rounded-lg w-fit">
            {course.category}
          </p>
          {!course.free && (
            <p className="py-1 px-2 bg-green-100 text-green-600 rounded-lg w-fit">
              -{discountPercentage}%
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <FaClock />
            <span>{course.duration}H</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaPerson />
            <span>
              {course.RemainingSeat}/{course.totalSeat}
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">
          {course.title}{" "}
          <span className="text-sm bg-blue-100 text-blue-600 inline-block px-2 py-0.5 rounded-full">
            {createdTime()}
          </span>
        </h3>
        <div className="flex justify-between items-end bottom-5">
          <div>
            {course.free ? (
              <h5 className="text-xl font-semibold text-gray-600">Free!!</h5>
            ) : (
              <>
                <del>
                  {icons[course.price.currency].symbol}
                  {course.price?.regularPrice}
                </del>
                <h5 className="text-xl font-semibold text-gray-600">
                  {icons[course.price.currency].symbol}
                  {course.price?.discountedPrice}
                </h5>
              </>
            )}
          </div>

          <div>
            {course.numberOfReview > 0 && (
              <div className="flex gap-1 items-center">
                <FaStar className="h-5 w-5 text-yellow-500" />
                <p>
                  {course.averageRating}/{course.numberOfReview}
                </p>
              </div>
            )}
          </div>
        </div>
        <Link
          to={`/courseDetails/${course._id}`}
          className="btn btn-primary-outline w-full block text-center"
        >
          View Details
        </Link>
      </motion.div>
    </div>
  );
};

export default CourseCard;
