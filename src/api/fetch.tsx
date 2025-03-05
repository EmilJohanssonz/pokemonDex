export async function fetchPokemonByFirstLetter(letter: string) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    const filteredPokemon = data.results.filter((pokemon: { name: string }) =>
      pokemon.name.startsWith(letter.toLowerCase()),
    );

    // Fetch detailed data for each filtered Pokémon
    const detailedPokemonPromises = filteredPokemon.map(
      async (pokemon: {
        [x: string]: RequestInfo | URL; name: string 
}) => {
        const pokemonResponse = await fetch(pokemon.url);
        return pokemonResponse.json();
      },
    );

    return await Promise.all(detailedPokemonPromises);
  } catch (error) {
    console.error("Error fetching", error);
    return null;
  }
}
