import { useState } from "react";
import PokemonApi from "./api/pokemonApi";
import SearchBar from "./components/search/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <SearchBar query={searchQuery} onSearch={handleSearch} />
      <p>Current Search: {searchQuery}</p>{" "}
      {/* Display the current search query */}
      <PokemonApi searchTerm={searchQuery} />
    </div>
  );
}

export default App;
