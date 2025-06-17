import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../AuthContext/AuthContext";
import axios from "axios";
import { Toast } from "../../../Utils/Utilities";
import Review from "./Review";

const SideCourseDetails = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios(`https://learnosphere-server.vercel.app/reviewsByCourseId/${id}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => err.message);
  }, []);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const { uid } = user;
    const reviewData = { reviewText, rating, uid, courseId: id };
    axios
      .post("https://learnosphere-server.vercel.app/review", reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          reviewData.reviewerName = user.displayName;
          reviewData.reviewerPhotoURL = user.photoURL;
          setReviews((prevRev) => [...prevRev, reviewData]);
          Toast.fire({
            icon: "success",
            title: "Comment Added",
          });
        }
      })
      .catch((err) => err.message);
    setReviewText("");
    setRating(0);
  };

  return (
    <div className="bg-amber-100 p-5 rounded-2xl">
      {user && (
        <div className="review-form-container">
          <h4 className="text-md font-semibold mb-3">Write a Review</h4>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label
                htmlFor="reviewText"
                className="block text-sm font-medium text-gray-700"
              >
                Your Review
              </label>
              <textarea
                id="reviewText"
                className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="3"
                placeholder="Share your experience..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <label key={starValue} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={starValue}
                      checked={rating === starValue}
                      onChange={() => setRating(starValue)}
                      className="hidden"
                      required
                    />
                    <FaStar
                      className={`h-6 w-6 transition-colors duration-200 ${
                        starValue <= rating
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    />
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-secondary-outline w-full">
              Submit Review
            </button>
          </form>
          <div className="border-t border-amber-300 mb-8 pb-4"></div>
        </div>
      )}

      <div>
        {reviews && reviews.length > 0 ? (
          reviews
            .slice()
            .reverse()
            .map((review, index) => (
              <Review {...review} key={index} setReviews={setReviews} />
            ))
        ) : (
          <>
            <h4 className="text-md font-semibold mb-3">Recent Reviews</h4>
            <p className="text-gray-600">No reviews yet. Be the first!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideCourseDetails;
