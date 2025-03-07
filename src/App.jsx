import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Info from "./pages/Info";
import { PokemonProvider } from "./contexts/PokemonContext";
import { Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#510000",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PokemonProvider>
        <Container>
          <Box sx={{ display: "flex" }}>
            <AppBar
              position='fixed'
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                  Pokédex by Max v.1.0
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component='nav'
              sx={{ width: { xs: 240 }, flexShrink: { sm: 0 } }}
            >
              <NavBar />
            </Box>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Team' element={<Team />} />
                <Route path='/Info' element={<Info />} />
              </Routes>
            </Box>
          </Box>
        </Container>
      </PokemonProvider>
    </ThemeProvider>
  );
}

export default App;
