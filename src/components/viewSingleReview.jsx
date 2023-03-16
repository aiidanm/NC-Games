import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleReview, fetchReviewsComments } from "./axiosrequests";

import VoteButtons from "./voteButtons";
import CommentList from "./CommentDisplay";
import DisplayReview from "./displayReview";
import AddComment from "./AddComment";

const ViewReview = () => {
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(false);
  const [reviewErr, setReviewErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchSingleReview(review_id)
      .catch((err) => {
        setReviewErr(err);
        setLoading(false);
      })
      .then((reviewData) => {
        fetchReviewsComments(review_id).then((commentData) => {
          setLoading(false);
          setComments(commentData.comments);
          setReview(reviewData.review);
        });
      });
  }, [review_id]);

  return loading ? (
    <h2>Loading..</h2>
  ) : reviewErr ? (
    <h2>{reviewErr}</h2>
  ) : (
    <div className="single_review_container">
      <DisplayReview review={review} />
      <VoteButtons voteAmount={review.votes} review_id={review_id} />
      <h2 id="comment_h2">Comments: {comments.length}</h2>
      {err ? <h2>Failed to post comment:</h2> : null}
      <CommentList comments={comments} />
      <AddComment
        setComments={setComments}
        review_id={review_id}
        setErr={setErr}
      />
    </div>
  );
};

export default ViewReview;
