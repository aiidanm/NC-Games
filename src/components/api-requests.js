exports.fetchReviews = () => {
  return fetch(`https://aidan-nc-games.onrender.com/api/reviews/`).then(
    (data) => data.json()
  );
};

exports.fetchSingleReview = (review_id) => {
  return fetch(
    `https://aidan-nc-games.onrender.com/api/reviews/${review_id}`
  ).then((data) => data.json());
};

exports.patchReviewVotes = (review_id, patchObject) => {
  return fetch(`https://aidan-nc-games.onrender.com/api/reviews/${review_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchObject),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.msg) {
        return Promise.reject("failed");
      } else {
        return data;
      }
    });
};

exports.fetchReviewsComments = (review_id) => {
  return fetch(
    `https://aidan-nc-games.onrender.com/api/reviews/${review_id}/comments`
  ).then((data) => data.json());
};
