import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { usePokemonContext } from "../contexts/PokemonContext";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const typeColor = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A878",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

export default function PokemonCard({ pokemon }) {
  const { team, addPokemon, removePokemon, isInTeam } = usePokemonContext();

  const inTeam = isInTeam(pokemon.id);

  function onAddTeamClick(e) {
    e.preventDefault();
    if (inTeam) {
      removePokemon(pokemon.id);
    } else {
      if (team.length < 6) {
        addPokemon(pokemon);
      } else {
        return alert("Your team limit is reached");
      }
    }
  }

  return (
    <Card sx={{ maxWidth: 205 }} key={pokemon.name}>
      <CardMedia
        sx={{ height: 205 }}
        image={pokemon.image}
        title={pokemon.name}
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography variant='subtitle1'>N° {pokemon.id}</Typography>
        <Typography variant='h6'>
          {capitalizeFirstLetter(pokemon.name)}
        </Typography>
        {inTeam ? (
          <Button
            size='small'
            variant='outlined'
            onClick={onAddTeamClick}
            sx={{
              marginTop: "10px",
              color: "#ee7d7d",
              borderColor: "#ee7d7d",
            }}
          >
            Remove from team
          </Button>
        ) : (
          <Button
            size='small'
            variant='outlined'
            onClick={onAddTeamClick}
            sx={{
              marginTop: "10px",
              color: "#70a1f9",
              borderColor: "#70a1f9",
              "&:hover": { borderColor: "#ee7d7d", color: "#ee7d7d" },
            }}
          >
            Add to team
          </Button>
        )}
      </CardContent>
      <CardActions sx={{ p: "16px" }}>
        {pokemon.types.map((type) => {
          return (
            <Button
              size='small'
              key={type}
              sx={{
                pointerEvents: "none",
                backgroundColor: typeColor[type],
                color: "white",
              }}
            >
              {type}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
}
