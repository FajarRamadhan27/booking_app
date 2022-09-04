import EventSeat from "../EventSeat"
import { useDispatch, useSelector } from "react-redux"
import { bookSeats } from "../../utils/network/lib/Seat"
import { completeBookingStep } from "../../utils/redux/reducers/UserSclice"
import { setValidationErrors } from "../../utils/redux/reducers/UiAttributeSlice"
import { HTTP_UNPROCESSABLE_ENTITY, HTTP_OK } from "../../utils/network/AxiosClient"
import { Alert, Box, Button, Grid, TextareaAutosize, TextField, Typography } from "@mui/material"

function FillInformatin() {

    const dispatch = useDispatch()

    const { totalPurchases, selectedSeats  } = useSelector((state) => state.user)
    const { validationErrors } = useSelector(state => state.uiAttribute)

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        let name = data.get('name')
        let email =  data.get('email')
        let notes = data.get('notes')
        let seat_ids = selectedSeats.map(seat => seat.id)
        let total_purchase = totalPurchases

        bookSeats({ name, email, notes, seat_ids, total_purchase },
            (res) => {
                switch(res.status) {
                    case HTTP_OK:
                        dispatch(completeBookingStep())
                        dispatch(setValidationErrors({}))
                        break
                    case HTTP_UNPROCESSABLE_ENTITY:
                        dispatch(setValidationErrors(res.data.errors))
                        break
                }
            }
        )
    }

    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%'
            }}
        >
            <div className='w-full'>
                <Grid container sx={{ mb: 2 }} justifyContent={"center"}>
                    { selectedSeats.map(seat =>  <EventSeat seat={seat}/>) }
                </Grid>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    required
                    variant="standard"
                    fullWidth
                    autoComplete="given-name"
                    inputProps={{style: { fontSize: 14 }}}
                    InputLabelProps={{style: { fontSize: 14 }}}
                />
                {
                    'name' in validationErrors &&
                        <Alert icon={false} variant={"filled"} severity="error" sx={{ mt: 1, p: 0, fontSize: 10 }}>
                            { validationErrors.name[0] }
                        </Alert>
                }
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="email"
                    inputProps={{style: { fontSize: 14 }}}
                    InputLabelProps={{style: { fontSize: 14 }}}
                    sx={{ my: 1 }}
                />
                {
                    'email' in validationErrors &&
                        <Alert icon={false} variant={"filled"} severity="error" sx={{ mt: 1, p: 0, fontSize: 10}}>
                            { validationErrors.email[0] }
                        </Alert>
                }
                <TextareaAutosize
                    aria-label="Notes"
                    id="notes"
                    name="notes"
                    minRows={3}
                    placeholder="Notes"
                    style={{ fontSize: 14, width: '100%'}}
                />
                 {
                    'notes' in validationErrors &&
                        <Alert icon={false} variant={"filled"} severity="error" sx={{ mt: 1, p: 0, fontSize: 10}}>
                            { validationErrors.notes[0] }
                        </Alert>
                }
            </div>
            <div className="flex justify-between items-center w-full ml-3">
                <Typography variant='h6'>{'Total Price: $' + totalPurchases }</Typography>
                <Button
                    type="submit"
                    color='success'
                    variant='contained'
                >
                    SAVE
                </Button>
            </div>
        </Box>
    )
}

export default FillInformatin
