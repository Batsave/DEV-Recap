import React, { useState } from "react";
import "./Demo.scss";

export default function FlexFlowDemo() {
  const [flow, setFlow] = useState("row nowrap");
  const options = ["row nowrap", "row-reverse nowrap", "column wrap-reverse", "column wrap"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={flow === opt ? "active" : ""}
              onClick={() => setFlow(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ flexFlow: flow }}>
          {Array.from({ length: 6 }, (_, i) => (
            <div className="item" key={i}>Item {i + 1}</div>
          ))}
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  flex-flow: ${flow};
}`}</pre>
    </div>
  );
}
