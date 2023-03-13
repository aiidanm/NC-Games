import SortbySelector from "./sortbySelector"
import DisplayReviews from "./displayReviews"

const ReviewsPage = () => {

    return (
        <div className="reviews_display">
            <h2>Reviews</h2>

            <div className="sortby_container">
                <SortbySelector />
            </div>
            <DisplayReviews />

        </div>
    )
}

export default ReviewsPage