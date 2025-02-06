import { createContext, useState, useContext } from "react";

// Create Context
const SearchContext = createContext();

// Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook to use search context
export const useSearch = () => useContext(SearchContext);
