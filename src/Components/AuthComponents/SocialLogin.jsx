import React, { useContext } from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Toast } from "../../Utils/Utilities";
import { useNavigate } from "react-router";

const SocialLogin = ({ location }) => {
  const navigate = useNavigate();
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    googleLogin().then((currentUSer) => {
      navigate(location.state || "/");
      Toast.fire({
        icon: "success",
        title: `Welcome Back ${currentUSer.user.displayName}!`,
      });
    });
  };

  const handleGithubLogin = async () => {
    githubLogin().then((currentUSer) => {
      navigate(location.state || "/");
      Toast.fire({
        icon: "success",
        title: `Welcome Back ${currentUSer.user.displayName}!`,
      });
    });
  };

  return (
    <div className="grid grid-cols-1, lg:grid-cols-2 gap-5">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center w-full justify-center px-5 py-2.5 border rounded-lg hover:bg-blue-50 duration-150 active:bg-blue-100"
      >
        <FcGoogle size={22} className="mr-1" /> Google
      </button>
      {/* <button
        onClick={handleFacebookLogin}
        className="flex items-center w-full justify-center px-5 py-2.5 border rounded-lg hover:bg-blue-50 duration-150 active:bg-blue-100"
      >
        <FaFacebookSquare size={22} className="mr-1" color="blue" /> Facebook
      </button> */}
      <button
        onClick={handleGithubLogin}
        className="flex items-center w-full justify-center px-5 py-2.5 border rounded-lg hover:bg-blue-50 duration-150 active:bg-blue-100"
      >
        <FaGithub size={22} className="mr-1" color="" /> Github
      </button>
    </div>
  );
};

export default SocialLogin;
