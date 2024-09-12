import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  filteredData: any[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
    console.log('Search query:', newQuery); // Debugging statement
  };

  return (
    <input type='text' placeholder='Search by title, author, pages, etc.' value={query} onChange={handleInputChange} />
  );
};

export default SearchBar;
