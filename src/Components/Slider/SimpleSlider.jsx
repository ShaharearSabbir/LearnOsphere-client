import React from "react";
import Slider from "react-slick";
import { SLIDES } from "../../Contents/slider";
import Slide from "./Slide";

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
    <div className="slider-container">
      <Slider {...settings}>
        {SLIDES.map((slide) => (
          <Slide {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
