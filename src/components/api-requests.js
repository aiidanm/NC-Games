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

exports.fetchReviewsComments = (review_id) => {
  return fetch(
    `https://aidan-nc-games.onrender.com/api/reviews/${review_id}/comments`
  ).then((data) => data.json());
};

exports.postComment = (review_id, postObject) => {
  return fetch(
    `https://aidan-nc-games.onrender.com/api/reviews/${review_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObject),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.msg) {
        return Promise.reject("Post failed");
      } else {
        return data;
      }
    });
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
