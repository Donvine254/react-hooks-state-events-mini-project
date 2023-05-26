import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, getNextId }) {
  const [category, setCategory] = useState("All")
  const [text, setText] = useState("")

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  function handleDetailsChange(event) {
    setText(event.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const formData={
      id:getNextId(),
      text:text,
      category:category,
    }
    onTaskFormSubmit(formData)
    setCategory("All")
    setText("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category"value={category} onChange={handleCategoryChange}>
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
