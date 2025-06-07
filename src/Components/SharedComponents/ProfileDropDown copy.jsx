import React, { useEffect, useRef, useState } from "react";

const ProfileDropDown = ({ links, user, logOut }) => {
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
    <div className={`relative z-10 bg-white`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-blue-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img src={user?.photoURL} className="w-full h-full rounded-full" />
        </button>
        <div className="lg:hidden">
          <span className="block">{user?.displayName}</span>
          <span className="block text-sm text-gray-500">{user?.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, index) => (
          <li key={index}>
            <a
              className="block text-gray-600 lg:hover:bg-blue-50 lg:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={logOut}
            className="block text-gray-600 lg:hover:bg-blue-50 lg:p-2.5 w-full text-left"
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
