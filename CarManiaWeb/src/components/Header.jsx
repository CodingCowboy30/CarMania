import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
/*import { useState } from "react";*/

/*const pages = [
  { name: "Home", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Sell Car", path: "/sell" },
  { name: "Contact", path: "/contact" },
];*/

function Header() {
  /*const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }; */

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 90,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Carr Mania
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={RouterLink} to="/" sx={{ my: 2, color: 'white', display: 'block' }}>
              Home
            </Button>
            <Button component={RouterLink} to="/inventory" sx={{ my: 2, color: 'white', display: 'block' }}>
              Inventory
            </Button>
            <Button component={RouterLink} to="/sell" sx={{ my: 2, color: 'white', display: 'block' }}>
              Sell Car
            </Button>
            <Button component={RouterLink} to="/contact" sx={{ my: 2, color: 'white', display: 'block' }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
