import { RefClass1 } from "./components/RefClass1";
import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import { RefFunc2 } from "./components/RefFunction";
import LifeCyclePractice from "./components/LifeCyclePractice";
import Container from "./components/Container";
function App() {
  return (
    <div className="App">
      <h1>안녕</h1>
      {/* <RefClass1 />
      <RefFunc2 /> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      <Container>
        <LifeCyclePractice />
      </Container>
    </div>
  );
}

export default App;
