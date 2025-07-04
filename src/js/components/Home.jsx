import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskLabel) => {
    setTasks([...tasks, { id: Date.now(), label: taskLabel }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de tareas</h1>

      <Input onAddTask={addTask} />

      <List tasks={tasks} onDeleteTask={deleteTask} />

      <p className="text-muted mt-3">{tasks.length} tarea(s) restante(s)</p>
    </div>
  );
};

export default Home;