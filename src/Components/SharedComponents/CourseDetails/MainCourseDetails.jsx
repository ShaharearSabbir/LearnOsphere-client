import { motion } from "motion/react";
import React from "react";
import { image } from "../../../animation/animate";
import { FaPerson } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { pricePercentage } from "../../../Utils/Utilities";
import icons from "currency-icons";

const MainCourseDetails = ({
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
  if (price) {
    var discountPercentage = pricePercentage(price);
  }

  return (
    <div className="bg-blue-100 p-5 rounded-2xl space-y-6">
      <div className="flex justify-between items-center gap-5">
        <div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">{title}</h2>
          <p className="font-semibold text-blue-600">{mentorName}</p>
        </div>
        <button className="btn btn-primary-outline">Enroll</button>
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
                {RemainingSeat}/{totalSeat}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaClock />
              <p>{duration}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {topics.map((topic) => (
              <p className="bg-white p-1 rounded text-blue-600 h-fit">
                {topic}
              </p>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              {free ? (
                <h5 className="text-xl font-semibold text-blue-600">Free!!</h5>
              ) : (
                <>
                  <del>
                    {icons[price.currency].symbol}
                    {price?.regularPrice}
                  </del>
                  <h5 className="text-xl font-semibold text-blue-600">
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
