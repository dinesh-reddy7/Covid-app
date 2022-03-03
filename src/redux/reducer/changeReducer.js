import { createSlice } from "@reduxjs/toolkit";




export const changeSlice = createSlice({
    name:'change',
    initialState:{
        frame:"movies"
    },
    reducers: {
        setName: state => {
            state.frame = "TV series"
        },
        setName1: state =>{
            state.frame = "movies"
        }
    }

})
export const changeFrame = (state) => state.change.frame;
export const {setName,setName1} = changeSlice.actions;