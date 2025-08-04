import React, { useState } from "react";
import "./Demo.scss";

export default function JustifyContentDemo() {
  const [justify, setJustify] = useState("flex-start");
  const options = ["flex-start", "flex-end", "center", "space-between", "space-around"];

  return (
    <div className="card">
      <div className="demo" style={{ gridTemplateColumns: "140px 1fr" }}>
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={justify === opt ? "active" : ""}
              onClick={() => setJustify(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ justifyContent: justify, alignItems: "center" }}>
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  justify-content: ${justify};
}`}</pre>
    </div>
  );
}
