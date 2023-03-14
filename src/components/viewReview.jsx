import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview } from "./api-requests";

const ViewReview = () => {
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState({});

  useEffect(() => {
    setLoading(true);
    fetchSingleReview(review_id).then((data) => {
      setLoading(false);
      return setReview(data.review);
    });
  }, []);

  const handleClick = (e) => {};

  return loading ? (
    <h2>Loading..</h2>
  ) : (
    <div className="single_review_container">
      <div className="single_review_info_container" onClick={handleClick}>
        <h1 id="singleReviewTitle">{review.title}</h1>
        <h2 id="singleReviewOwner">a review by: {review.owner}</h2>
        <img
          src={review.review_img_url}
          alt={review.title}
          className="singlereview_img"
        ></img>
        <h3 id="singleReviewCategory">Category: {review.category}</h3>
        <h3 id="singleReviewDesigner">Designed by: {review.designer}</h3>
        <p id="singleReviewBody">{review.review_body}</p>
      </div>
      <div className="review_buttons_container">
        <div className="review_vote_container">
          <button id="increase_vote">+</button>
          <button id="votes_count" disabled>Votes: {review.votes}</button>
          <button id="decrease_vote">-</button>
        </div>

        <Link to={`/reviews/${review_id}/comments`}>
          <button id="singleReviewCommentButton">
            view ({review.votes}) comments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewReview;