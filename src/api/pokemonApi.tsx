import { useEffect, useState } from "react";
import { Pokemon, PokemonProps } from "../types/type";
import { fetchPokemon } from "./fetch";
import PokemonCard from "../widgets/pokemonCard/pokemoncard";

export default function PokemonApi({ PokemonNameID }: PokemonProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!PokemonNameID) return;
    let ignore = false;

    fetchPokemon(PokemonNameID).then((data) => {
      if (!ignore && data) {
        setPokemon(data);
        setLoading(false);
      }
    });

    return () => {
      ignore = true;
    };
  }, [PokemonNameID]);

  if (loading) return <p>Loading...</p>;
  if (!pokemon) return <p>No Pokemon found.</p>;

  return <PokemonCard pokemon={pokemon} />;
}
