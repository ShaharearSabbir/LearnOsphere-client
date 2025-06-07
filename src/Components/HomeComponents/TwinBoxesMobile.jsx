import learn from "../../assets/learn.png";
import certificate from "../../assets/get-certificate.png";
import { motion } from "motion/react";
import { container, image } from "../../animation/animate";

const TwinBoxesMobile = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-10">
      <motion.div
        variants={container("BTT")}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.3 }}
        className="bg-blue-100 p-6 lg:p-10 space-y-5 rounded-2xl relative overflow-hidden hover:shadow-xl"
        style={{ flexShrink: 0 }}
      >
        <h3 className="text-3xl tracking-tight font-light relative z-10">
          Earn a <span className="block font-bold">Certificate</span>
        </h3>
        <button className="btn btn-primary-outline relative z-10">View Programs</button>
        <motion.img
          variants={image()}
          initial="initial"
          whileHover="animate"
          src={certificate}
          alt=""
          className="absolute bottom-0 z-1 right-5 max-h-full"
        />
      </motion.div>

      <motion.div
        variants={container("BTT")}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.3 }}
        className="bg-amber-100 p-6 lg:p-10 space-y-5 rounded-2xl relative overflow-hidden hover:shadow-xl"
        style={{ flexShrink: 0 }}
      >
        <h3 className="text-3xl tracking-tight font-light relative z-10">
          Best Rated <span className="block font-bold">Courses</span>
        </h3>
        <button className="btn btn-secondary-outline relative z-10">View Programs</button>
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

export default TwinBoxesMobile;
