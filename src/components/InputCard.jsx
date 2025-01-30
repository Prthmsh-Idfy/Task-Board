import React, { useState } from "react";
import "./InputCard.css";
import { v4 as uuid } from "uuid";
import { priority } from "../constants/priority";

const InputCard = ({ onAddTask,status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    id:uuid(),
    title: "",
    description: "",
    priority: priority.LOW_PRIORITY,
    status:status,
    date: new Date()
  });
  
  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (taskData.title.trim() && taskData.description.trim()) {
    onAddTask(taskData);
      setTaskData({ title: "", description: "", priority: priority.LOW_PRIORITY });
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Input Card Button */}
      <div className="input-card" onClick={() => setIsModalOpen(true)}>
        + Add Task
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Task</h3>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={taskData.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Task Description"
              value={taskData.description}
              onChange={handleChange}
            />
            <select name="priority" value={taskData.priority} onChange={handleChange}>
              <option value={priority.LOW_PRIORITY}>Low</option>
              <option value={priority.MEDIUM_PRIORITY}>Medium</option>
              <option value={priority.HIGH_PRIORITY}>High</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleSubmit}>Add Task</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputCard;
