import { useContext, useState } from "react";
import { userContext } from "../contexts/user";
import { deleteComment } from "./axiosrequests";

const CommentList = ({ comments, setComments }) => {
  const { user} = useContext(userContext);
  const [usrErr, setUsrErr] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (e) => {
    setIsDeleting("is deleting");
    deleteComment(e.target.id)
      .then((response) => {
        setIsDeleting("Comment deleted");
        setComments((currComments) =>
          currComments.filter(
            (comment) => comment.comment_id !== Number(e.target.id)
          )
        );
        setTimeout(() => {
          setIsDeleting(null);
        }, 5000);
      })
      .catch((err) => {
        if (err) {
          setUsrErr(true);
          setTimeout(() => setUsrErr(false), 3000);
        }
      });
  };

  return (
    <>
      {isDeleting ? <h2>Deleting comment</h2> : null}
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
                {user === comment.author ? (
                  <button id={comment.comment_id} onClick={handleDelete}>
                    delete comment
                  </button>
                ) : null}
                {usrErr ? <h3>{usrErr}</h3> : null}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
