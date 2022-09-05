import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

function CustomAppBar() {
  return (
    <AppBar>
      <Toolbar variant='dense'>
        <Typography variant="body1" component="div">
          Booking App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar