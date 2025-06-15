import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import ProfileDropDown from "./ProfileDropDown";
import BrandLogo from "./BrandLogo";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  user;
  const links = (
    <>
      <li className="text-gray-600 hover:text-gray-900">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-600 hover:text-gray-900">
        <NavLink to="/courses">Courses</NavLink>
      </li>
      {user?.role === "mentor" && (
        <>
          <li className="text-gray-600 hover:text-gray-900">
            <NavLink to={`/myCourses`}>My Courses</NavLink>
          </li>
          <li className="text-gray-600 hover:text-gray-900">
            <NavLink to="/addCourse">Add Course</NavLink>
          </li>
        </>
      )}
      {user?.role === "learner" && (
        <>
          <li className="text-gray-600 hover:text-gray-900">
            <NavLink to="/enrollments">My Enrollments</NavLink>
          </li>
        </>
      )}
      <li className="text-gray-600 hover:text-gray-900">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b-2 border-blue-200 lg:sticky top-0 z-100 bg-[#FFFFFFDF]">
      <nav className="flex justify-between items-center py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex gap-2">
            <BrandLogo />
          </Link>
        </div>
        <div className="flex-1 text-center hidden lg:block">
          <ul className="flex items-center justify-center gap-5">{links}</ul>
        </div>
        <div className="flex-1 flex justify-end">
          <ProfileDropDown links={links} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
