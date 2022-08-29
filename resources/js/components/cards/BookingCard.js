import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function BookingCard() {
  const theme = useTheme();
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
          <Typography component="div" variant="h5">
            {selectedEventSchedule.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {selectedEventSchedule.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default BookingCard
