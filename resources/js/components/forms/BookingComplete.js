import EventSeat from "../EventSeat"
import { useSelector } from "react-redux"
import { Grid, Typography } from "@mui/material"
import DoneAllIcon from '@mui/icons-material/DoneAll'

function BookingComplete() {

    const { totalPurchases, selectedSeats  } = useSelector((state) => state.user)
    const { selectedEventSchedule } = useSelector((state) => state.eventSchedules)

    return (
        <div className='flex flex-col justify-between items-center h-full'>
            <Typography component="div" variant="h6" fontSize={16} align={"center"}>
                {`${selectedEventSchedule.title}(Fajar Ramadhan : fajarramadhan220@gmail.com)`}
            </Typography>

            <div className='flex flex-col justify-center items-center'>
                <Grid justifyContent={"center"} container sx={{ mt: 1 }}>
                    {
                        selectedSeats.map(seat => {
                            return <EventSeat seat={seat}/>
                        })
                    }
                </Grid>
                <Typography variant='h6'>{'Total Price: $' + totalPurchases }</Typography>
            </div>

            <div>
                <div className="p-3 my-2 flex items-center justify-center">
                    <DoneAllIcon fontSize="large" color="success" sx={{ mr: 2 }}/>
                    <Typography component="div" variant="h6" align={"center"} color={'green'}>
                        SEAT BOOKED
                    </Typography>
                </div>
                <Typography component="div" variant="body2"align={"center"}>
                    {`Note: - `}
                </Typography>
            </div>
        </div>
    )
}

export default BookingComplete
