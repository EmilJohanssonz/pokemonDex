import { useState } from "react";
import PokemonApi from "../../api/pokemonApi";

export default function Pokedex({ searchTerm }: { searchTerm: string }) {
  return (
    <div className="flex justify-left items-center pt-3.5">
      {/* Pokédex Container */}
      <div className="bg-red-600 w-[500px] h-[500px] rounded-lg shadow-lg relative border-8 border-red-800 flex flex-col items-center p-4">
        {/* Top Lights */}
        <div className="absolute top-2 left-4 flex gap-2">
          <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        </div>
        <button
          className="absolute top-8 left-8 w-9 h-9 rounded-full border-2 border-white bg-blue-500"
        ></button>
        {/* Main Screen */}
        {/* Här visas Pokémon via PokemonApi */}
        <PokemonApi searchTerm={searchTerm} />

        {/* Buttons */}
        <div className="mt-4 flex  gap-4 absolute bottom-2 left-6">
          <button className="w-10 h-10 bg-gray-800 rounded-full"></button>
          <button className="w-16 h-8 bg-orange-500 rounded-lg"></button>
        </div>
      </div>
    </div>
  );
}
