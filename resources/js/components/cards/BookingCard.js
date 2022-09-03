import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function BookingCard() {

  const { selectedEventSchedule } = useSelector((state) => state.eventSchedules)

  return (
    <Card sx={{ display: 'flex', maxWidth: 400, minWidth:400 }}>
       <CardMedia
        component="img"
        image={selectedEventSchedule?.images}
        alt={selectedEventSchedule?.images}
        sx={{ width: 200 }}
       />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className='flex flex-col justify-between'>
            <div className='mb-6'>
              <Typography component="div" variant="h5">
                {selectedEventSchedule.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {selectedEventSchedule.description}
              </Typography>
            </div>
            <div className='bg-blue-500 p-1 rounded-md'>
              <Typography color={'white'} component="div" variant="body1">
                2022-08-31 14:15 AM
              </Typography>
            </div>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}

export default BookingCard
