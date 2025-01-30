import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Passing search value to parent component
  };

  return (
    <nav className="navbar">
      <div className="nav-title">Task Board</div>
      <input
        type="text"
        className="nav-search"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="nav-profile">👤</div>
    </nav>
  );
};

export default Navbar;
