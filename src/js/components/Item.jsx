import React from "react";

const Item = ({ task, onDelete }) => { 
  const handleDelete = () => { //Llama a onDelete con el id dela tarea
    onDelete(task.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {task.label}
      <button className="btn btn-sm btn-danger" onClick={handleDelete} aria-label={`Eliminar tarea ${task.label}`}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
};

export default Item;
