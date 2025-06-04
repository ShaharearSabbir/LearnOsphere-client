import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Slide = ({ title, description, img, buttonText, buttonLink }) => {
  return (
    <div className="bg-cover bg-center relative text-white min-h-[30vh] md:min-h-[50vh]  lg:min-h-[70vh] flex justify-around items-center ">
      <img
        src={img}
        className="-z-10 object-cover w-full h-full top-0 absolute"
        alt="Your Image"
      />
      <div className="absolute -z-1 inset-0 top-0 bg-[#00000061]"></div>
      <div className="flex flex-col gap-5 p-5">
        <h1 className="text-3xl lg:text-5xl text-center font-bold">{title}</h1>
        <p className="max-w-md mx-auto text-center">{description}</p>
        <motion.div
          className="text-center"
          initial={{ y: 0 }}
          whileInView={{ y: [0, 2, 0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Link className="btn btn-secondary w-fit mx-auto" to={buttonLink}>
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide;
