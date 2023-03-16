import { useState, useEffect } from "react";
import { fetchCategories } from "./api-requests";

const CategorySelector = ({ searchParams, setSearchParams }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.categories));
  }, []);

  const setCategoryFilter = (e) => {
    const newParams = new URLSearchParams(searchParams);
    if (e.target.value === "") {
      newParams.delete("category");
    } else {
      newParams.set("category", e.target.value);
    }
    setSearchParams(newParams);
  };

  return (
    <select className="category_selector" onChange={setCategoryFilter}>
      <option value={""}>All</option>
      {categories.map((category, i) => {
        return <option value={category.slug} key={i}>{category.slug}</option>;
      })}
    </select>
  );
};

export default CategorySelector;
