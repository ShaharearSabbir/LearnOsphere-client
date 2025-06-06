import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../AuthContext/AuthContext";
import axios from "axios";
import { Toast } from "../../../Utils/Utilities";

const Review = ({
  reviewText,
  rating,
  reviewerName,
  reviewerPhotoURL,
  _id,
  setReviews,
}) => {
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/review/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setReviews((prevRevs) =>
            prevRevs.filter((review) => review._id !== id)
          );
          Toast.fire({
            icon: "warning",
            title: "Review Deleted",
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className=" bg-white p-5 mb-5 rounded-2xl flex items-start gap-3">
      <img src={reviewerPhotoURL} className="w-10 h-10 object-cover" alt="" />
      <div className="w-full flex justify-between items-start">
        <div className="space-y-2">
          <h5 className="text-lg font-bold">{reviewerName}</h5>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((starValue) => (
              <FaStar
                className={`h-6 w-6 transition-colors duration-200 ${
                  starValue <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <p>{reviewText}</p>
        </div>
        <div>
          {reviewerName === user.displayName && (
            <button
              onClick={() => handleDelete(_id)}
              className="px-3 py-1 bg-amber-100 rounded-lg font-bold hover:text-amber-600 cursor-pointer"
            >
              x
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
