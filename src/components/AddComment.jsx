import { useState, useContext } from "react";
import { postComment } from "./api-requests";
import { userContext } from "../contexts/user";

const AddComment = ({ setComments, review_id, setErr }) => {
  const [comment, setComment] = useState("");
  const { user, SetUser } = useContext(userContext);


  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((currComments) => [
      { body: comment, author: user, votes: 0 },
      ...currComments,
    ]);
    postComment(review_id, { body: comment, username: user }).catch(
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
