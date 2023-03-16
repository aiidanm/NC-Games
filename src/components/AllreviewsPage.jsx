import SortbySelector from "./sortbySelector";
import DisplayReviews from "./displayAllReviews";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySelector from "./categorySelector";

const ReviewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category");
  const sortByQuery = searchParams.get("sortBy");

  /* get category from url query params*/
  useEffect(() => {
    if (categoryQuery === null || categoryQuery === "") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(`?category=${categoryQuery}`);
    }
  }, [categoryQuery]);

  return (
    <div className="reviews_display">
      <h2>Reviews</h2>

      <div className="sortby_container">
        <SortbySelector />
        <CategorySelector
          setSelectedCategory={setSelectedCategory}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
      <DisplayReviews selectedCategory={selectedCategory} />
    </div>
  );
};

export default ReviewsPage;
