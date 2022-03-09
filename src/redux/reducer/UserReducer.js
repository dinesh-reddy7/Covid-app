import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
    name:'user',
    initialState:{
        email:"example@gmail.com"
    },
    reducers: {
        read: state => {
            state.email= this.email 
        }
        

    }
})
export  const userValue = (state) => state.user.email;
export const {read} = userSlice.actions;