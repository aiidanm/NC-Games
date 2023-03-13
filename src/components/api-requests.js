exports.FetchReviews = () => {
  return fetch(`https://aidan-nc-games.onrender.com/api/reviews/`)
    .then((data) => data.json())
    .then((data) => data);
};
