import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { uploadImage } from "../../Utils/Utilities";
import AddItemModal from "../../Components/Mentor/AddItemModal";
import axios from "axios";
import { AuthContext } from "../../AuthContext/AuthContext";

const AddCourse = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [free, setFree] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/categories")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (newCategory) {
      setCategories((prevCats) => [...prevCats, newCategory]);
    }
  }, [newCategory]);

  const handleImage = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const display_url = await uploadImage(image);
      setPhotoURL(display_url);
    }
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
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
    courseData.RemainingSeat = courseData.totalSeat
    axios
      .post("http://localhost:3000/course", courseData)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("Success");
          form.reset();
          setPhotoURL(null);
        }
      })
      .catch((err) => console.log(err.message));
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
              <FaArrowLeft /> <span>Add New Course</span>
            </Link>
          </div>
        </div>
        <form onSubmit={handleAddCourse} className="space-y-4">
          <div>
            <label
              htmlFor="courseTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
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
              id="courseDescription"
              name="description"
              required
              rows="3"
              placeholder="Enter Course Description"
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
              id="courseImage"
              required
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
                <p className="text-sm text-gray-500 mt-1">
                  Image uploaded successfully!
                </p>
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
              id="courseCategory"
              name="category"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            >
              <option value="" disabled selected>
                Select a category
              </option>
              {categories.map((cat) => (
                <option value={cat.category}>{cat.category}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute right-5 top-8 text-gray-500 hover:text-gray-800"
            >
              <FaPlusCircle size={22} color="blue" />
            </button>
          </div>

          <div>
            <label className="font-medium flex items-center text-sm text-gray-700 mb-1">
              Price
              <input
                type="checkbox"
                name="free"
                checked={free}
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
                  placeholder="Discount Price"
                  min="0"
                  step="0.01"
                  className="mt-1 lg:col-span-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <select
                  name="currency"
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
                  <option value="BDT" selected>
                    BDT
                  </option>
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
              type="number"
              name="totalSeat"
              required
              min="1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setNewCategory={setNewCategory}
      />
    </div>
  );
};

export default AddCourse;
