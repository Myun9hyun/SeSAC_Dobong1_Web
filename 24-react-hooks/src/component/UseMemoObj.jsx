import { useEffect, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = {
    country: isKorea ? "한국" : "외국",
  };
  useEffect(() => {
    console.log("location이 바뀔때마다 실행됩니다.");
  });
  return (
    <>
      <h3>UseMemo와 Object</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라바꾸기</button>
    </>
  );
}
