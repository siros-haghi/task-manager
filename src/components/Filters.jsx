import React, { useMemo } from "react";
import { useTaskContext } from "../context/TaskContext";

const Filters = () => {
  const { filter, setFilter, search, setSearch, sortOrder, setSortOrder, sortByPriority, setSortByPriority, darkMode } = useTaskContext();

  const filterOptions = useMemo(() => [
    { value: "all", label: "همه" },
    { value: "active", label: "فعال" },
    { value: "completed", label: "تکمیل شده" }
  ], []);

  return (
    <div>
      <input type="text" placeholder="🔍 جستجو ..." value={search} onChange={(e) => setSearch(e.target.value)}
        className={`border p-3 w-full mb-4 rounded-lg shadow-sm bg-transparent focus:ring-2 focus:ring-blue-400 ${darkMode ? "" : "border-gray-950"}`} />
      
      <select value={filter} onChange={(e) => setFilter(e.target.value)}
        className={`border p-3 mb-4 w-full rounded-lg shadow-sm ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black border-gray-950"}`}>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      
      <button onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all mb-4">
        {sortOrder === "newest" ? "مرتب‌سازی قدیمی‌ترین" : "مرتب‌سازی جدیدترین"}
      </button>
      
      <button onClick={() => setSortByPriority(!sortByPriority)} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-all mb-4 mr-2">
        {sortByPriority ? "مرتب‌سازی اولویت (کم به زیاد)" : "مرتب‌سازی اولویت (زیاد به کم)"}
      </button>
    </div>
  );
};

export default Filters;