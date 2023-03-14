import { useState } from "react";
import { patchReviewVotes } from "./api-requests";

const VoteButtons = ({ voteAmount, review_id }) => {
  const [votes, setVotes] = useState(voteAmount);
  const [errMsg, setErrMsg] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteInc, setVoteInc] = useState(null);

  const handleClick = (e) => {
    if (e.target.textContent === "+") {
      setVoteInc(1);
    } else if (e.target.textContent === "-") {
      setVoteInc(-1);
    }
    if (!hasVoted) {
      setHasVoted(true);
      setVotes((currVotes) => currVotes + 1);
      setErrMsg(null);
      patchReviewVotes(review_id, { inc_votes: 1 }).catch((err) => {
        if (err) {
          setHasVoted(false);
          setVotes((currVotes) => currVotes - 1);
          setErrMsg("Vote failed");
        }
      });
    }
  };

  

  return (
    <div className="review_vote_container">
      <h3>{errMsg}</h3>
      <button id="increase_vote" onClick={handleClick}>
        +
      </button>
      <button id="votes_count" disabled>
        Votes: {votes}
      </button>
      <button id="decrease_vote" onClick={handleClick}>
        -
      </button>
    </div>
  );
};

export default VoteButtons;
