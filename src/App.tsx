import { useState } from "react";
import PokemonApi from "./api/pokemonApi";
import SearchBar from "./components/search/SearchBar";

function App() {
  const [pokemonID, setPokemonID] = useState(1);

  return (
    <div>
      <h1>Pokédex</h1>
      {/* Use PokemonApi component and pass Pokémon ID */}
      <SearchBar />
      <PokemonApi PokemonNameID={pokemonID} />
      <button onClick={() => setPokemonID(pokemonID - 1)} disabled={pokemonID <= 1}>Prev</button>
      <button onClick={() => setPokemonID(pokemonID + 1)}>Next</button>
    </div>
  );
}

export default App;
