import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsComments, fetchSingleReview } from "./api-requests";

const CommentList = ({comments}) => {
  const [loading, setLoading] = useState(true);

 

return (
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
