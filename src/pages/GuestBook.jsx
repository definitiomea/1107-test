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