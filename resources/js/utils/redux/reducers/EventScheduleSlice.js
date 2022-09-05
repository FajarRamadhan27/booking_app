import { createSlice } from "@reduxjs/toolkit";

export const eventSchedulesSlice = createSlice({
    name: 'eventSchedules',
    initialState: {
        originalData: null,
        filterableData: null,
        selectedEventSchedule: null
    },
    reducers: {
        setEvenSchedulesData: (state, value) => {
            const {originalData, filterableData} = value.payload
            state.originalData = originalData
            state.filterableData = filterableData
        },
        setSelectedEventSchedule: (state, value) => {
            state.selectedEventSchedule = value.payload
        }
    }
})

export const { setEvenSchedulesData, setSelectedEventSchedule } = eventSchedulesSlice.actions
export default eventSchedulesSlice.reducer
