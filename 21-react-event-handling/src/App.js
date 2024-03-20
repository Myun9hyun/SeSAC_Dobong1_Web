// import "./App.css";
// import { SyntheticEvent } from "react";
import SyntheticEvent from "./SyntheticEvent";
import Counter from "./Counter";
import Quiz from "./Quiz";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";

import EntirePractice from "./practice/EntirePractice";
function App() {
  return (
    <div>
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <Quiz />
      <Quiz2 />
      <Quiz3 />
      <h1 style={{ textAlign: "center" }}> 실습 문제</h1>
      <EntirePractice />
    </div>
  );
}

export default App;
