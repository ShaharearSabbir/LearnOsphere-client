import React from "react";
import { underline } from "../../../animation/animate";
import underlineImage from "../../../assets/line-2-category-2.svg";
import { motion } from "motion/react";
import ReviewSlider from "./ReviewSlider";

const ReviewsOnHome = () => {
  return (
    <div className="my-16 lg:my-30 text-center">
      <div className="text-center my-5 lg:my-12">
        <h4 className="secondary-title">Testimonials</h4>
        <h2 className="primary-title">
          People Say About{" "}
          <div className="primary-title-second">
            <span>LearnOsphere</span>
            <motion.img
              variants={underline()}
              initial={`initial`}
              whileInView={`animate`}
              className="absolute -bottom-1 right-0 -z-10"
              src={underlineImage}
              alt=""
            />
          </div>
        </h2>
      </div>
      <ReviewSlider />
    </div>
  );
};

export default ReviewsOnHome;
