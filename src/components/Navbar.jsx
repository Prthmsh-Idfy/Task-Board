import React, { useState } from "react";
import "./Navbar.css";
import { useSearch } from "../searchContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchQuery } = useSearch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearchQuery(e.target.value); 
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
