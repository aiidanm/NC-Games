import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview, fetchReviewsComments } from "./api-requests";
import CommentList from "./CommentDisplay";
import DisplayReview from "./displayReview";
import AddComment from "./AddComment";


const ViewReview = () => {
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchSingleReview(review_id).then((reviewData) => {
      fetchReviewsComments(review_id).then((commentData) => {
        setLoading(false);
        setComments(commentData.comments);
        setReview(reviewData.review);
      });
    });
  }, [review_id]);


  return loading ? (
    <h2>Loading..</h2>
  ) : (
    <div className="single_review_container">
      <DisplayReview review={review}/>
      <div className="review_buttons_container">
        <div className="review_vote_container">
          <button id="increase_vote">+</button>
          <button id="votes_count" disabled>
            Votes: {review.votes}
          </button>
          <button id="decrease_vote">-</button>
        </div>
      </div>
      <h2>Comments: {review.comment_count}</h2>
      <CommentList comments={comments} />
      <AddComment setComments={setComments}/>
    </div>
  );
};

export default ViewReview;
