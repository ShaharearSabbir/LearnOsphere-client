import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import underlineImage from "../../assets/line-2-category-2.svg";
import { motion } from "motion/react";
import { underline } from "../../animation/animate";
import { Link } from "react-router";
import Title from "../SharedComponents/Title";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios("https://learnosphere-server.vercel.app/categories?limit=4")
      .then((res) => setCategories(res.data))
      .catch((err) => err.message);
  }, []);
  return (
    <div className="my-16 lg:my-30 text-center">
      <Title
        secondary="Top Categories"
        title="Most demanding"
        utitle="Categories"
        center={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-6 lg:my-12">
        {categories.map((category) => (
          <Link to={`/category/${category.category}`}>
            <CategoryCard key={category._id} category={category} />
          </Link>
        ))}
      </div>
      <Link to="/allCategories" className="btn btn-primary-outline">
        All Categories
      </Link>
    </div>
  );
};

export default TopCategories;
