import React, { Component, useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 400
}));


export function OutputText (props) {
        
    return (  
      <Container maxWidth="l">
          <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3}>
                <Item><img width={'100%'} height={'auto'} src={'./images/' + props.outputContents.translation + '.jpg'} alt="test"  ></img></Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Typography variant="h4" mb={5}>Translation Type</Typography>
                  <Typography mb={5}>{props.outputContents.translation}</Typography>
                  <Divider />
                  <Typography variant="h4" mt={5} mb={5}>Input Text</Typography>
                  <Typography>"{props.outputContents.text}"</Typography>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Typography variant="h4" mb={5}>Translated Output</Typography>
                  <Typography>"{props.outputContents.translated}"</Typography>
                </Item>
              </Grid>
              <Grid mb={5} item xs={9}>
                <Button fullWidth variant="contained" onClick={() => props.saveLocalData(props.outputContents)} >Save to Local Data</Button>
              </Grid>
            </Grid>
        </Container> 
     );
}