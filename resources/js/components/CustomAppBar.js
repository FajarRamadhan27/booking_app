import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import React from 'react';

function CustomAppBar() {
  return (
    <AppBar sx={{ backgroundColor:'GrayText'}}>
      <Toolbar variant='dense'>
        <Typography variant="body1" component="div">
          Booking App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar