import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://aidan-nc-games.onrender.com/api",
});

export const fetchReviews = (sortBy, orderBy) => {
  return mainApi.get(`/reviews/`, { params: {
    sort_by: sortBy,
    order_by: orderBy
  } }).then((data) => data.data);
};

export const fetchSingleReview = (review_id) => {
  return mainApi.get(`/reviews/${review_id}`).then((data) => data.data);
};

export const postComment = (review_id, postObject) => {
  return mainApi
    .post(`/reviews/${review_id}/comments`, {
      username: postObject.username,
      body: postObject.body,
    })
    .then((response) => response.data)
    .catch((err) => {
      if (err) {
        return Promise.reject("Post failed");
      }
    });
};

export const patchReviewVotes = (review_id, patchObject) => {
  return mainApi
    .patch(`/reviews/${review_id}`, {
      inc_votes: patchObject.inc_votes,
    })
    .then((response) => response.data)
    .catch((err) => {
      if (err) {
        return Promise.reject("failed");
      }
    });
};

export const fetchReviewsComments = (review_id) => {
  return mainApi
    .get(`/reviews/${review_id}/comments`)
    .then((data) => data.data);
};