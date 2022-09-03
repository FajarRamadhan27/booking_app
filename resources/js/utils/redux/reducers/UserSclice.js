import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        totalPurchases: 0,
        userSeat: {},
        bookingActiveStep: 0
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
        setbookingCompleted: (state) => {
            state.totalPurchases = 0
            state.userSeat = {}
            state.bookingActiveStep = 0
        }
    }    
})

export const { addPurchase, reducePurchase, setbookingCompleted, forwardBookingStep, completeBookingStep } = userSlice.actions
export default userSlice.reducer