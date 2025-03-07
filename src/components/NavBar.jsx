import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, CatchingPokemon, Info } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const drawerWidth = 240;

export default function NavBar({ children }) {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        paddingRight: 30,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <Link to='/' className='nav-link'>
            <ListItem key='Home' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>

                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/team' className='nav-link'>
            <ListItem key='Team' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CatchingPokemon />
                </ListItemIcon>

                <ListItemText primary='Team' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/info' className='nav-link'>
            <ListItem key='Info' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>

                <ListItemText primary='Info' />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}
