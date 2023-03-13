import { useState,useEffect } from "react"
import { FetchReviews } from "./api-requests"

const DisplayReviews = (sortby, ) => {

    const [reviews, SetReviews] = useState([])

    useEffect(() => {
        FetchReviews().then((response) => SetReviews(response.reviews))
    }, [sortby])
    
    
    return (
        <div className="display_reviews_container" tabIndex="3">
            {reviews.map((review, index) => {
                return (
                    
                    <div className="review_item_card" tabIndex={index + 4}>
                        <img className="review_img" src={review.review_img_url} alt="an image of a board game mentioned in the review"/>
                        <div className="review_list_info_container"> 
                        <h5>{review.title}</h5> 
                        <p>Votes: {review.votes}</p>
                        </div>
                        
                    </div>
                )
            })}
            
        </div>
    )
}

export default DisplayReviews