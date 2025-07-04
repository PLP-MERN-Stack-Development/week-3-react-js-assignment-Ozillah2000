// src/components/TaskManager.jsx
import React from "react";
import useTasks from "../hooks/useTasks";
import Button from "./Button";

const TaskManager = () => {
  const { tasks, loading } = useTasks();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-2 flex items-center">
            <span className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
              {task.title}
            </span>
            <Button>Done</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;