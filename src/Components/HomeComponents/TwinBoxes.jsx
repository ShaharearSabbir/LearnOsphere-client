import React, { useState } from "react";
import learn from "../../assets/learn.png";
import certificate from "../../assets/get-certificate.png";
import { motion } from "motion/react";
import { container, image } from "../../animation/animate";

const TwinBoxes = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const getBoxWidths = () => {
    if (hoveredBox === "left") {
      return { left: "55%", right: "45%" };
    } else if (hoveredBox === "right") {
      return { left: "45%", right: "55%" };
    } else {
      return { left: "50%", right: "50%" };
    }
  };

  const { left: leftBoxWidth, right: rightBoxWidth } = getBoxWidths();

  return (
    <div className="flex w-full gap-6 lg:gap-10">
      <motion.div
        variants={container("LTR")}
        initial="initial"
        whileInView="animate"
        onMouseEnter={() => setHoveredBox("left")}
        onMouseLeave={() => setHoveredBox(null)}
        animate={{ width: leftBoxWidth }}
        transition={{ duration: 0.3 }}
        className="bg-blue-100 p-6 lg:p-10 space-y-5 rounded-2xl relative overflow-hidden hover:shadow-xl"
        style={{ flexShrink: 0 }}
      >
        <h3 className="text-3xl tracking-tight font-light">
          Earn a <span className="block font-bold">Certificate</span>
        </h3>
        <button className="btn btn-primary-outline">View Programs</button>
        <motion.img
          variants={image()}
          initial="initial"
          whileHover="animate"
          src={certificate}
          alt=""
          className="absolute bottom-0 right-5 max-h-full"
        />
      </motion.div>

      <motion.div
        variants={container("RTL")}
        initial="initial"
        whileInView="animate"
        onMouseEnter={() => setHoveredBox("right")}
        onMouseLeave={() => setHoveredBox(null)}
        animate={{ width: rightBoxWidth }}
        transition={{ duration: 0.3 }}
        className="bg-amber-100 p-6 lg:p-10 space-y-5 rounded-2xl relative overflow-hidden hover:shadow-xl"
        style={{ flexShrink: 0 }}
      >
        <h3 className="text-3xl tracking-tight font-light">
          Best Rated <span className="block font-bold">Courses</span>
        </h3>
        <button className="btn btn-secondary-outline">View Programs</button>
        <motion.img
          variants={image()}
          initial="initial"
          whileHover="animate"
          src={learn}
          alt=""
          className="absolute bottom-0 right-5 max-h-full"
        />
      </motion.div>
    </div>
  );
};

export default TwinBoxes;
