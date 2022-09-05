import EventSeat from "../EventSeat"
import { useSelector } from "react-redux"
import { Grid, Typography } from "@mui/material"
import DoneAllIcon from '@mui/icons-material/DoneAll'

function BookingComplete() {

    const { selectedSeats, bookingResult } = useSelector((state) => state.user)


    return (
        <div className='flex flex-col justify-between items-center h-full'>
            <Typography component="div" variant="h6" fontSize={16} align={"center"}>
                { bookingResult.title }
            </Typography>

            <Grid justifyContent={"center"} container>
                {
                    selectedSeats.map(seat => {
                        return <EventSeat seat={seat}/>
                    })
                }
            </Grid>

            <div>
                <Typography variant='h6' align='center'>{'Total Price: $' + bookingResult.total_purchase }</Typography>
                <div className="p-3 my-2 flex items-center justify-center">
                    <DoneAllIcon fontSize="large" color="success" sx={{ mr: 2 }}/>
                    <Typography component="div" variant="h6" align={"center"} color={'green'}>
                        SEAT BOOKED
                    </Typography>
                </div>
                <Typography component="div" variant="body2"align={"center"}>
                    {`Note: ${ bookingResult.notes } `}
                </Typography>
            </div>
        </div>
    )
}

export default BookingComplete
