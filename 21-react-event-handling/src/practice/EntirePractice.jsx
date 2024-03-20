import { useState } from "react";
import Result from "./Result";
import Input from "./Input";
import Select from "./Select";
export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result data={data} />
      </div>
    </div>
  );
}
