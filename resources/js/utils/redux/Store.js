import userReducer from "./reducers/UserSclice"
import { configureStore } from "@reduxjs/toolkit"
import uiAttributeReducer from "./reducers/UiAttributeSlice"
import eventSchedulesReducer from "./reducers/EventScheduleSlice"

export default configureStore({
    reducer: {
        uiAttribute: uiAttributeReducer,
        eventSchedules: eventSchedulesReducer,
        user: userReducer
    }
})