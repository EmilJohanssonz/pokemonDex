import { Pokemon } from "../../types/type";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function PokemonCard({ pokemon }: PokemonCardProps) {
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

// Function to determine color based on Pokémon type
const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    fire: "#F57D31",
    water: "#539DDF",
    grass: "#5FBD58",
    electric: "#F9CF30",
    ice: "#75D0C1",
    fighting: "#D3425F",
    poison: "#B763CF",
    ground: "#DA7C4D",
    flying: "#A891EC",
    psychic: "#FA8581",
    bug: "#92BC2C",
    rock: "#C9BB8A",
    ghost: "#5F6DBC",
    dragon: "#0B6DC3",
    dark: "#595761",
    steel: "#5695A3",
    fairy: "#EE90E6",
    normal: "#A0A29F",
  };

  return colors[type] || "#68A090";
};
