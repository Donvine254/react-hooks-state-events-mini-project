import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, getNextId }) {
  const [itemCategory, setItemCategory] = useState("All")
  const [itemDetails, setItemDetails] = useState("")

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }
  function handleDetailsChange(event) {
    setItemDetails(event.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const formData={
      id:getNextId(),
      text:itemDetails,
      category:itemCategory,
    }
    onTaskFormSubmit(formData)
    setItemCategory("All")
    setItemDetails("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={itemDetails} onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category"value={itemCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
