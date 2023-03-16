import { useContext } from "react";
import { userContext } from "../contexts/user";

const CommentList = ({comments, setComments}) => {
  const { user, SetUser } = useContext(userContext);

  const handleDelete = (e) => {
    console.log(e.target.id)
    
  }
 

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
              {user === comment.author ? <button id={comment.comment_id} onClick={handleDelete}>delete comment</button> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
