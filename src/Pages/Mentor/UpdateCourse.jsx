import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { Toast, uploadImage } from "../../Utils/Utilities";
import AddItemModal from "../../Components/Mentor/AddItemModal";
import axios from "axios";
import { AuthContext } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const UpdateCourse = () => {
  const course = useLoaderData().data;
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [free, setFree] = useState(!!course.free);
  const [photoURL, setPhotoURL] = useState(course.photoURL);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Problem Loading Categories",
        });
      });

    axios;
  }, []);

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const display_url = await uploadImage(image);
      setPhotoURL(display_url);
      setPhotoUploaded(true);
    }
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const form = e.target;
        const formData = new FormData(form);
        let courseData = Object.fromEntries(formData.entries());

        courseData.topics = courseData.topics
          .split(",")
          .map((topic) => topic.trim())
          .filter((topic) => topic !== "");

        delete courseData.image;
        if (photoURL) {
          courseData.photoURL = photoURL;
        }

        if (courseData.free) {
          courseData.free = courseData.free === "on" && true;
        } else {
          const { currency, discountedPrice, regularPrice, ...courseData2 } =
            courseData;
          courseData2.price = { currency, discountedPrice, regularPrice };
          courseData = courseData2;
        }
        courseData.mentorName = user.displayName;
        courseData.mentorEmail = user.email;
        courseData.mentorUID = user.uid;
        courseData.RemainingSeat = courseData.totalSeat;
        axios
          .put(`http://localhost:3000/course/${course._id}`, courseData)
          .then((res) => {
            if (res.data.modifiedCount) {
              Toast.fire({
                icon: "success",
                title: "Successfully Updated",
              });
              form.reset();
              setPhotoURL(null);
              setPhotoUploaded(false);
              navigate(location.state);
            }
          })
          .catch((err) => {
            Toast.fire({
              icon: "error",
              title: `${err.message}`,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen py-10 lg:py-20">
      <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
        <div>
          <div className="mt-5 space-y-2">
            <Link
              to={location.state || "/"}
              className="text-gray-800 text-2xl font-bold sm:text-3xl flex gap-2 mb-5 items-center"
            >
              <FaArrowLeft /> <span>Update Course</span>
            </Link>
          </div>
        </div>
        <form onSubmit={handleUpdateCourse} className="space-y-4">
          <div>
            <label
              htmlFor="courseTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Title
            </label>
            <input
              defaultValue={course.title}
              type="text"
              name="title"
              required
              placeholder="Enter Course Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="courseDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Description
            </label>
            <textarea
              defaultValue={course.description}
              name="description"
              required
              rows="3"
              placeholder="Enter Course Description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="courseTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Duration
            </label>
            <input
              type="number"
              name="duration"
              defaultValue={course.duration}
              required
              placeholder="Enter Course Duration"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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

          <div className="relative">
            <label
              htmlFor="courseCategory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              name="category"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            >
              <option value="" disabled selected>
                Select a category
              </option>
              {categories.map((cat) => (
                <option
                  selected={course.category == cat.category ? true : false}
                  value={cat.category}
                >
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium flex items-center text-sm text-gray-700 mb-1">
              Price
              <input
                type="checkbox"
                name="free"
                defaultChecked={!!course.free}
                onChange={() => setFree(!free)}
                className="ml-5 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2">Free</span>
            </label>
            {!free && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                <input
                  name="regularPrice"
                  type="number"
                  defaultValue={course.price.regularPrice}
                  required={!free}
                  placeholder="Regular Price"
                  min="0"
                  step="0.01"
                  className="mt-1 lg:col-span-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input
                  name="discountedPrice"
                  type="number"
                  required={!free}
                  defaultValue={course.price.discountedPrice}
                  placeholder="Discount Price"
                  min="0"
                  step="0.01"
                  className="mt-1 lg:col-span-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <select
                  name="currency"
                  defaultValue={course.price.currency}
                  required={!free}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                  <option value="CHF">CHF</option>
                  <option value="CNY">CNY</option>
                  <option value="INR">INR</option>
                  <option value="BRL">BRL</option>
                  <option value="RUB">RUB</option>
                  <option value="ZAR">ZAR</option>
                  <option value="BDT">BDT</option>
                </select>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="courseTopics"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Topics
            </label>
            <textarea
              id="courseTopics"
              defaultValue={course.topics}
              name="topics"
              required
              rows="2"
              placeholder="Enter Course Topics (Separate by comma, e.g., React, JavaScript, Hooks)"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="totalSeat"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Total Seat
            </label>
            <input
              defaultValue={course.totalSeat}
              type="number"
              name="totalSeat"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
