import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
let lastUsedId = Math.max(...TASKS.map((task) => task.id), 0);
const getNextId = () => {
  lastUsedId++;
  return lastUsedId;
};

function App() {
  const [Tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleNewTasks(formData) {
    setTasks((prevTasks) => [...prevTasks, formData]);
  }
  
  function handleTaskDelete(id) {
    setTasks(Tasks.filter((task) => task.id !== id));
  }
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }
  const tasksToDisplay = Tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    }
    return task.category == selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} getNextId={getNextId} onTaskFormSubmit={handleNewTasks}/>
      <TaskList Tasks={tasksToDisplay} deleteTask={handleTaskDelete} />
    </div>
  );
}

export default App;
