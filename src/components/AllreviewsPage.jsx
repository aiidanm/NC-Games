import SortbySelector from "./sortbySelector"
import DisplayReviews from "./displayAllReviews"
import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const ReviewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()

   

    const categoryQuery = searchParams.get("category")
    const sortByQuery = searchParams.get("sortBy")
    
    useEffect(() => {
        if(categoryQuery === null || categoryQuery === "All"){
            setSelectedCategory("")
        } else {
            setSelectedCategory(`?category=${categoryQuery}`)
        }
        
    }, [categoryQuery])

    return (
        <div className="reviews_display">
            <h2>Reviews</h2>

            <div className="sortby_container">
                <SortbySelector />
            </div>
            <DisplayReviews selectedCategory={selectedCategory}/>

        </div>
    )
}

export default ReviewsPage