import { createSlice } from "@reduxjs/toolkit";

export const addcomment = createSlice({
    name: 'addcomment',
    initialState: {
        value: 0,
        name: "",
        text: "",
        date: ""
    },
    reducers: {
        addname: (state, action) => {
            state.name += action.payload
        },
        addtext: (state, action) => {
            state.text += action.payload
        },
        adddate: (state) => {
            state.date = (new Date().getMonth() + 1) + "/" + (new Date().getDay())
        }
    }
});

export const { addname, addtext, adddate } = addcomment.actions;

export default addcomment.reducer;