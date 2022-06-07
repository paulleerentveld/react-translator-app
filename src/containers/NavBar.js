import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { ListItem, MenuItem, ListItemText } from '@mui/material';

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

  return (
    <Box sx={{ flexGrow: 1 }} mb={5}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TRANSLATOR-APP
          </Typography>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem component={NavLink} to="/">
                    Home
                </MenuItem>
                <MenuItem component={NavLink} to="/translate">
                    Translate
                </MenuItem>
                <MenuItem component={NavLink} to="/savedlocally">
                    Saved Translations
                </MenuItem>
            </Menu>
            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                <Button color="inherit" component={NavLink} to="/" >
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/translate">
                    Translate
                </Button>
                <Button color="inherit" component={NavLink} to="/savedlocally">
                    Saved Translations
                </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default NavBar;
