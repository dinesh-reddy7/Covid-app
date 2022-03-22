import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:'user',
    initialState:{
       user:{
           email:null,
           password:null
       }
    },
    reducers: {
        read: (state,action) => {
            state.user = action.payload
        }
    }
})
export  const userValue = (state) => state.user.user;
export const {read} = userSlice.actions;