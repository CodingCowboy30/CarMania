import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/Header-Center-Piece.jpg"

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
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
        
        <Box>
          <Typography
            variant="h2"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 50,
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: 1000,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              animation: "textShadow 1s infinite",
              "@keyframes textShadow": {
                "0%": {
                  textShadow: "12px 2px -8px rgba(243, 7, 7, 0.877)",
                },
                "50%": {
                  textShadow: "-3px 2px 10px rgb(255, 255, 255)"
                },
                "100%": {
                  textShadow: "-2px -2px 8px rgba(243, 7, 7, 0.877)",
                },
              },
            }}
          >
            Car(r) Maniag
          </Typography>
        </Box><Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Box>
          <img src={logo} alt="Logo" style={{ height: '100px', marginLeft: '230px', marginRight:"30rem" }} />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/inventory"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Inventory
          </Button>
          <Button
            component={RouterLink}
            to="/sell"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Sell Car
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
