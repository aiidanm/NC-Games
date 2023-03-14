import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsComments, fetchSingleReview } from "./api-requests";

const CommentList = ({ review_id }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

 
  useEffect(() => {
    setLoading(true);
    fetchReviewsComments(review_id).then((commentData) => {
      setLoading(false);
      return setComments(commentData.comments);
    });
  }, [review_id]);



  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <ul className="comment_list" tabIndex={1}>
      {comments.map((comment, index) => {
        return (
          <li
            className="comment_card"
            key={comment.comment_id}
            tabIndex={index + 1}
          >
            <p>{comment.body}</p>
            <div>
              <p>written by: {comment.author}</p>
              <p>votes: {comment.votes}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
