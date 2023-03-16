import SortbySelector from "./sortbySelector";
import OrderBySelector from "./orderby";
import DisplayReviews from "./displayAllReviews";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySelector from "./categorySelector";

const ReviewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order_by");


  return (
    <div className="reviews_display">
      <h2>Reviews</h2>

      <div className="sortby_container">
        <SortbySelector
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <OrderBySelector
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <CategorySelector
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
      <DisplayReviews categoryQuery={categoryQuery} sortByQuery={sortByQuery} orderByQuery={orderByQuery}/>
    </div>
  );
};

export default ReviewsPage;
