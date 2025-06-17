import axios from "axios";
import React, { useEffect, useState } from "react";
import { underline } from "../../animation/animate";
import underlineImage from "../../assets/line-2-category-2.svg";
import { motion } from "motion/react";
import CourseCard from "../../Components/HomeComponents/CourseCard";
import Loader from "../../Components/SharedComponents/Loader";
import { Helmet } from "react-helmet";

const Courses = () => {
  const [sortBy, setSortBy] = useState("createdAt");
  const [orderBy, setOrderBy] = useState("dsc");
  const [filterBy, setFilterBy] = useState("");
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(true);

  let url = `https://learnosphere-server.vercel.app/courses?sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}`;

  useEffect(() => {
    setloading(true);
    axios(url)
      .then((res) => {
        res.data;
        setCourses(res.data);
        setloading(false);
      })
      .catch((err) => {
        err;
      });
  }, [url]);

  useEffect(() => {
    axios(`https://learnosphere-server.vercel.app/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => {
        err;
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Courses | LearnOsphere</title>
      </Helmet>
      <h2 className="primary-title text-center">
        Most demanding{" "}
        <div className="primary-title-second">
          <span>Categories</span>
          <motion.img
            variants={underline()}
            initial="initial"
            whileInView="animate"
            className="absolute -bottom-1 right-0 -z-10"
            src={underlineImage}
            alt=""
          />
        </div>
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 my-16">
        <aside className="lg:col-span-3 rounded-2xl h-fit lg:sticky lg:top-24">
          <div>
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
                <option key={cat._id}>{cat.category}</option>
              ))}
            </select>
          </div>
        </aside>
        <section className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            <div className="col-span-3 min-h-[60vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            courses.map((course) => <CourseCard course={course} />)
          )}
        </section>
      </div>
    </>
  );
};

export default Courses;
