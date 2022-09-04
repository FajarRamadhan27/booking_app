import EventSeat from "../EventSeat"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, TextareaAutosize, TextField, Typography } from "@mui/material"
import { completeBookingStep } from "../../utils/redux/reducers/UserSclice"

function FillInformatin() {

    const dispatch = useDispatch()
    const { totalPurchases, selectedSeats  } = useSelector((state) => state.user)

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
                <Grid container sx={{ mb: 1 }} justifyContent={ "center" }>
                    {
                        selectedSeats.map(seat => {
                            return <EventSeat seat={seat}/>
                        })
                    }
                </Grid>
                <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    fullWidth
                    inputProps={{style: { fontSize: 14 }}}
                    InputLabelProps={{style: { fontSize: 14 }}}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    inputProps={{style: { fontSize: 14 }}}
                    InputLabelProps={{style: { fontSize: 14 }}}
                    sx={{ my: 1 }}
                />
                <TextareaAutosize
                    aria-label="Notes"
                    minRows={3}
                    placeholder="Notes"
                    style={{ fontSize: 14 }}
                />
            </div>
            <div className="flex justify-between items-center w-full ml-3">
                <Typography variant='h6'>{'Total Price: $' + totalPurchases }</Typography>
                <Button
                    color='success'
                    variant='contained'
                    onClick={() => {dispatch(completeBookingStep())}}
                >
                    SAVE
                </Button>
            </div>
        </div>
    )
}

export default FillInformatin
