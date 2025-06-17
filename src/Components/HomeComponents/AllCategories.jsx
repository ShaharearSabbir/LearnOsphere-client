import React, { useEffect, useState } from "react";
import { underline } from "../../animation/animate";
import underlineImage from "../../assets/line-2-category-2.svg";
import { motion } from "motion/react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import { Link, useLoaderData, useParams } from "react-router";
import { Helmet } from "react-helmet";

const AllCategories = () => {
  const [categories] = useState(useLoaderData().data);

  return (
    <div>
      <Helmet>
        <title>All Categories</title>
      </Helmet>
      <h2 className="primary-title text-center">
        All{" "}
        <div className="primary-title-second">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 lg:my-12">
        {categories.map((category) => (
          <Link to={`/category/${category.category}`}>
            <CategoryCard key={category._id} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
