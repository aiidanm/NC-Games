import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import { fetchReviewsComments, fetchSingleReview } from "./api-requests";
import CommentReviewBox from "./commentReviewBox";
import CommentDisplay from "./CommentDisplay";
import "../App.css";

const ReviewsComments = () => {
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  return (
    <div className="single_review_container">
      <CommentReviewBox review_id={review_id} />
      <h2>Comments</h2>
      <CommentDisplay review_id={review_id} />
      <Link to={`/reviews/${review_id}`}>
      <button>back to review</button>
      </Link>
      
    </div>
  );
};

export default ReviewsComments;
