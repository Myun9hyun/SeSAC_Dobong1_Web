import { useState } from "react";

export default function PracticeMap2() {
  const [comment, setComment] = useState([
    { writer: "보아", title: "나는 코딩 천재" },
    { writer: "윤정", title: "화이팅!!" },
    { writer: "오진", title: "집에 가고 싶다.." },
  ]);
  const [inputTitle, setInputTitle] = useState(""); // 작성자 등록 input
  const [inputWriter, setInputWriter] = useState(""); // 제목 등록 input

  const addComment = () => {};
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />

        <button onClick={addComment}>작성</button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "400px" }}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((co, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{co.title}</td>
                <td>{co.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
