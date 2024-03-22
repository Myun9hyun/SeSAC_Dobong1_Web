import { useRef } from "react";
// import { useState } from "react";
import { useState } from "react";
export function RefFunc2() {
  const refVal = useRef(1);
  const [stateVal, setStateVal] = useState(1);
  let variable = 1;

  const plusRef = () => {
    console.log("ref값 확인 >>>", refVal.current);
    refVal.current += 1;
  };
  const plusState = () => {
    setStateVal(stateVal + 1);
    console.log("state값 확인>>> ", stateVal);
  };
  const plusVaribale = () => {
    variable.current += 1;
    console.log("var값 확인>> ", variable);
  };
  return (
    <>
      <h3s>ref : {refVal}</h3s>
      <h3>state : {stateVal}</h3>
      <h3>variable: {variable}</h3>
      <button>ref+1</button>
      <button>state+1</button>
      <button>variable+1</button>
    </>
  );
}
