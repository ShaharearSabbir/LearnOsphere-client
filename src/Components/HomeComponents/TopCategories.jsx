import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import underlineImage from "../../assets/line-2-category-2.svg";
import { motion } from "motion/react";
import { underline } from "../../animation/animate";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/categories?limit=4")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="my-16 lg:my-30 text-center">
      <div className="text-center my-5 lg:my-12">
        <h4 className="text-lg font-bold mb-1">Top Categories</h4>
        <h2 className="text-3xl lg:text-5xl font-bold">
          Most demanding{" "}
          <div className="inline text-blue-600 relative">
            <span>Categories</span>
            <motion.img
              variants={underline()}
              initial={`initial`}
              whileInView={`animate`}
              className="absolute -bottom-1 right-0 -z-10"
              src={underlineImage}
              alt=""
            />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 lg:my-12">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
      <button className="btn btn-primary">All Categories</button>
    </div>
  );
};

export default TopCategories;
