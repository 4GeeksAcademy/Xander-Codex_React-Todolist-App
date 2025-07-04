import React, { useState } from "react";

const Input = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
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