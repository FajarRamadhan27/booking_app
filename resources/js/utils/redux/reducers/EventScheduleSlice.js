import { createSlice } from "@reduxjs/toolkit";

export const eventSchedulesSlice = createSlice({
    name: 'eventSchedules',
    initialState: {
        originalData: null,
        filterableData: null,
    },
    reducers: {
        setEvenSchedulesData: (state, value) => {
            const {originalData, filterableData} = value.payload
            state.originalData = originalData
            state.filterableData = filterableData
        }
    }
})

export const { setEvenSchedulesData } = eventSchedulesSlice.actions
export default eventSchedulesSlice.reducer