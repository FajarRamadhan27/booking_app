import { createSlice } from "@reduxjs/toolkit";

export const uiAttributeSlice = createSlice({
    name: 'uiAttribute',
    initialState: {
        bookingDialogOpen: false
    },
    reducers: {
        setBookingDialogOpenOrClose: (state, value) => {
            state.bookingDialogOpen = value.payload
        }
    }
})

export const { setBookingDialogOpenOrClose } = uiAttributeSlice.actions
export default uiAttributeSlice.reducer