import React from "react";
import Item from "./Item";

const List = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <Item key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
};

export default List;