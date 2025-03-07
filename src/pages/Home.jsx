import { useState, useEffect } from "react";
import { Box, Grid2, Alert, Button } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import { getPokemons, getPages } from "../services/api";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const myPokemon = await getPokemons(currentPage);
        const page = await getPages(currentPage);
        const nxtPage = page.next;
        const prevPage = page.previous;
        setPreviousPage(prevPage);
        setNextPage(nxtPage);
        setPokemon(myPokemon);
        console.log(myPokemon);
      } catch (err) {
        console.log(err);
        setError("Failed to load Pokémons");
      } finally {
        setLoading(false);
      }
    };
    loadPokemon();
  }, [currentPage]);

  function handleNext() {
    setCurrentPage(nextPage);
  }

  function handlePrevious() {
    setCurrentPage(previousPage);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {error && <Alert severity='error'>{error}</Alert>}
      {loading && <Alert severity='info'>Loading...</Alert>}
      <Grid2 container spacing={2}>
        {pokemon.map((pokemon) => {
          return (
            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Grid2>
          );
        })}
      </Grid2>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button onClick={handlePrevious} disabled={!previousPage}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={!nextPage}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
