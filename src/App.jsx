// src/App.jsx
import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskManager from "./pages/TaskManager";

const App = () => {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  );
};

export default App;
