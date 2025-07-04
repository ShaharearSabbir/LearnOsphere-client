import React, { useEffect, useState, useContext, useRef } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Toast } from "../../Utils/Utilities";
import { Link, NavLink } from "react-router";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion } from "motion/react";
import axios from "axios";

const ProfileDropDown = ({ links }) => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        axios
          .post(
            "https://learnosphere-server.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then(() => {
            setIsOpen(false);
            setUser(null);
            Toast.fire({
              icon: "warning",
              title: `See You Again ${user?.displayName || "User"}`,
            });
          });
      })
      .catch((error) => {
        console.error("Logout error:", error);
        Toast.fire({
          icon: "error",
          title: "Logout failed. Please try again.",
        });
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div>
        <div className="hidden lg:flex lg:gap-4">
          {!user ? (
            <>
              <Link className="btn btn-secondary" to="/register">
                Register
              </Link>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            </>
          ) : (
            <button
              className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-blue-200 ring-2 lg:hover:ring-blue-600 lg:focus:ring-blue-600 hidden lg:inline cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              <img
                src={
                  user?.photoURL ||
                  "https://placehold.co/40x40/cccccc/ffffff?text=U"
                }
                className="w-full h-full rounded-full"
                alt="User Profile"
              />
            </button>
          )}
        </div>
        <div>
          {user ? (
            <button
              className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-blue-200 ring-2 lg:focus:ring-blue-600 lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              <img
                src={
                  user?.photoURL ||
                  "https://placehold.co/40x40/cccccc/ffffff?text=U"
                }
                className="w-full h-full rounded-full"
                alt="User Profile"
              />
            </button>
          ) : (
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiBars3 className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      <motion.div
        initial={{ x: 70, y: -50, scale: 0, opacity: 0 }}
        whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`${
          isOpen ? "absolute" : "hidden"
        } z-10 top-12 right-0 min-w-40 bg-white p-5 rounded-2xl border-blue-200 border-2`}
      >
        <ul className="lg:hidden space-y-3 mb-3">{links}</ul>
        <ul className=" *:text-gray-600 *:hover:text-gray-900 space-y-3">
          {user ? (
            <>
              <li>
                <NavLink to={`/profile`}>Profile</NavLink>
              </li>
              <li className="text-gray-600 hover:text-gray-900">
                <NavLink to={`/myCourses`}>My Courses</NavLink>
              </li>
              <li className="text-gray-600 hover:text-gray-900">
                <NavLink to="/addCourse">Add Course</NavLink>
              </li>
              <li className="text-gray-600 hover:text-gray-900">
                <NavLink to="/enrollments">My Enrollments</NavLink>
              </li>
              <li>
                <Link onClick={handleSignOut} className="cursor-pointer">
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register" className="inline-block">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProfileDropDown;
