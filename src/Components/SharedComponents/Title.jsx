import React from "react";
import { underline } from "../../animation/animate";
import underlineImage from "../../assets/line-2-category-2.svg";
import { motion } from "motion/react";

const Title = ({ secondary, title, utitle, center }) => {
  return (
    <div className={`my-5 lg:mb-12`}>
      {secondary && (
        <h4
          className={`text-lg mb-1 bg-linear-to-tr from-blue-600 to-amber-500 bg-clip-text text-transparent font-light tracking-tight text-center ${
            center || "lg:text-left"
          }`}
        >
          {secondary}
        </h4>
      )}
      <h2
        className={`text-3xl lg:text-5xl font-bold text-center  ${
          center || "lg:text-left"
        }`}
      >
        {title && title + " "}
        {utitle && (
          <div className="inline text-blue-600 relative">
            <span>{utitle}</span>
            <motion.img
              variants={underline()}
              initial={`initial`}
              whileInView={`animate`}
              className="absolute -bottom-1 right-0 -z-10"
              src={underlineImage}
              alt=""
            />
          </div>
        )}
      </h2>
    </div>
  );
};

export default Title;
