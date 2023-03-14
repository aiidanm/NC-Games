import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsComments, fetchSingleReview } from "./api-requests";
import '../App.css';

const CommentReviewBox = ({review_id}) => {
    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState({});

    useEffect(() => {
        setLoading(true)
        fetchSingleReview(review_id).then((reviewData) => {
            setLoading(false)
            setReview(reviewData.review)
        })

    }, [])

   return ( <div id="commentpage_review_info">
        <h1 id="singleReviewTitle">{review.title}</h1>
        <div id="commentpage_review_content">
            <img
                    src={review.review_img_url}
                    alt={review.title}
                    className="singlereview_img"
                    ></img>
        <div id="commentreviewboxinfo">
        <h2 id="singleReviewOwner">a review by: {review.owner}</h2>
        <h3 id="singleReviewCategory">Category: {review.category}</h3>
        <h3 id="singleReviewDesigner">Designed by: {review.designer}</h3>
        </div>
        </div>
        
        
        
    </div>
   )
}

export default CommentReviewBox