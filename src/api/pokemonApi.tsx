import { useEffect, useState } from "react";
import { Pokemon } from "../types/type";
import { fetchPokemonByFirstLetter } from "./fetch";
import PokemonCard from "../widgets/pokemonCard/pokemoncard";

interface PokemonApiProps {
  searchTerm: string;
}

export default function PokemonApi({ searchTerm }: PokemonApiProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchTerm) return;
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonByFirstLetter(searchTerm);
        if (!ignore && data) {
          setPokemonList(data);
        } else if (!ignore) {
          setPokemonList(null);
        }
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        if (!ignore) {
          setPokemonList(null);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (!pokemonList || pokemonList.length === 0) return <p>No Pokémon found.</p>;

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
