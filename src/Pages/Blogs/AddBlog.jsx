import React, { useContext, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Toast, uploadImage } from "../../Utils/Utilities";
import axios from "axios";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const AddBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [photoURL, setPhotoURL] = useState(null);

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const display_url = await uploadImage(image);
      setPhotoURL(display_url);
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    const PostedBy = user.uid;
    const newPost = { title, photoURL, content, PostedBy };
    axios
      .post("https://learnosphere-server.vercel.app/blog", newPost)
      .then((res) => {
        if (res.data.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Blog Posted",
          });
          navigate("/blogs");
        }
      })
      .catch((err) => err.message);
  };
  return (
    <div>
      <Helmet>
        <title>Add Blog | LearnOsphere</title>
      </Helmet>
      <form onSubmit={handlePost} className=" space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Enter Title"
            id=""
            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            id="courseImage"
            required
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
              <p className="text-sm text-gray-500 mt-1">
                Image uploaded successfully!
              </p>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Post Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
          />
        </div>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default AddBlog;
