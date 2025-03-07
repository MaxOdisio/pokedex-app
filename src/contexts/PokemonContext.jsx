import { useContext, createContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const team = localStorage.getItem("team");
    if (team) {
      setTeam(JSON.parse(team));
    }
  }, []);

  const addPokemon = (pokemon) => {
    console.log("adding pokemon", pokemon);
    setTeam((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    console.log("removing pokemon", id);
    setTeam((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  const isInTeam = (id) => {
    return team.some((pokemon) => pokemon.id === id);
  };

  const value = {
    team,
    addPokemon,
    removePokemon,
    isInTeam,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
