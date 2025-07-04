import { motion } from "motion/react";
import React, { useContext, useEffect, useState } from "react";
import { image } from "../../../animation/animate";
import { FaPerson } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { pricePercentage, Toast } from "../../../Utils/Utilities";
import icons from "currency-icons";
import { AuthContext } from "../../../AuthContext/AuthContext";
import axios from "axios";
import { Link } from "react-router";

const MainCourseDetails = ({
  _id,
  title,
  description,
  category,
  topics,
  totalSeat,
  photoURL,
  price,
  mentorName,
  RemainingSeat,
  duration,
  free,
}) => {
  const { user } = useContext(AuthContext);

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [remaining, setRemaining] = useState(RemainingSeat);

  useEffect(() => {
    user?.enrolledCourses?.forEach((id) => {
      if (id === _id) {
        setIsEnrolled(true);
      }
    });
  }, [user, _id]);

  if (price) {
    var discountPercentage = pricePercentage(price);
  }

  const handleEnroll = (courseId, uid, enrolledCourses) => {
    if (!user) {
      Toast.fire({
        icon: "warning",
        title: `Login to Enroll`,
      });
    }
    if (!isEnrolled) {
      if (enrolledCourses.length >= 3) {
        Toast.fire({
          icon: "warning",
          title: "3 courses only",
        });
        return;
      }
    }

    const enrollmentData = { enroll: !isEnrolled, courseId, uid };
    axios
      .post("https://learnosphere-server.vercel.app/enrollment", enrollmentData)
      .then((res) => {
        res.data;
        if (res.data.message === "Enrollment successful!") {
          setRemaining((prev) => prev - 1);
          enrolledCourses.push(courseId);
          setIsEnrolled(true);
          Toast.fire({
            icon: "success",
            title: "Enrolled Successfully",
          });
        }
        if (res.data.message === "Unenrollment successful!") {
          setRemaining((prev) => prev + 1);
          const updatedEnrolled = enrolledCourses.filter(
            (id) => id !== courseId
          );
          user.enrolledCourses = updatedEnrolled;
          setIsEnrolled(false);
          Toast.fire({
            icon: "warning",
            title: "Discarded Successfully",
          });
        }
      });
  };

  return (
    <div className="bg-blue-100 p-5 rounded-2xl space-y-6 sticky top-20">
      <div className="flex justify-between items-center gap-5">
        <div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">{title}</h2>
          <p className="font-semibold text-gray-600">{mentorName}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {remaining > 0 ? (
            <>
              {isEnrolled ? (
                <button
                  onClick={() =>
                    handleEnroll(_id, user?.uid, user?.enrolledCourses)
                  }
                  className="btn btn-secondary-outline"
                >
                  Discard
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleEnroll(_id, user?.uid, user?.enrolledCourses)
                  }
                  className="btn btn-primary-outline"
                  // disabled={user ? false : true}
                >
                  Enroll
                </button>
              )}
              <p className="text-sm text-right">{remaining} seat available</p>
            </>
          ) : (
            <p className="text-red-600 bg-red-100 px-2 py-1 rounded-xl">
              No seat available
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-2xl">
            <motion.img
              variants={image()}
              initial={`initial`}
              whileHover={`animate`}
              className="w-full h-full object-cover"
              src={photoURL}
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-5">
          <p>{description}</p>
          <p className="font-semibold text-amber-500">{category}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <FaPerson />
              <p>
                {remaining}/{totalSeat}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaClock />
              <p>{duration}H</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {topics.map((topic, index) => (
              <p
                key={index}
                className="bg-white p-1 rounded text-gray-600 h-fit"
              >
                {topic}
              </p>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              {free ? (
                <h5 className="text-xl font-semibold text-gray-600">Free!!</h5>
              ) : (
                <>
                  <del>
                    {icons[price.currency].symbol}
                    {price?.regularPrice}
                  </del>
                  <h5 className="text-xl font-semibold text-gray-600">
                    {icons[price.currency].symbol}
                    {price.discountedPrice}
                  </h5>
                </>
              )}
            </div>
            {price && (
              <p className="py-1 px-2 bg-green-100 text-green-600 rounded-lg w-fit">
                -{discountPercentage}%
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCourseDetails;
