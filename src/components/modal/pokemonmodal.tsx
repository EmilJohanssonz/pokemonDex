import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";

const PokemonModal = () => {
  const context = useContext(PokemonContext);

  if (!context) return null;

  const { selectedPokemon, isModalOpen, setIsModalOpen } = context;

  if (!isModalOpen || !selectedPokemon) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold">{selectedPokemon.name}</h2>
        <p>Type: {selectedPokemon.types[0].type.name}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;
