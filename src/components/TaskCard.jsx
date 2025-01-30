import React, { useState } from "react";
import './TaskCard.css';
import {priority} from '../constants/priority'

const TaskCard = ({ task, onDelete, onUpdate ,handleDragStart}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [due, setdue] = useState((task.date - new Date())|| "");
  const [prioritySTATE, setPrioritySTATE] = useState(task.priority.toString());

  const priorities = [priority.LOW_PRIORITY, priority.MEDIUM_PRIORITY, priority.HIGH_PRIORITY];

  const togglePriority = () => {
    const nextIndex = (priorities.indexOf(prioritySTATE) + 1) % priorities.length;
    setPrioritySTATE(priorities[nextIndex]);
    onUpdate({ ...task, priority: priorities[nextIndex] });
  };

  const handleBlur = () => {
    setIsEditingTitle(false);
    setIsEditingDesc(false);
    onUpdate({ ...task, title, description });
  };

  return (
    <div className="task-card" 
    draggable 
    onDragStart={(e)=>{handleDragStart(e,task)}}
    >
      {/* Editable Priority Label */}

      {/* Editable Task Title */}
      <div className="task-title">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            onEnter
            autoFocus
          />
        ) : (
          <h3 onClick={() => setIsEditingTitle(true)}>{title}</h3>
        )}
      </div>

      {/* Editable Task Description */}
      <div className="task-desc">
        {isEditingDesc ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <p onClick={() => setIsEditingDesc(true)}>{description}</p>
        )}
      </div>

      <span className={`priority ${prioritySTATE}`} onClick={togglePriority}>
        {prioritySTATE}
      </span>

      {/* Small Delete Button */}
      <div className="task-date-and-delete">
       <span className="task-date">
            due in 
       </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskCard;
