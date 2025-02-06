import React, { useState } from "react";
import TaskCard from "./TaskCard";
import "./Column.css";
import InputCard from "./InputCard";
import { Status } from "../constants/status";

const Column = ({ title, tasks, onUpdateTask, onDeleteTask, onAddTask }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");

    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const task = storedTasks.find((storedTask) => storedTask.id === id);

    task.status = Status[title];
    onUpdateTask(task);

    setShowPlaceholder(false);
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setShowPlaceholder(true);
  };

  const handleDragLeave = () => {
    setShowPlaceholder(false);
  };

  return (
    <div
      className="column"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <h2>{title}</h2>
      <div className="task-list">
        <InputCard onAddTask={onAddTask} status={Status[title]} />

        {/* Show placeholder at the beginning of the column only */}
        {showPlaceholder && <div className="task-placeholder">Drop Here</div>}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdate={onUpdateTask}
            onDelete={onDeleteTask}
            handleDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
