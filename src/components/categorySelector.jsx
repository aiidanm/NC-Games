import { useState, useEffect } from "react";
import { fetchCategories } from "./api-requests";

const CategorySelector = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Date");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.categories));
  }, []);
  return (
    <>
      <label htmlFor="sortby_selector">Category: </label>
      <select
        id="category_selector"
        className="category_selector"
        tabIndex="2"
        onChange={handleChange}
      >
        <option>All</option>
        {categories.map((category) => {
          return <option>{category.slug}</option>;
        })}
      </select>
    </>
  );
};

export default CategorySelector;
