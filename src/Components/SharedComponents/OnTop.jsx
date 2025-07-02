import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { animateScroll } from "react-scroll";

const OnTop = () => {
  const handleButton = () => {
    animateScroll.scrollTo(0);
  };
  return (
    <button onClick={handleButton} className="cursor-pointer">
      <FaCircleArrowUp color="#155dfc" size={35} />
    </button>
  );
};

export default OnTop;
