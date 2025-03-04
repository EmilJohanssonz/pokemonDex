import { useState } from "react";
import PokemonApi from "./api/pokemonApi";

function App() {
  const [pokemonID, setPokemonID] = useState(1);

  return (
    <div>
      <h1>Pokédex</h1>
      {/* Use PokemonApi component and pass Pokémon ID */}
      <PokemonApi PokemonNameID={pokemonID} />
      <button onClick={() => setPokemonID(pokemonID - 1)} disabled={pokemonID <= 1}>Prev</button>
      <button onClick={() => setPokemonID(pokemonID + 1)}>Next</button>
    </div>
  );
}

export default App;
