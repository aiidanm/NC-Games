import { useState } from "react";
import { patchReviewVotes } from "./api-requests";

const VoteButtons = ({ voteAmount, review_id }) => {
  const [sendObject, setSendObject] = useState({});
  const [votes, setVotes] = useState(voteAmount);
  const [errMsg, setErrMsg] = useState(null);

  const handleIncrease = (e) => {
    setVotes((currVotes) => currVotes + 1);
    setErrMsg(null);
    patchReviewVotes(review_id, { inc_votes: 1 }).catch((err) => {
      if (err) {
        setVotes((currVotes) => currVotes - 1);
        setErrMsg("Vote failed");
      }
    });
  };

  const handleDecrease = (e) => {
    setVotes((currVotes) => currVotes - 1);
    setErrMsg(null);
    patchReviewVotes(review_id, { inc_votes: -1 }).catch((err) => {
      if (err) {
        setVotes((currVotes) => currVotes - 1);
        setErrMsg("Vote failed");
      }
    });
  };

  return (
    <div className="review_vote_container">
      <h3>{errMsg}</h3>
      <button id="increase_vote" onClick={handleIncrease}>
        +
      </button>
      <button id="votes_count" disabled>
        Votes: {votes}
      </button>
      <button id="decrease_vote" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
};

export default VoteButtons;
