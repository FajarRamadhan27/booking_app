import * as React from 'react';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import BookingCard from '../cards/BookingCard';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CardMedia, Divider, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import SquareIcon from '@mui/icons-material/Square';
import BookingStepper from '../stepper/BookingStepper';
import DialogContent from '@mui/material/DialogContent';
import { setBookingDialogOpenOrClose } from '../../utils/redux/reducers/UiAttributeSlice';
import { Square } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function BookingDialogs() {

  const { bookingDialogOpen } = useSelector((state) => state.uiAttribute)

  const dispatch = useDispatch()

  return (
    <BootstrapDialog
      onClose={() => dispatch(setBookingDialogOpenOrClose(false))}
      aria-labelledby="customized-dialog-title"
      open={bookingDialogOpen}
      maxWidth='xl'
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => dispatch(setBookingDialogOpenOrClose(false))}
      >
        Booking Seat
      </BootstrapDialogTitle>
      <DialogContent dividers>
         <div className='flex'>
            <BookingCard/>
            <Divider variant='middle'/>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Square color='disabled'/>
                        <Typography variant='body2'>Available</Typography>
                    </div>
                    <div className='flex items-center ml-5'>
                        <Square color='error'/>
                        <Typography variant='body2'>Booked</Typography>
                    </div>
                    <div className='flex items-center ml-5'>
                        <Square color='primary'/>
                        <Typography variant='body2'>Your choice</Typography>
                    </div>
                </div>
                <Divider sx={{ my: 2 }}/>
                <div className='flex justify-between items-center'>
                    <Box sx={{ p: 1, border: '1px dashed grey', m:1 }}>b</Box>
                    <Box sx={{ p: 1, border: '1px dashed grey', m:1 }}>c</Box>
                    <Box sx={{ p: 1, border: '1px dashed grey', m:1 }}>a</Box>
                    <Box sx={{ p: 1, border: '1px dashed grey', m:1 }}>d</Box>
                    <Box sx={{ p: 1, border: '1px dashed grey', m:1 }}>e</Box>
                </div>
            </div>
         </div>
        <BookingStepper/>
      </DialogContent>
    </BootstrapDialog>
  );
}

export default BookingDialogs
