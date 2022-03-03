import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {changeSlice} from "./reducer/changeReducer";


const  rootReducer = combineReducers({
    change : changeSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})







// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./reducer/counterReducer";


// const rootReducer = combineReducers({
//     counter: counterSlice.reducer
// })

// export  const store = configureStore({
//     reducer:rootReducer
// })