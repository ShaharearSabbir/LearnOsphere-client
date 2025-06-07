import React from "react";
import logo from "../../assets/LearnOsphere.png";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} width={46} alt="LearnOsphere Logo" />
      <h1 className="text-5xl text-blue-600 font-extrabold hidden md:inline">
        Learn
        <span className="font-thin tracking-tighter text-amber-500">
          Osphere
        </span>
      </h1>
    </div>
  );
};

export default BrandLogo;
