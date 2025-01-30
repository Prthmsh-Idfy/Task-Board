import React from "react";
import TaskCard from "./TaskCard";
import './Column.css'
import InputCard from "./InputCard";
import { Status } from "../constants/status";

const Column = ({ title, tasks, onUpdateTask, onDeleteTask ,onAddTask}) => {

  const handleDrop = (e)=>{
      const id = e.dataTransfer.getData("text/plain");

      const task = JSON.parse(localStorage.getItem("tasks")).find(
        (storedTask) => storedTask.id === id
      );

      task.status = Status[title];
      console.log(task);
      onUpdateTask(task);
  }

  const handleDragStart = (e,task)=>{
    e.dataTransfer.setData("text/plain",task.id);
  }

  const handleDragOver = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="column" 
    onDrop={(e)=>{handleDrop(e)}}
    onDragOver={handleDragOver}
    >
      <h2>{title}</h2>
      <div className="task-list">
      <InputCard onAddTask={onAddTask} status={Status[title]}/>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} handleDragStart={handleDragStart} />
        ))}
       
      </div>
      
    </div>
  );
};

export default Column;
