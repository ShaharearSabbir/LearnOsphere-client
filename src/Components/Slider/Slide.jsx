import React from "react";
import { Link } from "react-router";

const Slide = ({ title, description, img, buttonText, buttonLink }) => {
  return (
    <div className="bg-cover bg-center relative text-white  min-h-[70vh] flex justify-around items-center rounded-2xl overflow-hidden">
      <img src={img} className="-z-10 top-0 absolute" alt="Your Image" />
      <div className="absolute -z-1 inset-0 top-0 bg-[#00000061]"></div>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
        <p className="max-w-md mx-auto">{description}</p>
        <Link className="btn btn-secondary w-fit mx-auto" to={buttonLink}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
