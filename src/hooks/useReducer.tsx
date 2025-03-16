import { Pokemon } from "../types/type";

interface PokemonState {
  favorites: string[];
  pokemonList: Pokemon[];
  selectedPokemon: Pokemon | null;
  isModalOpen: boolean;
}

type PokemonAction =
  | { type: "TOGGLE_FAVORITES"; payload: string }
  | { type: "SET_POKEMON_LIST"; payload: Pokemon[] }
  | { type: "SELECT_POKEMON"; payload: Pokemon | null }
  | { type: "TOGGLE_MODAL"; payload: boolean };

const PokemonReducer = (
  state: PokemonState,
  action: PokemonAction,
): PokemonState => {
  switch (action.type) {
    case "TOGGLE_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter((name) => name !== action.payload)
          : [...state.favorites, action.payload],
      };
    case "SET_POKEMON_LIST":
      return { ...state, pokemonList: action.payload };
    case "SELECT_POKEMON":
      return { ...state, selectedPokemon: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
};

export default PokemonReducer;
