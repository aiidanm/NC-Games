import { useState, useEffect } from "react";
import { fetchReviews } from "./api-requests";

const DisplayReviews = (sortby) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((response) => {
        setIsLoading(false)
      return setReviews(response.reviews);
    });
  }, [sortby]);

  return isLoading ? (<h1>Loading...</h1> ) : (
    <ul className="display_reviews_container" tabIndex="3">
      {reviews.map((review, index) => {
        return (
          <li
            className="review_item_card"
            tabIndex={index + 4}
            key={`review_${index}`}
          >
            <img
              className="review_img"
              src={review.review_img_url}
              alt={review.title}
            />
            <div className="review_list_info_container">
              <h5>{review.title}</h5>
              <p>Votes: {review.votes}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );

   
  
};

export default DisplayReviews;
