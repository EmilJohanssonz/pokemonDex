
export async function fetchPokemon(PokemonNameID: number) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${PokemonNameID}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch");

    return await response.json();
  } catch (error) {
    console.error("Error fetching", error);
    return null;
  }
}