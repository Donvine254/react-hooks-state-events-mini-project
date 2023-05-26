import React from "react";

function TaskList({ Tasks, deleteTask }) {
  return (
    <div className="tasks">
      {Tasks.map((task) => {
        return (
          <div className="task" key={task.id}>
            <p className="text">
              {task.text}
              <span className="label">{task.category}</span>
            </p>
            <button className="delete"onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
