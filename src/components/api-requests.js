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
