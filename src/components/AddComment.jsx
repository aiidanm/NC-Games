import { useState, useContext } from "react";
import { userContext } from "../contexts/user";
import { postComment } from "./axiosrequests";

const AddComment = ({ setComments, review_id, setErr }) => {
  const [comment, setComment] = useState("");
  const [commentErr, setCommentErr] = useState(null);
  const { user, SetUser } = useContext(userContext);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length === 0 || comment === " ") {
      setCommentErr("comment needs to have some text!");
      setTimeout(() => {
        setCommentErr(null);
      }, 6000);
    } else {
      postComment(review_id, { body: comment, username: user })
        .then((response) => {
          setComments((currComments) => [
            {
              body: comment,
              author: user,
              votes: 0,
              comment_id: response.comment.comment_id,
            },
            ...currComments,
          ]);
        })
        .catch((err) => {
          if (err) {
            setErr(true);
            setTimeout(() => setErr(false), 3000);
          }
        });
    }
  };

  return (
    <form id="commentform" onSubmit={handleSubmit}>
      <input id="commentinput" onChange={handleChange}></input>
      <button type="submit">Place comment</button>
      {commentErr ? <h2>{commentErr}</h2> : null}
    </form>
  );
};

export default AddComment;
