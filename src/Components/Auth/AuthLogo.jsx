import React from "react";
import logo from "../../assets/LearnOsphere.png";

const AuthLogo = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex gap2 items-center">
        <img src={logo} width={60} />
        <h1 className="text-5xl font-bold text-blue-600">
          Learn<span className="tracking-tighter font-thin">Osphere</span>
        </h1>
      </div>
    </div>
  );
};

export default AuthLogo;
