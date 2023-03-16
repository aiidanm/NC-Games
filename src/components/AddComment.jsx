import { useState, useContext } from "react";
import { userContext } from "../contexts/user";
import { postComment } from "./axiosrequests";

const AddComment = ({ setComments, review_id, setErr }) => {
  const [comment, setComment] = useState("");
  const { user, SetUser } = useContext(userContext);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <form id="commentform" onSubmit={handleSubmit}>
      <input id="commentinput" onChange={handleChange}></input>
      <button type="submit">Place comment</button>
    </form>
  );
};

export default AddComment;
