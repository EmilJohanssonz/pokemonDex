import { useState } from "react";
import { motion } from "framer-motion";
import { Pokemon } from "../../types/type";
import { getTypeColor } from "./typeColors";

interface PokemonFlipCardProps {
  pokemon: Pokemon;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function PokemonFlipCard({ pokemon }: PokemonFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const hpStat = pokemon.stats.find((stat) => stat.stat.name === "hp");

  return (
    <motion.div
      className="relative w-56 h-72 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Korthållare */}
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Framsida */}
        <div
          className="absolute w-full h-full shadow-lg rounded-2xl p-4 border flex flex-col items-center justify-center backface-hidden"
          style={{
            background: `linear-gradient(135deg, ${getTypeColor(
              pokemon.types[0].type.name,
            )} 30%, #ffffff 100%)`,
          }}
        >
          <h2 className="text-xl font-bold text-white uppercase">
            {pokemon.name}
          </h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mt-4 w-24 h-24"
          />
          {hpStat && (
            <p className="mt-4 text-sm font-bold text-red-700 bg-red-100 px-3 py-1 rounded-lg inline-block">
              ❤️ HP: {hpStat.base_stat}
            </p>
          )}

          {/* Typfärger */}
          <div className="mt-3 flex gap-2">
            {pokemon.types.map((typeInfo) => (
              <span
                key={typeInfo.type.name}
                className="px-2 py-1 rounded-lg text-white text-xs"
                style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
              >
                {capitalize(typeInfo.type.name)}
              </span>
            ))}
          </div>
        </div>

        {/* Baksida */}
        <div
          className="absolute w-full h-full shadow-lg rounded-2xl p-4 border flex flex-col items-center justify-center backface-hidden"
          style={{
            backgroundColor: "#1E293B",
            borderColor: "#374151",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg font-bold text-white">
            {capitalize(pokemon.name)}
          </h3>
          <p className="mt-2 text-sm text-gray-300">
            Attack:
            {
              pokemon.stats.find((stat) => stat.stat.name === "attack")
                ?.base_stat
            }
          </p>
          <p className="mt-1 text-sm text-gray-300">
            Defense:
            {
              pokemon.stats.find((stat) => stat.stat.name === "defense")
                ?.base_stat
            }
          </p>
          <p className="mt-1 text-sm text-gray-300">
            Speed:
            {
              pokemon.stats.find((stat) => stat.stat.name === "speed")
                ?.base_stat
            }
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
