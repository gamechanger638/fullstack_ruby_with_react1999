import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as ReactDOM from 'react-dom'
// import Checkbox from '@mui/material/Checkbox';
// import { styled } from '@mui/material/styles';
 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Catalog = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  
  
  return (

    <>
   <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
    
    <TextField variant="standard" label="Username" />
    <TextField variant="outlined" label="Email" type="email" />
    <TextField variant="filled" label="Password" type="password" />
    
    </>
  )
}

export default Catalog