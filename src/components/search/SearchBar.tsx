import React from "react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ query, onSearch }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    onSearch(newQuery); // Call onSearch on every change
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for Pokémon"
      />
    </div>
  );
};

export default SearchBar;
