import { useState } from "react";

export default function Quiz2() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const textColor = { color: color };

  const redText = () => {
    setColor("red");
    setText("빨간색 글씨");
  };

  const blueText = () => {
    setColor("blue");
    setText("파란색 글씨");
  };

  return (
    <div>
      <h1 style={textColor}>{text}</h1>
      <button onClick={redText}>빨간색</button>
      <button onClick={blueText}>파란색</button>
    </div>
  );
}
