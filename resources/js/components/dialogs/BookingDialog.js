import * as React from 'react';
import PropTypes from 'prop-types';
import { Divider} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ChooseSeat from '../forms/ChooseSeat';
import { styled } from '@mui/material/styles';
import BookingCard from '../cards/BookingCard';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import FillInformatin from '../forms/FillInformation';
import BookingStepper from '../stepper/BookingStepper';
import BookingComplete from '../forms/BookingComplete';
import DialogContent from '@mui/material/DialogContent';
import { setbookingCompleted } from '../../utils/redux/reducers/UserSclice';
import { setBookingDialogOpenOrClose } from '../../utils/redux/reducers/UiAttributeSlice';


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

  const { bookingActiveStep } = useSelector((state) => state.user)
  const { bookingDialogOpen } = useSelector((state) => state.uiAttribute)

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(setBookingDialogOpenOrClose(false))
    dispatch(setbookingCompleted())
  }

  return (
    <BootstrapDialog
      aria-labelledby="customized-dialog-title"
      open={bookingDialogOpen}
      maxWidth='lg'
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        Booking Seat
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <div className='flex p-2'>
          <div className='w-[26rem]'>
            <BookingCard/>
          </div>
          <Divider orientation='vertical'/>
          <div className='w-[26rem]'>
            { bookingActiveStep == 0 && <ChooseSeat/> }
            { bookingActiveStep == 1 && <FillInformatin/> }
            { bookingActiveStep == 3 && <BookingComplete/> }
          </div>
        </div>
        <BookingStepper/>
      </DialogContent>
    </BootstrapDialog>
  );
}

export default BookingDialogs
