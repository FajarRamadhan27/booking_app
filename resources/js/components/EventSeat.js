import { useState } from "react"
import { useDispatch } from 'react-redux'
import { Button, Grid } from "@mui/material"
import { addPurchase, addSelectedSeat, reducePurchase, reduceSelectedSeat } from "../utils/redux/reducers/UserSclice"

function EventSeat(props) {

    const dispatch = useDispatch()

    const [ isChoosed, chooseSeat ] = useState(false)
    const { seat} = props

    const handleClick = () => {

        if (['booked', 'personal-booking'].includes(seat.availability)) return

        switch(isChoosed) {
            case true :
                chooseSeat(false)
                dispatch(reducePurchase(parseInt(seat.price)))
                dispatch(reduceSelectedSeat(seat.id))
                break
            case false :
                chooseSeat(true)
                dispatch(addPurchase(parseInt(seat.price)))
                dispatch(addSelectedSeat({...seat, availability: 'personal-booking'}))
                break
            default:
                break;
        }
    }

    return (
        <Grid xs={2} padding={1}>
            <Button
                variant='contained'
                color={
                    seat.availability == 'booked' ?
                        'error' : seat.availability == 'personal-booking' ?
                            'info' : isChoosed ?
                                'info' : 'inherit'
                }
                onClick={handleClick}
            >
                { seat.title }
            </Button>
        </Grid>
    )
}

export default EventSeat
