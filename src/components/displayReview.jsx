
const DisplayReview = ({review}) => {

    const handleClick = (e) => {};


    return (<div className="single_review_info_container" onClick={handleClick}>
    <h1 id="singleReviewTitle">{review.title}</h1>
    <h2 id="singleReviewOwner">a review by: {review.owner}</h2>
    <img
      src={review.review_img_url}
      alt={review.title}
      className="singlereview_img"
    ></img>
    <h3 id="singleReviewCategory">Category: {review.category}</h3>
    <h3 id="singleReviewDesigner">Designed by: {review.designer}</h3>
    <p id="singleReviewBody">{review.review_body}</p>
  </div>)
}

export default DisplayReview