import { useState, useEffect } from "react";
import { fetchCategories } from "./api-requests";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


const CategorySelector = ({setSelectedCategory}) => {
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value)
  };

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.categories));
  }, []);
  return (
    <>
      <label htmlFor="category_selector">Category: </label>
      <select
        id="category_selector"
        className="category_selector"
        tabIndex="2"
        onChange={handleChange}
      >
        <option value={""}>All</option>
        {categories.map((category) => {
          return (
              <option value={`?category=${category.slug}`}>{category.slug}</option>
          )
        })}
      </select>
    </>
  );
};

export default CategorySelector;
