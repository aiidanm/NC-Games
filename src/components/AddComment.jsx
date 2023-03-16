import { useState } from "react";
import { postComment } from "./axiosrequests";

const AddComment = ({ setComments, review_id, setErr }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };



  return (
    <form id="commentform" onSubmit={handleSubmit}>
      <input id="commentinput" onChange={handleChange}></input>
      <button type="submit">Place comment</button>
    </form>
  );
};

export default AddComment;
