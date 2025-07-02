import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { Link, useLoaderData } from "react-router";
import OnTitleBar from "../SharedComponents/OnTitleBar";
import Title from "../SharedComponents/Title";
import usePageTop from "../../Hooks/usePageTop";

const AllCategories = () => {
  usePageTop();
  const [categories] = useState(useLoaderData().data);

  return (
    <div>
      <OnTitleBar>All Categories</OnTitleBar>
      <Title
        secondary="All Categories"
        title="Explore All "
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
    </div>
  );
};

export default AllCategories;
