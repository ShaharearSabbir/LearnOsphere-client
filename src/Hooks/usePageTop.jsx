import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";

const usePageTop = () => {
  useEffect(() => {
    animateScroll.scrollTo(0);
  }, []);
  return null;
};

export default usePageTop;
