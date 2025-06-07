import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-lg mx-auto text-center space-y-2 my-20">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <img
        src={user.photoURL}
        className="w-70 object-cover h-70 rounded-2xl"
        alt="userPhone"
      />
      <h3 className="text-xl font-semibold">{user.displayName}</h3>
      <p>Email: {user.email || "No Email Found"}</p>
      <p>Role: {user.role || "No Role Selected Yet"}</p>
      <Link to={`/updateProfile`} className="btn btn-primary block">
        Edit
      </Link>
    </div>
  );
};

export default Profile;
