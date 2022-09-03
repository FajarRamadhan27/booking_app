import { useState } from "react"
import { useDispatch } from 'react-redux'
import { Button, Grid } from "@mui/material"
import { addPurchase, reducePurchase } from "../utils/redux/reducers/UserSclice"

function EventSeat() {

    const dispatch = useDispatch()
    const [seatColor, setSeatColor] = useState('inherit');

    const handleClick = () => {
        switch(seatColor) {
            case 'primary' :
                setSeatColor('inherit')
                dispatch(reducePurchase(100))
                break;
            case 'inherit':
                setSeatColor('primary')
                dispatch(addPurchase(100))
                break;
            default:
                break;
        }
    }

    return (
        <Grid xs={2} padding={1}>
            <Button variant='contained' color={seatColor} onClick={handleClick}>
                C1
            </Button>
        </Grid>
    )
}

export default EventSeat   