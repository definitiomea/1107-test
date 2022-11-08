import { createSlice } from "@reduxjs/toolkit";

export const addcomment = createSlice({
    name: 'addcomment',
    initialState: {
        commentlist: [
            
        ]
    },
    reducers: {
        write: (state, action) => {
            const morecomment = {
                name: action.payload.name,
                comment: action.payload.comment,
                date: (new Date().getMonth() + 1) + "/" + (new Date().getDate())
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

/* 강사님 풀이: redux toolkit을 쓰지는 않았음

const initialState = {
    memoList : [
        {
            date: new Date(),
            name: "green",
            text: "방명록입니다"
        }
    ]
}

const memos = (state = initialState, action) => {
    switch(action.type) {
        case 'addmemo':
            return {...state, memoList: state.memoList.concat(action.payload)}
    }
}
*/