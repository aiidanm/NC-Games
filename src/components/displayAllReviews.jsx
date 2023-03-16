import { useState, useEffect } from "react";
import { fetchReviews } from "./axiosrequests";
import { Link } from "react-router-dom";

const DisplayReviews = ({selectedCategory, selectedSortBy, selectedOrderBy, sortByQuery, orderByQuery}) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(sortByQuery, orderByQuery).then((response) => {
        setIsLoading(false)
      return setReviews(response.reviews);
    });
  }, [sortByQuery, orderByQuery]);

  return isLoading ? (<h2>Loading...</h2> ) : (
    <ul className="display_reviews_container" tabIndex="3">
      {reviews.map((review, index) => {
        return (
          <Link to={`/reviews/${review.review_id}`} className="review_card_link" key={`review:${index}`}>
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
              <p>comments: {review.comment_count}</p>
              <p>category: {review.category}</p>
            </div>
          </li>
          </Link>
        );
      })}
    </ul>
  );

   
  
};

export default DisplayReviews;
