import React, { Component, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export function Home (props) {
        
    return (  
      <Container maxWidth="l">
          <Typography variant='h2' mb={5}>Translator App</Typography>
          <Typography mb={5}>Welcome to the Translator App. With this app you can translate phases to the following movie languages</Typography>      
          <Button variant='contained' href='/translate'>Click here to start Translating</Button>
        </Container> 
     );
}