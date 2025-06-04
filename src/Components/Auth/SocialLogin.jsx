import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <button className="flex items-center w-full justify-center px-5 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
      <FcGoogle size={22} className="mr-1" /> Continue With Google
    </button>
  );
};

export default SocialLogin;
