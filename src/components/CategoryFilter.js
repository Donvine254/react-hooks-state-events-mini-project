import React from "react";

function CategoryFilter({categories, onCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=> {
        return <button value={category} key={category} className="categories"onClick={onCategoryChange}> {category}</button>
      }
      )}
    </div>
  );
}

export default CategoryFilter;
