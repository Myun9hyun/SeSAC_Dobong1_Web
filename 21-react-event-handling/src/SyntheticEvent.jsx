// const e = require("express");

function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
  }
  function printInputValue() {}
  return (
    <div>
      <button onClick={syntheticEvent}>클릭 이벤트 콘솔에 찍기</button>
      <br></br>
      <input type="text" placeholder="입력" onChnage={printInputValue}></input>
    </div>
  );
}

export default SyntheticEvent;
