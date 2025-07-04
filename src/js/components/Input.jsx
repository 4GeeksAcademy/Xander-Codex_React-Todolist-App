import React, { useState } from "react";

const Input = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState(""); //guardar lo que se va escribiendo

  const handleChange = (e) => setInputValue(e.target.value); //actualizar lo escrito

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") { //Pulsado enter llamar a onAddTask.
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Nueva tarea"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;