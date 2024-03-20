export default function PlusQuizProps(props) {
  let start = 0;
  function increase() {
    start = start + 1;
    if (start > 7) {
      console.log("😡", start);
    } else {
      console.log("😃", start);
    }
    // <div>{this.props.start}</div>;
  }
  function decrease() {
    start -= 1;
    if (start > 7) {
      console.log("😡", start);
    } else {
      console.log("😃", start);
    }
  }
  return (
    <div>
      <button onClick={increase}>1증가</button>

      <button onClick={decrease}>1감소</button>
    </div>
  );
}
