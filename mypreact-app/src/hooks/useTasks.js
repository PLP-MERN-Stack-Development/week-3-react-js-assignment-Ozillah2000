// src/hooks/useTasks.js
import { useState, useEffect } from "react";
import { fetchTasks } from "../api/tasks";

// Custom hook to manage tasks state and fetching
export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks().then(data => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  return { tasks, loading, setTasks };
}