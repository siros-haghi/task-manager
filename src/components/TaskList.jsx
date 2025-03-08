import React, { useMemo, useCallback } from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, filter, search, sortOrder, sortByPriority, darkMode, setTasks } = useTaskContext();

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
      })
      .filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortByPriority) {
          const priorityOrder = { low: 1, medium: 2, high: 3 };
          const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
          if (priorityDiff !== 0) return priorityDiff;
        }
        return sortOrder === "newest" ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt);
      });
  }, [tasks, filter, search, sortOrder, sortByPriority]);

  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }, [setTasks]);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id} className={`flex justify-between items-center border p-3 mb-2 rounded-lg shadow-md border-gray-950 ${darkMode ? "bg-gray-500 border-gray-600" : "bg-white"}`}>
          <span className={`text-2xl ${task.completed ? "line-through decoration-3 decoration-red-700 text-black" : "text-black"}`}>{task.title}</span>
          <span className={`text-2xl ${task.completed ? "line-through decoration-3 decoration-red-700 text-black" : "text-black"}`}>{task.description}</span>
          <button onClick={() => toggleTask(task.id)} className={`px-3 py-1 rounded-lg shadow-md transition-all ${task.completed ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white`}>
            {task.completed ? "بازگردانی" : "✔ تکمیل"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;