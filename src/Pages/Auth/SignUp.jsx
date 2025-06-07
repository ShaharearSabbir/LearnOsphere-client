import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Toast, uploadImage } from "../../Utils/Utilities";
import axios from "axios";
import SocialLogin from "../../Components/AuthComponents/SocialLogin";
import BrandLogo from "../../Components/SharedComponents/BrandLogo";

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const display_url = await uploadImage(image);
      setPhotoURL(display_url);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());
    const { email, password, ...userData } = formEntries;
    createUser(email, password)
      .then((currentUser) => {
        if (currentUser.user.email) {
          userData.email = currentUser.user.email;
          userData.uid = currentUser.user.uid;
          delete userData.image;
          userData.photoURL = photoURL;
          axios
            .post("http://localhost:3000/user", userData)
            .then((res) => {
              if (res.data.insertedId) {
                Toast.fire({
                  icon: "success",
                  title: "Account Created",
                });
                setUser({ ...currentUser.user, ...userData });
                navigate("/");
              } else {
                Toast.fire({
                  icon: "error",
                  title: "Error Updating Data",
                });
              }
            })
            .catch((err) => {
              Toast.fire({
                icon: "error",
                title: `${err.message}`,
              });
            });
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  };
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen py-10 lg:py-20">
      <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
        <div className="">
          <BrandLogo />
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
          <SocialLogin location={location} />
        </div>
        <div className="relative">
          <span className="block w-full h-px bg-blue-300"></span>
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
              name="displayName"
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium">Photo</label>
            <input
              onChange={handleImage}
              name="image"
              type="file"
              accept="image/*"
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
