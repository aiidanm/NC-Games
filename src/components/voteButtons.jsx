import { useState } from "react";
import { patchReviewVotes } from "./api-requests";

const VoteButtons = ({ voteAmount, review_id }) => {
  const [votes, setVotes] = useState(voteAmount);
  const [errMsg, setErrMsg] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleClick = (e, voteInc) => {
    if (!hasVoted) {
      setHasVoted(true);
      setVotes((currVotes) => currVotes + voteInc);
      setErrMsg(null);
      patchReviewVotes(review_id, { inc_votes: voteInc }).catch((err) => {
        if (err) {
          setHasVoted(false);
          setVotes((currVotes) => currVotes - voteInc);
          setErrMsg("Vote failed");
        }
      });
    }
  };

  



  return (
    <div className="review_vote_container">
      <h3 id>{errMsg}</h3>
      <button id="increase_vote" onClick={e => handleClick(e, 1)}>
        +
      </button>
      <button id="votes_count" disabled>
        Votes: {votes}
      </button>
      <button id="decrease_vote" onClick={e => handleClick(e, -1)}>
        -
      </button>
    </div>
  );
};

export default VoteButtons;
