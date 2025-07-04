import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

const Home = () => {
  const [tasks, setTasks] = useState([]); //see guardan todas las tareas en un array de objetos.

  const addTask = (taskLabel) => {
    setTasks([...tasks, { id: Date.now(), label: taskLabel }]); //date para id unico, si no puede funcionar mal.
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); //eliminar segun id.
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