import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link, useLocation } from "react-router";
import { Helmet } from "react-helmet";
import usePageTop from "../../Hooks/usePageTop";

const Profile = () => {
  usePageTop();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-lg mx-auto text-center space-y-2 my-20">
      <Helmet>
        <title>Profile | LearnOsphere</title>
      </Helmet>
      <h1 className="text-3xl font-bold">User Profile</h1>
      <img
        src={user.photoURL || null}
        className="w-70 object-cover h-70 rounded-2xl"
        alt="no photo founded"
      />
      <h3 className="text-xl font-semibold">
        {user.displayName || "No Name Founded"}
      </h3>
      <p>Email: {user.email || "No Email Found"}</p>
      <Link
        to={`/updateProfile`}
        state={location.pathname}
        className="btn btn-primary block"
      >
        Edit
      </Link>
    </div>
  );
};

export default Profile;
