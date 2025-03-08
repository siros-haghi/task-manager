import React, { createContext, useState, useEffect, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [sortOrder, setSortOrder] = useState("newest");
    const [sortByPriority, setSortByPriority] = useState(false);


    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) setTasks(JSON.parse(savedTasks));

        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme !== null) setDarkMode(JSON.parse(savedTheme));
    }, []);


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);


    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                newTask,
                setNewTask,
                newDescription,
                setNewDescription,
                priority,
                setPriority,
                filter,
                setFilter,
                search,
                setSearch,
                darkMode,
                setDarkMode,
                sortOrder,
                setSortOrder,
                sortByPriority,
                setSortByPriority,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => useContext(TaskContext);
