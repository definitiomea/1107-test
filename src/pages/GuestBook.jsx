import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { write } from "../Modules/addcomment"

const GuestBook = () => {
    const commentlist = useSelector((state) => state.addcomment.commentlist);

    const [name, setName] = useState(commentlist[0]?.name);
    const [comment, setComment] = useState(commentlist[0]?.comment);
    const [date, setDate] = useState(commentlist[0]?.date);

    const dispatch = useDispatch();

    const addComment = useCallback(() => {
        dispatch(write({name: name, comment: comment, date: date}))
    }, [dispatch, name, comment, date]);

    return (
        <>
            <h1>방명록을 작성해주세요</h1>
            <hr />
            <div>
                <span>이름</span>
                <input type="text" name="" id="" placeholder="이름" onChange={(e) => {setName(e.target.value)}} />
                <input type="text" name="" id="" placeholder="내용을 작성해주세요" onChange={(e) => {setComment(e.target.value)}} />
                <button onClick={() => {addComment()}}>작성</button>
            </div>
            <hr />
            <ul>
                {commentlist ? (commentlist.map((comment) => (
                    <li>{comment.name}: {comment.comment} {comment.date}</li>
                ))):
                ""}
            </ul>
        </>
    );
}

export default GuestBook;

/* 강사님 풀이:
form으로 작업해주었음.

const [name, setName] = useState();
const [text, setText] = useState();

const state = useSelector((state) => state.memoList);
const dispatch = useDispatch();

const addMemo = (e) => {
    e.preventDefault();
    dispatch(addmemo({
        date: new Date(),
        name: name,
        text: text
    }))
}

<form onSubmit={addMemo}>
    <label htmlfor="">이름</label>
    <input type="text" size={5} />
    <input type="text" />
    <input type="submit" value="작성" />
    <hr />
    <ul>
        <li>이름: 내용 날짜</li>
    </ul>
</form>*/