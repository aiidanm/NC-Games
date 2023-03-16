import SortbySelector from "./sortbySelector";
import OrderBySelector from "./orderby";
import DisplayReviews from "./displayAllReviews";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ReviewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [selectedOrderBy, setSelectedOrderBy] = useState("");

  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order_by");

  // useEffect(() => {
  //   if (sortByQuery === null || sortByQuery === "") {
  //     setSelectedSortBy("");
  //   } else {
  //     setSelectedSortBy(`?sort_by=${sortByQuery}`);
  //   }
  // }, [sortByQuery]);

  // useEffect(() => {
  //   if (orderByQuery === null || orderByQuery === "") {
  //     setSelectedOrderBy("");
  //   } else {
  //     setSelectedOrderBy(`?order_by=${orderByQuery}`);
  //   }
  // }, [orderByQuery]);

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
      </div>
      <DisplayReviews
        sortByQuery={sortByQuery}
        orderByQuery={orderByQuery}
      />
    </div>
  );
};

export default ReviewsPage;
