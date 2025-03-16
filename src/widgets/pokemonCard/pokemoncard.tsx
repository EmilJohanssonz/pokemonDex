import { Pokemon } from "../../types/type";
import { getTypeColor } from "./typeColors";
import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error("useContext must be used within a PokemonProvider");

  const hpStat = pokemon.stats?.find((stat) => stat.stat.name === "hp");

  return (
    <div
      className="relative bg-white shadow-xl rounded-3xl p-6 w-60 text-center border border-gray-200 flex-shrink-0 transform transition-all hover:scale-105 hover:shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${getTypeColor(
          pokemon.types[0].type.name,
        )} 30%, #ffffff 100%)`,
      }}
    >
      {/* Pokémon Name */}
      <h2 className="text-2xl font-extrabold text-gray-900 uppercase drop-shadow-sm">
        {pokemon.name}
      </h2>

      {/* Type list */}
      <div className="mt-2 flex justify-center gap-2">
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className="px-3 py-1 rounded-lg text-white text-xs font-semibold shadow-md"
            style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
          >
            {capitalize(typeInfo.type.name)}
          </span>
        ))}
      </div>

      {/* Pokémon image */}
      <div className="mt-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-28 h-28 mx-auto drop-shadow-lg"
        />
      </div>

      {/* HP */}
      {hpStat && (
        <p className="mt-4 text-sm font-bold text-red-700 bg-red-100 px-3 py-1 rounded-lg inline-block">
          ❤️ HP: {hpStat.base_stat}
        </p>
      )}
    </div>
  );
}
