import React, { useState } from "react";
import "./Demo.scss";

export default function FlexDirectionDemo() {
  const [direction, setDirection] = useState("row");
  const options = ["row", "row-reverse", "column", "column-reverse"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={direction === opt ? "active" : ""}
              onClick={() => setDirection(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ flexDirection: direction, justifyContent: "center", alignItems: "center" }}>
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  flex-direction: ${direction};
}`}</pre>
    </div>
  );
}
