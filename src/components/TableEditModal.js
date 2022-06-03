import React, { Component, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function TableEditModal(props) {
    
    return (
        "test"

       /*  <Modal open={props.open} onClose={props.onClose}>
            <TextField Type id="outlined-required" label="Required" defaultValue={props.rowData.translation} />
            <TextField Input id="outlined-required" label="Required" defaultValue={props.rowData.text} />
            <TextField Output id="outlined-required" label="Required" defaultValue={props.rowData.translated} />
            <TextField Like id="outlined-required" label="Required" defaultValue={props.rowData.like} />
        </Modal> */
    );
  }