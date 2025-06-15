import React from "react";
import Slider from "react-slick";

import Slide from "./Slide";
import { SLIDES } from "../../../Contents/Contents";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-container rounded-2xl overflow-hidden">
      <Slider {...settings}>
        {SLIDES.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
