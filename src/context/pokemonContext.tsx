import { createContext, useReducer, useEffect } from "react";
import { Pokemon } from "../types/type";
import PokemonReducer from "../hooks/useReducer";

interface PokemonContextType {
  favorites: string[];
  toggleFavorite: (name: string) => void;
  pokemonList: Pokemon[];
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (pokemon: Pokemon | null) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const PokemonContext = createContext<PokemonContextType | null>(null);

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState = {
    favorites: [],
    pokemonList: [],
    selectedPokemon: null,
    isModalOpen: false,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Funktionen för att toggla favoriter
  const toggleFavorite = (name: string) => {
    dispatch({ type: "TOGGLE_FAVORITES", payload: name });
  };

  // Funktionen för att välja en Pokémon
  const setSelectedPokemon = (pokemon: Pokemon | null) => {
    dispatch({ type: "SELECT_POKEMON", payload: pokemon });
  };

  // Funktionen för att öppna/stänga modal
  const setIsModalOpen = (isOpen: boolean) => {
    dispatch({ type: "TOGGLE_MODAL", payload: isOpen });
  };

  // Hämta Pokémon-listan
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151",
        );
        const data = await response.json();

        const detailedPokemonList = await Promise.all(
          data.results.map(async (pokemon: { name: string; url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          }),
        );

        dispatch({ type: "SET_POKEMON_LIST", payload: detailedPokemonList });
      } catch (error) {
        console.error("Failed to fetch Pokémon list", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        favorites: state.favorites,
        toggleFavorite,
        pokemonList: state.pokemonList,
        selectedPokemon: state.selectedPokemon,
        setSelectedPokemon,
        isModalOpen: state.isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
