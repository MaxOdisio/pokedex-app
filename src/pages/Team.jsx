import { Alert, Box, Grid2, Typography } from "@mui/material";
import { usePokemonContext } from "../contexts/PokemonContext";
import PokemonCard from "../components/PokemonCard";

export default function Team() {
  const team = usePokemonContext();
  console.log("current team", team);
  const teamLength = team.team.length;
  const pokemon = team.team;
  if (teamLength > 0) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          {pokemon.map((pokemon) => {
            return (
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    );
  } else {
    return (
      <Alert severity='warning'>
        <Typography variant='h2'>Your team is currently empty</Typography>
      </Alert>
    );
  }
}
