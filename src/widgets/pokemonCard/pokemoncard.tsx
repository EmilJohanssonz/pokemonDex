import { Pokemon } from "../../types/type";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const hpStat = pokemon.stats?.find((stat) => stat.stat.name === "hp");

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-56 text-center border border-gray-200 flex-shrink-0">
      <h2 className="text-xl font-bold text-gray-800 uppercase">
        {pokemon.name}
      </h2>

      {/* Type list */}
      <p className="mt-2 text-sm font-semibold">
        <span className="text-gray-500">Type:</span>{" "}
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className="px-2 py-1 mx-1 rounded-lg text-white text-xs"
            style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
          >
            {capitalize(typeInfo.type.name)}
          </span>
        ))}
      </p>

      {/* Abilities */}
      <p className="mt-2 text-sm">
        <span className="text-gray-500 font-semibold">Abilities:</span>{" "}
        {pokemon.abilities.map((a) => capitalize(a.ability.name)).join(", ")}
      </p>

      {/* HP */}
      {hpStat && (
        <p className="mt-2 text-sm font-bold text-red-600">
          HP: {hpStat.base_stat}
        </p>
      )}

      {/* Pokémon image */}
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mt-4 mx-auto w-24 h-24"
      />
    </div>
  );
}

// Function to determine color based on Pokémon type
const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    normal: "#A8A878",
  };

  return colors[type] || "#68A090";
};
