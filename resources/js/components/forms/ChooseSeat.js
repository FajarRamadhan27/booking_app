import EventSeat from "../EventSeat"
import { Square } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { Button, Divider, Grid, Typography } from "@mui/material"
import { forwardBookingStep } from "../../utils/redux/reducers/UserSclice"


function ChooseSeat() {
    
    const dispatch = useDispatch()
    const { totalPurchases  } = useSelector((state) => state.user)

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
                        { 
                        [1,2,3,4,5,6,7,8,9,10].map(idx => {
                            return <EventSeat/>
                        })
                        }
                        { 
                        [1,2,3,4,5,6,7,8,9,10].map(idx => {
                            return <EventSeat/>
                        })
                        }
                        { 
                        [1,2,3,4,5,6,7,8,9,10].map(idx => {
                            return <EventSeat/>
                        })
                        }
                    </Grid>
                </div>
            </div>
            <div className='flex items-center justify-between w-full ml-3'>
                <Typography variant='h6'>{'Total Price: $' + totalPurchases }</Typography>
                <Button 
                    color='success' 
                    variant='contained' 
                    onClick={() => {dispatch(forwardBookingStep())}}
                >
                    CONFIRM
                </Button>   
            </div>
        </div>
    )
}

export default ChooseSeat