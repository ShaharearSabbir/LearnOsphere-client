import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Reviewslide from "./Reviewslide";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/reviews")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((review) => (
          <Reviewslide review={review} key={review._id} />
        ))}
      </Slider>
    </div>
  );
}

export default ReviewSlider;
