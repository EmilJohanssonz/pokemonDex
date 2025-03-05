import "./App.css";
import { useState } from "react";
import SearchBar from "./components/search/SearchBar";
import Pokedex from "./widgets/pokedex/Pokedex";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1 className="text-5xl font-mono text-center text-[#FFD622]">Pokémon</h1>
      <SearchBar query={searchQuery} onSearch={handleSearch} />
      <p>Current Search: {searchQuery}</p>{" "}
      {/* Display the current search query */}
      <Pokedex searchTerm={searchQuery}/>
    </div>
  );
}

export default App;
