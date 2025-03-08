import React from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";

const TaskManager = () => {
  const { darkMode, setDarkMode } = useTaskContext(); 

  return (
    <div dir="rtl" className={`p-6 max-w-3xl mx-auto rounded-lg shadow-xl transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📋 مدیریت وظایف</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all">
          {darkMode ? "☀️ روشن" : "🌙 تاریک"}
        </button>
      </div>

      {/* فرم اضافه کردن تسک */}
      <TaskForm />
      
      {/* فیلترها و جستجو */}
      <Filters />
      
      {/* لیست تسک‌ها */}
      <TaskList />
    </div>
  );
};

export default TaskManager;
