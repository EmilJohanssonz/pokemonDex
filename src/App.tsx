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
      <h1 className="text-5xl pt-2 font-bold text-center text-[#FFD622] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] tracking-wide uppercase">
        Pokémon
      </h1>
      {/* Display the current search query */}
      <SearchBar query={searchQuery} onSearch={handleSearch} />
      <Pokedex searchTerm={searchQuery} />
    </div>
  );
}

export default App;
