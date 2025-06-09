import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import SocialLogin from "../../Components/AuthComponents/SocialLogin";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Toast } from "../../Utils/Utilities";
import BrandLogo from "../../Components/SharedComponents/BrandLogo";

const SignIn = () => {
  const { loginUSer, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUSer(email, password)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: `Welcome Back ${user?.displayName || null}!`,
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen py-10">
      <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
        <div className="">
          <BrandLogo />
          <div className="mt-5 space-y-2">
            <Link
              to={location.state || "/"}
              className="text-gray-800 text-2xl font-bold sm:text-3xl flex gap-2 mb-5 items-center"
            >
              <FaArrowLeft /> <span>Sign In</span>
            </Link>
            <p className="">
              New Nere?{" "}
              <Link
                to={"register"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div>
          <SocialLogin location={location} />
        </div>
        <div className="relative">
          <span className="block w-full h-px bg-blue-300"></span>
          <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
            Or continue with
          </p>
        </div>
        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
