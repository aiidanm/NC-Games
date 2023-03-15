import SortbySelector from "./sortbySelector"
import DisplayReviews from "./displayAllReviews"
import CategorySelector from "./categorySelector"

const ReviewsPage = () => {

    return (
        <div className="reviews_display">
            <h2>Reviews</h2>

            <div className="sortby_container">
                <SortbySelector />
            </div>
            <CategorySelector />
            <DisplayReviews />

        </div>
    )
}

export default ReviewsPage