import { Outlet } from "react-router";
import usePageTop from "../../Hooks/usePageTop";

const ProfileOutlet = () => {
  usePageTop();
  return (
    <div className=" flex justify-center items-center min-h-[80vh]">
      <Outlet />
    </div>
  );
};

export default ProfileOutlet;
