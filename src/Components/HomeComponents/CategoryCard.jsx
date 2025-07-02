import React from "react";
import { motion } from "motion/react";
import { image } from "../../animation/animate";

const CategoryCard = ({ category }) => {
  return (
    <div className="p-5 border-2 border-blue-200 rounded-2xl hover:shadow-2xl">
      <div className="overflow-hidden rounded-2xl">
        <motion.img
          variants={image()}
          initial={`initial`}
          whileHover={`animate`}
          src={category.photoURL}
          className="w-full"
          alt={category.category}
        />
      </div>
      <h5 className="font-bold text-center mt-2">{category.category}</h5>
    </div>
  );
};

export default CategoryCard;
