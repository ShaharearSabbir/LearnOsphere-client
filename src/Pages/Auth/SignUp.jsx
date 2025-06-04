import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa";
import AuthLogo from "../../Components/Auth/AuthLogo";
import { AuthContext } from "../../AuthContext/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());
    const { email, password, ...userData } = formEntries;
    createUser(email, password)
      .then((currentUser) => {
        console.log(currentUser.user);
      })
      .catch((err) => console.log(err.message));
  };

  const location = useLocation();
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen py-10 lg:py-20">
      <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
        <div className="">
          <AuthLogo />
          <div className="mt-5 space-y-2">
            <Link
              to={location.state || "/"}
              className="text-gray-800 text-2xl font-bold sm:text-3xl flex gap-2 mb-5 items-center"
            >
              <FaArrowLeft /> <span>Sign Up</span>
            </Link>
            <p className="">
              Already have an account??{" "}
              <Link
                to={"/auth"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div>
          <button className="flex items-center w-full justify-center px-5 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
            <FcGoogle size={22} className="mr-1" /> Continue With Google
          </button>
        </div>
        <div className="relative">
          <span className="block w-full h-px bg-gray-300"></span>
          <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
            Or continue with
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="font-medium">I'm a</label>
            <select
              name="role"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            >
              <option value="learner" selected>
                Learner
              </option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          <div></div>

          <div>
            <label className="font-medium">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium">Photo</label>
            <input
              name="image"
              type="file"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
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
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
