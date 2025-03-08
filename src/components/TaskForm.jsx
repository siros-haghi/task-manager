import React, { useCallback } from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { newTask, setNewTask, newDescription, setNewDescription, priority, setPriority, tasks, setTasks, darkMode } = useTaskContext();

  const addTask = useCallback(() => {
    if (!newTask.trim()) return;
    const newEntry = {
      id: Date.now(),
      title: newTask,
      description: newDescription,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prevTasks) => [...prevTasks, newEntry]);
    setNewTask("");
    setNewDescription("");
  }, [newTask, newDescription, priority, setTasks, setNewTask, setNewDescription]);

  return (
    <div className="mb-4 flex gap-2">
      <input type="text" placeholder="عنوان وظیفه" value={newTask} onChange={(e) => setNewTask(e.target.value)}
        className={`border p-3 flex-1 rounded-lg shadow-sm bg-transparent focus:ring-2 focus:ring-blue-400 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black border-gray-950"}`} />
      
      <input type="text" placeholder="توضیحات" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}
        className={`border p-3 flex-1 rounded-lg shadow-sm bg-transparent focus:ring-2 focus:ring-blue-400 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black border-gray-950"}`} />
      
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
        افزودن
      </button>
    </div>
  );
};

export default TaskForm;
