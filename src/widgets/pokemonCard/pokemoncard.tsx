import { Pokemon } from "../../types/type";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const hpStat = pokemon.stats?.find((stat) => stat.stat.name === "hp");

  return (
    <div>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <p>
        Types:
        {pokemon.types
          .map((typeInfo) => capitalize(typeInfo.type.name))
          .join(", ")}
      </p>
      <p>
        Abilities:
        {pokemon.abilities.map((a) => capitalize(a.ability.name)).join(", ")}
      </p>
      {hpStat && <p>HP: {hpStat.base_stat}</p>}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}
