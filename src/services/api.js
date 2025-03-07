const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (url = API_URL) => {
  const response = await fetch(url);
  const data = await response.json();
  const res = data.results;
  const detailedPokemons = await Promise.all(
    res.map(async (pokemon, index) => {
      const pokemonDetailsResponse = await fetch(pokemon.url);
      const pokemonDetails = await pokemonDetailsResponse.json();
      return {
        ...pokemon,
        id: pokemonDetails.id,
        image: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${pokemonDetails.id
          .toString()
          .padStart(3, "0")}.png`,
        types: pokemonDetails.types.map((typeInfo) => typeInfo.type.name),
      };
    })
  );

  return detailedPokemons;
};

export const getPages = async (url = API_URL) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
