import React, { useState, useRef } from "react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ query, onSearch }: SearchBarProps) => {
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    onSearch(newQuery); // Call onSearch on every change
  };

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col w-62 mx-auto absolute top-[45vh] left-5/9 transform -translate-x-1/2 bg-red-500 border-4 border-black rounded-xl p-4 shadow-lg">
      <div className="flex items-center gap-2 bg-white p-2 rounded-lg border-2 border-black">
        <img
          src="/pokeball-icon.png.png"
          alt="Poké Ball"
          className={`w-8 h-7 ${isTyping ? "spin" : ""}`} // Add the spin class conditionally
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search Pokémon..."
          className="w-full p-2 rounded-lg text-black border-none focus:outline-none"
        />
      </div>
      <p className="text-center text-white mt-2 font-bold text-lg">
        Searching: <span className="text-yellow-300">{query}</span>
      </p>
    </div>
  );
};

export default SearchBar;
