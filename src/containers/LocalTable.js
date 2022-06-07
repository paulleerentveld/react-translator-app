import React, { Component, useState } from 'react';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


export function LocalTable (props) {
        
const [open, setOpen] =useState(false);
const [modalData,setModalData] = useState({});



//Open modal function
const handleOpen = (row) => {
    setOpen(true);
    setModalData(row)
}

//Close modal function
const handleClose = () => {
    setOpen(false); 
    setModalData([]);
}

//Edit function for Modal
const handleModalChange = (event) => {
    if (event.target.id === 'like') {
    return setModalData({...modalData, [event.target.id]: event.target.checked})
    }
    else {
    return setModalData({...modalData, [event.target.id]: event.target.value})
    }
}

const modalStyle = {
    position: 'absolute',
    display: 'grid',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    gap: 2,
  };
  
    return ( 
        
        <Container maxWidth="l">
            <Typography variant='h5' mb={5}>Locally Saved Translations to JSON File</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell align="right">Input</TableCell>
                            <TableCell align="right">Output</TableCell>
                            <TableCell align="right">Like</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.localData.length > 0 && props.localData.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{row.translation}</TableCell>
                        <TableCell align="right">{row.text}</TableCell>
                        <TableCell align="right">{row.translated}</TableCell>
                        <TableCell align="right">
                            {row.like == true ?
                            <FavoriteRoundedIcon onClick={() => props.handleLike(row)} />
                            :
                            <FavoriteBorderRoundedIcon onClick={() => props.handleLike(row)} />
                            }
                        </TableCell>
                        <TableCell align="right">
                            <EditRoundedIcon onClick={() => handleOpen(row)} />
                            <DeleteIcon onClick={() => props.deleteLocalData(row.id)} />
                        </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box component='form' sx={modalStyle}>
                    <TextField id="translation" label="Type" value={modalData.translation} onChange={handleModalChange} />
                    <TextField  id="text" label="Input" value={modalData.text} onChange={handleModalChange} />
                    <TextField  id="translated" label="Output" value={modalData.translated} onChange={handleModalChange} />
                    <Checkbox id="like" icon={<FavoriteBorderRoundedIcon />} checkedIcon={<FavoriteRoundedIcon />} checked={modalData.like} inputProps={{ 'aria-label': 'controlled' }} onChange={handleModalChange}  />
                    <Button variant="contained" onClick={() => props.editLocalData(modalData)}>Save</Button>
                    <Button variant="contained" onClick={handleClose}>Close</Button>
                </Box> 
            </Modal>
        </Container>
     );
}


