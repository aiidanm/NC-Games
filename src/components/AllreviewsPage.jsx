import SortbySelector from "./sortbySelector"
import DisplayReviews from "./displayAllReviews"
import CategorySelector from "./categorySelector"
import { useState } from "react"

const ReviewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <div className="reviews_display">
            <h2>Reviews</h2>

            <div className="sortby_container">
                <SortbySelector />
                <CategorySelector setSelectedCategory={setSelectedCategory}/>
            </div>
            
            <DisplayReviews selectedCategory={selectedCategory}/>

        </div>
    )
}

export default ReviewsPage