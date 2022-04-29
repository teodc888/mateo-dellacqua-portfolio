import * as React from "react";

//React
import { useState } from "react";

//Mui
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

//Mui Icons
import MoreIcon from "@mui/icons-material/MoreVert";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit" href="#quienSoy" >
          Quien soy?
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" href="#conocimientos">
          Conocimientos
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" href="#experiencia" >
          Experiencia
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" href="#proyectos">
          Proyectos
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit" href="#contactar" >
          Contactar
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#263238" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PORTFOLIO
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <Button color="inherit" href="#quienSoy" >
              Quien soy?
            </Button>
            <Button color="inherit" href="#conocimientos">
              Conocimientos
            </Button>
            <Button color="inherit" href="#experiencia">
              Experiencia
            </Button>
            <Button color="inherit" href="#proyectos">
              Proyectos
            </Button>
            <Button color="inherit" href="#contactar">
              Contactar
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
