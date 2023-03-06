import React from 'react';

const students = [
    { id: 1, name: "둘리" },
    { id: 2, name: "콩심" },
    { id: 3, name: "짱구" },
    { id: 4, name: "뚱이" },
]

function AttendanceBook(props) {
    return (
        <>
            <ul>
                {students.map((student) => {
                    return <li key={student.id}>{student.name}</li>
                })}
            </ul>
        </>
    );
}


// function AttendanceBook(props) {
//     return (
//         <>
//             <ul>
//                 {students.map((student) => {
//                     // key를 포맷팅 된 문자열로 변경
//                     return <li key={`student-id-${student.id}`}>{student.name}</li>
//                 })}
//             </ul>
//         </>
//     );
// }


// function AttendanceBook(props) {
//     return (
//         <>
//             <ul>
//                 {students.map((student, index) => {
//                     // key를 index로 변경
//                     // 배열에서 아이템의 순서가 바뀔 수 있는 경우에는 성능에 부정적인 영향 & state 문제 발생 => 아이템들의 고유한 ID가 없을 경우에만 사용
//                     return <li key={index}>{student.name}</li>
//                 })}
//             </ul>
//         </>
//     );
// }



export default AttendanceBook;