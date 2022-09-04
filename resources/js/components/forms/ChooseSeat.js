import Loading from "../Loading"
import { useEffect, useState } from "react"
import EventSeat from "../EventSeat"
import { Square } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { getSeats } from "../../utils/network/lib/Seat"
import { Alert, Button, Grid, Snackbar, Typography } from "@mui/material"
import { forwardBookingStep, setEventSeats } from "../../utils/redux/reducers/UserSclice"

function ChooseSeat() {

    const dispatch = useDispatch()

    const [isWarn, setWarnOpen] = useState(false)

    const { totalPurchases, eventSeats, selectedSeats } = useSelector((state) => state.user)
    const { selectedEventSchedule } = useSelector((state) => state.eventSchedules)

    useEffect(() => {
        getSeats(selectedEventSchedule.facility_id, (res) => {
            dispatch(setEventSeats(res))
        })
    }, [])

    const handleConfirm = () => {
        switch(true) {
            case (selectedSeats.length == 0):
                setWarnOpen(true)
                break
            default:
                dispatch(forwardBookingStep())
            break
        }
    }

    if(!eventSeats) return <Loading open={eventSeats==null}/>

    return (
        <div className='flex flex-col justify-between items-center'>
            <div>
                <div className='flex justify-center items-center'>
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
                <div className='flex justify-between items-center my-5'>
                    <Grid container>
                        { eventSeats.map(seat => (<EventSeat seat={seat}/>)) }
                    </Grid>
                </div>
            </div>
            <div className='flex items-center justify-between w-full ml-3'>
                <Typography variant='h6'>{'Total Price: $' + totalPurchases }</Typography>
                <Button
                    color='success'
                    variant='contained'
                    onClick={handleConfirm}
                >
                    CONFIRM
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={isWarn}
                onClose={() => setWarnOpen(false)}
                key={'top-center'}
            >
                <Alert severity="error">Choose your seat first !</Alert>
            </Snackbar>
        </div>
    )
}

export default ChooseSeat
