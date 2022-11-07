import { useDispatch, useSelector } from "react-redux";
import { addname, addtext, adddate } from "../Modules/addcomment";

const GuestBook = () => {
    const name = useSelector((state) => state.addcomment.name);
    const text = useSelector((state) => state.addcomment.text);
    const date = useSelector((state) => state.addcomment.date);
    const dispatch = useDispatch();

    return (
        <>
            <h1>방명록을 작성해주세요</h1>
            <hr />
            <div>
                <span>이름</span>
                <input type="text" name="" id="" placeholder="이름" onChange={(e) => {dispatch(addname(e.target.value))}} />
                <input type="text" name="" id="" placeholder="내용을 작성해주세요" onChange={(e) => {dispatch(addtext(e.target.value))}} />
                <button>작성</button>
                <button onClick={() => {dispatch(adddate())}}>날짜 테스트</button>

                <ul>
                    <li>{name}{text}{date}</li>
                </ul>
            </div>
        </>
    );
}

export default GuestBook;