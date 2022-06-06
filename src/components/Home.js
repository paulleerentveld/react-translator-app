import React, { Component, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItem } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 400
}));


export function Home (props) {
        
    return (  
      <Container maxWidth="l">
          <Typography variant='h2' mb={5}>Translator App</Typography>
          <Typography mb={5}>Welcome to the Translator App. With this app you can translate phases to the following movie languages</Typography>      
          <Button variant='contained' href='/translate'>Click here to start Translating</Button>
        </Container> 
     );
}