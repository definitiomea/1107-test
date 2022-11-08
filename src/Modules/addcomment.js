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

액션 함수
export const addmemo = (memo) => ({type: "addmemo", payload: memo})

const memos = (state = initialState, action) => {
    switch(action.type) {
        case 'addmemo':
            return {...state, memoList: state.memoList.concat(action.payload)}
    }
}

export default memos;

아직은 어떤 값이 들어갈지 지정 X, memo 페이지에서 state 값을 사용해야 한다.
*/