import { Typography } from "@mui/material";

export default function Info() {
  return (
    <>
      <Typography variant='h3' sx={{ mb: "20px" }}>
        What's this app?
      </Typography>
      <Typography variant='body1' sx={{ mb: "10px" }}>
        This is a simple app that uses the PokeApi to display Pokemons and some
        of their information. In this app you can add Pokemons to your favorites
        list, and see them in a separate page, the <em>"Team"</em> one.
      </Typography>
      <Typography variant='body1'>
        Obviously this app is not perfect, and there are some things that could
        be improved, but it's a good starting point for learning React
        functionalities such as Context, Router, and more. This app is also
        created as exercise to practice the use of Material-UI components.
      </Typography>
    </>
  );
}
