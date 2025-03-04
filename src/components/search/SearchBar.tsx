import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="input-field"
      />
      <p className="live-text">You are searching for: {searchTerm}</p>
    </div>
  );
}
