import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps } from "./components/FunctionProps";
import { FunctionProps2 } from "./components/FunctionProps";
import { FoodProps } from "./components/FoodProps";
import { FoodProps2 } from "./components/FoodProps";
import { BookProps } from "./components/BookProps";
import { TextProps } from "./components/TextProps";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import QuizProps from "./components/QuizProps";
import PlusQuizProps from "./components/PlusQuizProps";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2 name="포비" color="beige" nickname="곰" />

      <FunctionProps name="사과" number={5} price={5000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2>
        여기가 children props
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>
      <FoodProps name="삼겹살" />
      <FoodProps2>
        hi
        <section style={{ backgroundColor: "red" }}>
          <article>children은 빨강배경</article>
        </section>
      </FoodProps2>
      <BookProps
        title="나미야 잡화점의 기적"
        price={15000}
        author="히가시노 게이고"
        type="추리, 판타지"
      />
      <TextProps text="점심뭐먹지" valid />
      <ClassState />
      <FunctionState />
      <QuizProps start={0} />
      <PlusQuizProps start={0} />
    </div>
  );
}

export default App;
