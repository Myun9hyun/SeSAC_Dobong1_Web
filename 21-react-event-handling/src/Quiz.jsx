import { useState } from "react";

export default function Quiz() {
  const [string, setString] = useState("Hello World!");
  return (
    <div>
      <div>{string}</div>
      <button
        onClick={(e) => {
          setString("GoodBye World!");
        }}
      >
        버튼{" "}
      </button>
    </div>
  );
}
