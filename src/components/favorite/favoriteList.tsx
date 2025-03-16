import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import { getTypeColor } from "../../widgets/pokemonCard/typeColors";
import { FaHeartBroken } from "react-icons/fa";

const FavoriteList = () => {
  const context = useContext(PokemonContext);
  if (!context)
    return (
      <p className="text-red-500">
        Error: useContext must be used within a PokemonProvider
      </p>
    );

  const { favorites, pokemonList, toggleFavorite } = context;

  // Hämta Pokémon-objekt från favoritlistan
  const favoritePokemons = pokemonList.filter((pokemon) =>
    favorites.includes(pokemon.name),
  );

  return (
    <div className="max-w-sm mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-200 mt-6">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
        ⭐ Favorite Pokémon
      </h2>
      {favoritePokemons.length > 0 ? (
        <ul className="space-y-2">
          {favoritePokemons.map(
            (pokemon: {
              name: string;
              types: { type: { name: string } }[];
            }) => (
              <li
                key={pokemon.name}
                className="flex items-center justify-between px-4 py-2 text-white rounded-lg shadow-md"
                style={{
                  backgroundColor: getTypeColor(pokemon.types[0].type.name),
                }}
              >
                <span className="font-semibold">🔴 {pokemon.name}</span>
                <button
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded-lg"
                  onClick={() => toggleFavorite(pokemon.name)}
                >
                  Remove
                </button>
              </li>
            ),
          )}
        </ul>
      ) : (
        <p className="text-gray-500 flex items-center justify-center gap-2">
          <FaHeartBroken className="text-red-500" /> No Favorites
        </p>
      )}
    </div>
  );
};

export default FavoriteList;
