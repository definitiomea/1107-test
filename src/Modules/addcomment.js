import { createSlice } from "@reduxjs/toolkit";

export const addcomment = createSlice({
    name: 'addcomment',
    initialState: {
        commentlist: [
            {
                name: null,
                comment: null,
                date: null
            }
        ]
    },
    reducers: {
        write: (state, action) => {
            const morecomment = {
                name: action.payload.name,
                comment: action.payload.comment,
                date: state.date += (new Date().getMonth() + 1) + (new Date().getDay())
            }
            const newComment = state.commentlist.concat(morecomment);
            return {
                ...state, commentlist: newComment
            }
        },
        default: (state) => {
            return state;
        }
    }
});

export const { write } = addcomment.actions;

export default addcomment.reducer;