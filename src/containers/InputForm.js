import React, { Component, useState } from 'react';
import { OutputText } from '../components/OutputText';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function InputForm (props) {
        


  
    return ( 

        <Container maxWidth="l">
          <Grid container spacing={2} justifyContent="center">
              <Grid item xs={9}>
              <FormControl sx={{m: 1, minWidth: 200}} >
                    <InputLabel id="type">Translator Type:</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.selectedType}
                    label="TranslatorType"
                    onChange={(event) => props.handleTypeChange(event.target.value)}
                    >
                        <MenuItem value='default' disabled hidden>Choose a language...</MenuItem>
                        <MenuItem value="yoda">Yoda</MenuItem>
                        <MenuItem value="pirate">Pirate</MenuItem>
                        <MenuItem value="minion">Minion</MenuItem>
                        <MenuItem value="hodor">Hodor</MenuItem>
                        <MenuItem value="vulcan">Vulcan</MenuItem>
                        <MenuItem value="australian">Australian</MenuItem>
                        <MenuItem value="dothraki">Dothraki</MenuItem>
                        <MenuItem value="valyrian">Valyrian</MenuItem>
                    </Select>
                    <TextField sx={{m: 1, minWidth: 600}} label="InputText" id="inputText" onChange={(event) => props.handleInputChange(event.target.value)} />
                    <Button variant="contained" onClick={(event) => props.handleSubmit(event)}>Translate</Button>
                </FormControl>
                </Grid>
            </Grid>

        {props.outputContents.text !== '' &&  <OutputText outputContents={props.outputContents} saveLocalData={props.saveLocalData} />}
        </Container> 



        
       


     );
}