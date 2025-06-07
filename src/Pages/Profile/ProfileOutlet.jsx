import { Outlet } from "react-router";

const ProfileOutlet = () => {
  return (
    <div className=" flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default ProfileOutlet;
