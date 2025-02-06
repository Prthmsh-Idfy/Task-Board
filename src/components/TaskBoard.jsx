import React, { useState,useEffect } from "react";
import Column from "./Column";
import "./TaskBoard.css";
import { Status } from "../constants/status";
import { useSearch } from "../searchContext";


const TaskBoard = () => {
  
  const [tasks, setTasks] = useState([]);
  const { searchQuery } = useSearch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const filteredTasks = prevTasks.filter((task) => task.id !== updatedTask.id);
      return [updatedTask, ...filteredTasks];
    });
  };
  

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const columns = Object.keys(Status);

  return (
    <div className="task-board-container">
      <div className="task-board">
        {columns.map((column) => (
          <Column
            key={column}
            title={column}
            tasks={tasks.filter((task) => task.status === Status[column] && (!searchQuery || task.title.includes(searchQuery)))}
            onUpdateTask={updateTask}
            onDeleteTask={deleteTask}
            onAddTask={addTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
