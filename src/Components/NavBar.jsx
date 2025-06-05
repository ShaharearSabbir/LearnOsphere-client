import { useState, useRef, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/LearnOsphere.png";
import { AuthContext } from "../AuthContext/AuthContext";
import { Toast } from "../Utils/Utilities";
// Profile Dropdown
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={`relative z-10 bg-white ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src={props.user?.photoURL}
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">{props.user?.displayName}</span>
          <span className="block text-sm text-gray-500">
            {props.user?.email}
          </span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li>
            <a
              key={idx}
              className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={props.logOut}
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5 w-full text-left"
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};
const NavBar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [menuState, setMenuState] = useState(false);
  console.log(user);

  const handleSignOut = () => {
    logOut().then(() => {
      setUser(null);
      Toast.fire({
        icon: "warning",
        title: `Signed Out`,
      });
    });
  };

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center justify-between space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} width={46} alt="Float UI logo" />
          </Link>
          <h1 className="text-3xl font-bold">
            Learn<span className="font-thin tracking-tighter">Osphere</span>
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <div
            className={` absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none space-x-2 ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <NavLink href={item.path}>{item.title}</NavLink>
                </li>
              ))}
              {user?.role === "mentor" && (
                <>
                  <li className="text-gray-600 hover:text-gray-900">
                    <NavLink to={`/myCourses/${user.uid}`}>My Courses</NavLink>
                  </li>
                  <li className="text-gray-600 hover:text-gray-900">
                    <NavLink to="/addCourse">Add Course</NavLink>
                  </li>
                </>
              )}
            </ul>
            <ProfileDropDown
              user={user}
              logOut={handleSignOut}
              class="mt-5 pt-5 border-t lg:hidden"
            />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            {!user ? (
              <>
                <Link className="btn btn-secondary" to="/auth/register">
                  Register
                </Link>
                <Link className="btn btn-primary" to="/auth">
                  Login
                </Link>
              </>
            ) : (
              <ProfileDropDown
                user={user}
                logOut={handleSignOut}
                class="hidden lg:block"
              />
            )}
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
