import axios from "axios";
import React, { useEffect, useState } from "react";
import { underline } from "../../animation/animate";
import underlineImage from "../../assets/line-2-category-2.svg";
import { motion } from "motion/react";
import CourseCard from "../../Components/HomeComponents/CourseCard";
import Loader from "../../Components/SharedComponents/Loader";
import { Helmet } from "react-helmet";
import CoursesTableDisplay from "../../Components/HomeComponents/CoursesTableDisplay";
import usePageTop from "../../Hooks/usePageTop";
import OnTitleBar from "../../Components/SharedComponents/OnTitleBar";
import Title from "../../Components/SharedComponents/Title";

const Courses = () => {
  const [sortBy, setSortBy] = useState("createdAt");
  const [orderBy, setOrderBy] = useState("dsc");
  const [filterBy, setFilterBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(true);
  const [viewMode, setViewMode] = useState("card");
  usePageTop();

  let url = `https://learnosphere-server.vercel.app/courses?sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}&search=${searchQuery}`;

  useEffect(() => {
    setloading(true);
    axios(url)
      .then((res) => {
        setCourses(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setloading(false);
      });
  }, [url]);

  useEffect(() => {
    axios(`https://learnosphere-server.vercel.app/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <>
      <OnTitleBar>Courses</OnTitleBar>

      <Title
        secondary="All Courses"
        title="Most Demanding"
        utitle="Courses"
        center={true}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
        <aside className="lg:col-span-3 rounded-2xl h-fit lg:sticky lg:top-24 p-4  border border-blue-200">
          <div>
            <h5 className="font-bold">Search Courses</h5>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full my-2 bg-blue-100 px-4 py-1 rounded-xl mb-4"
            />

            {/* View Toggle Buttons */}
            <div className="mb-4">
              <h5 className="font-bold">View As</h5>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setViewMode("card")}
                  className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ease-in-out ${
                    viewMode === "card"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Card View
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ease-in-out ${
                    viewMode === "table"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Table View
                </button>
              </div>
            </div>

            <h5 className="font-bold">Order by</h5>
            <select
              defaultValue={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="dsc">Descending</option>
            </select>
            <h5 className="font-bold">Sort by</h5>
            <select
              defaultValue={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="createdAt">Newest</option>
              <option value="totalEnrollment">Best Selling</option>
              <option value="averageRating">Highest Rated</option>
              <option value="title">Alphabetical</option>
              <option value="numberOfReview">Number of Reviews</option>
            </select>

            <h5 className="font-bold">Filter by</h5>
            <select
              defaultValue={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option value={""}>All</option>
              <option value="free">Free</option>
              <option value="price">Paid</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
        </aside>
        <section className="lg:col-span-9">
          {loading ? (
            <div className="col-span-full min-h-[60vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : courses.length === 0 ? (
            <div className="col-span-full text-center text-gray-600 text-xl min-h-[60vh] flex justify-center items-center">
              No courses found matching your criteria.
            </div>
          ) : viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <CoursesTableDisplay courses={courses} />
          )}
        </section>
      </div>
    </>
  );
};

export default Courses;
