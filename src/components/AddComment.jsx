import { useState } from "react";
import { postComment } from "./axiosrequests";

const AddComment = ({ setComments, review_id, setErr }) => {
  const [comment, setComment] = useState("");
  const [commentErr, setCommentErr] = useState(null);

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
      setComments((currComments) => [
        { body: comment, author: "weegembump", votes: 0 },
        ...currComments,
      ]);
      postComment(review_id, { body: comment, username: "weegembump" }).catch(
        (err) => {
          if (err) {
            setComments((currComments) => currComments.slice(1));
            setErr(true);
            setTimeout(() => setErr(false), 3000);
          }
        }
      );
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
