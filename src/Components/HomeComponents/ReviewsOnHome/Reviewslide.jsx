import React from "react";
import quote from "../../../assets/quote.png";

const Reviewslide = ({ review }) => {
  return (
    <div className="bg-gray-50 w-64 p-5 rounded-2xl border-2 border-gray-200 text-left relative -z-10">
      <img src={quote} className=" -z-1 w-16 absolute top-6 right-6 opacity-30" alt="" />
      <p className="pb-40">{review.reviewText}</p>
      <div className="flex items-center gap-2">
        <img
          src={review.reviewerPhotoURL}
          className="w-6 h-6 object-cover rounded-full"
          alt=""
        />
        <h4 className="secondary-title">{review.reviewerName}</h4>
      </div>
    </div>
  );
};

export default Reviewslide;
