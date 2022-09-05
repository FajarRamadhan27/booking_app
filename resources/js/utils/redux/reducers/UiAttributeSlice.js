import { createSlice } from "@reduxjs/toolkit";

export const uiAttributeSlice = createSlice({
    name: 'uiAttribute',
    initialState: {
        bookingDialogOpen: false,
        validationErrors: {}
    },
    reducers: {
        setBookingDialogOpenOrClose: (state, value) => {
            state.bookingDialogOpen = value.payload
        },
        setValidationErrors: (state, value) => {
            state.validationErrors = value.payload
        }
    }
})

export const { setBookingDialogOpenOrClose, setValidationErrors } = uiAttributeSlice.actions
export default uiAttributeSlice.reducer
