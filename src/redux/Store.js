import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducer/UserReducer";


const rootReducer = combineReducers({
    user: userSlice.reducer
})

export  const store = configureStore({
    reducer:rootReducer
})