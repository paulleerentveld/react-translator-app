import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItem, MenuItem } from '@mui/material';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            
          </IconButton>
          <MenuItem variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
          </MenuItem>
          <MenuItem variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink style={{ marginRight: '10px' }} to="/translate">Translate</NavLink>
          </MenuItem>
          <MenuItem variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink style={{ marginRight: '10px' }} to="/savedlocally">Saved Locally</NavLink>
          </MenuItem>
          <MenuItem variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink style={{ marginRight: '10px' }} to="/about">About</NavLink>
          </MenuItem>
            
            
            
            
        </Toolbar>
      </AppBar>
    </Box>


    </div>
  );
}

export default NavBar;