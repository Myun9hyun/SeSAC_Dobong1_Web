import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");
  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha("");
  };

  console.log(inputAlpha);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        value={inputAlpha}
      />
      <button onClick={addAlpha}>add alphabet</button>
      <ol>
        {list.map((alphabet) => (
          <li key={alphabet.id}>{alphabet.alpha}</li>
        ))}
      </ol>
    </div>
  );
}
