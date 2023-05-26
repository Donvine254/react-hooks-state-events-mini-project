import React from "react";
import Task from "./Task";

function TaskList({ Tasks, deleteTask }) {
  const AllTasks = Tasks.map((task)=>
    <Task onTaskDelete={()=>deleteTask(task.id)}key={task.text} category={task.category} text={task.text}/>)
  return (
    <div className="tasks">
      {AllTasks}
    </div>
  );
}

export default TaskList;
