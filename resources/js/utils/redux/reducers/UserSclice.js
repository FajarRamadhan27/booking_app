import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        totalPurchases: 0,
        userSeat: {},
        bookingActiveStep: 0,
        eventSeats: null,
        selectedSeats: []
    },
    reducers: {
        addPurchase: (state, value) => {
            state.totalPurchases += value.payload
        },
        reducePurchase: (state, value) => {
            state.totalPurchases -= value.payload
        },
        addSeat: (state, value) => {
            state.userSeat.push(value.payload)
        },
        removeSeat: (state, value) => {
            state.userSeat.push(value.payload)
        },
        forwardBookingStep: (state) => {
            state.bookingActiveStep += 1
        },
        completeBookingStep: (state) => {
            state.bookingActiveStep = 3
        },
        setEventSeats: (state, value) => {
            state.eventSeats = value.payload
        },
        addSelectedSeat: (state, value) => {
            state.selectedSeats.push(value.payload);
        },
        reduceSelectedSeat: (state, value) => {
            state.selectedSeats = state.selectedSeats.filter(seat => seat.id != value.payload)
        },
        setbookingCompleted: (state) => {
            state.totalPurchases = 0
            state.userSeat = {}
            state.bookingActiveStep = 0
            state.eventSeats = null
            state.selectedSeats = []
        }
    }
})

export const { addPurchase, reducePurchase, setbookingCompleted, forwardBookingStep, completeBookingStep, setEventSeats, addSelectedSeat, reduceSelectedSeat } = userSlice.actions
export default userSlice.reducer
