import { configureStore } from "@reduxjs/toolkit"
import uiAttributeReducer from "./reducers/UiAttributeSlice"
import eventSchedulesReducer from "./reducers/EventScheduleSlice"

export default configureStore({
    reducer: {
        uiAttribute: uiAttributeReducer,
        eventSchedules: eventSchedulesReducer
    }
})