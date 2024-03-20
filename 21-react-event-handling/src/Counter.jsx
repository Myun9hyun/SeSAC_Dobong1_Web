import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  const showAlert = (event, msg) => {
    console.log(event.target);
    alert(`${msg}, 현재 숫자는 ${number}입니다요~`);
  };
  const showConsole = (msg) => {
    console.log(`${msg}, 현재 숫자는 ${number}입니다요`);
  };

  const handleEvent = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={increase}>더하기</button>
      <button onClick={decrease}>빼기</button>
      <button
        onClick={(e) => {
          showAlert(e, "hello");
        }}
      >
        숫자보기
      </button>
      <button
        onClick={(e) => {
          showConsole("hello");
        }}
      >
        콘솔
      </button>
      <button onClick={handleEvent}>
        <span>target확인</span>
      </button>
    </div>
  );
};

export default Counter;
