import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full min-h-[60vh] flex justify-center items-center">
      <PropagateLoader color="#1e88e5" />
    </div>
  );
};
 
export default Loader;
