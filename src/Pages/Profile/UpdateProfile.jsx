import React, { useContext, useState } from "react";
import { Toast, uploadImage } from "../../Utils/Utilities";
import { AuthContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const UpdateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, userInfoUpdate } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [error, setError] = useState(false);

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const display_url = await uploadImage(image);
      setPhotoURL(display_url);
      setPhotoUploaded(true);
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    delete userData.image;
    userData.photoURL = photoURL;

    if (
      userData.displayName !== user.displayName ||
      userData.photoURL !== user.photoURL
    ) {
      userInfoUpdate(userData.displayName, userData.photoURL);
    }
    if (
      userData.displayName !== user.displayName ||
      userData.photoURL !== user.photoURL ||
      userData.role !== user.role
    ) {
      axios
        .put(`http://localhost:3000/user/${user.uid}`, userData)
        .then((res) => {
          if (res.data.modifiedCount) {
            setUser((prev) => ({ ...prev, ...userData }));
            Toast.fire({
              icon: "success",
              title: `Profile Updated!`,
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
        });
    }
    if (!error) {
      navigate(location.state);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center my-5">User Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-5">
        <div>
          <label className="font-medium">Role</label>
          <select
            defaultValue={user.role}
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
            defaultValue={user.displayName}
            name="displayName"
            type="text"
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label
            htmlFor="courseImage"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Thumbnail
          </label>
          <input
            onChange={handleImage}
            name="image"
            type="file"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-gray-700 hover:file:bg-blue-100"
            accept="image/*"
          />
          {photoURL && (
            <div className="mt-2 text-center">
              <img
                src={photoURL}
                alt="Thumbnail Preview"
                className="max-h-32 w-auto mx-auto rounded-md border"
              />
              {photoUploaded && (
                <p className="text-sm text-gray-500 mt-1">
                  Image uploaded successfully!
                </p>
              )}
            </div>
          )}
        </div>
        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
