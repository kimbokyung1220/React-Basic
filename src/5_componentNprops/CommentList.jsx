import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "둘리",
        comment: "안녕하세요 둘리입니다."

    },
    {
        name: "콩심",
        comment: "콩심이에요 반가워용."

    },
    {
        name: "짱구",
        comment: "나는야 짱구1111"

    }

]

function CommentList(comment) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}


// 데이터 분리 전
// function CommentList(props) {
//     return (
//         <>
//             <Comment name={"둘리"} comment={"안녕하세요 둘리입니다."}/>
//             <Comment name={"콩심"} comment={"콩심이에요 반가워용."}/>
//             <Comment name={"짱구"} comment={"나는야 짱구."}/>
//         </>
//     );
// }

export default CommentList;