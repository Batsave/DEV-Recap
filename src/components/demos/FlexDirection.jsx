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
          <p className="item">Item 1</p>
          <p className="item">Item 2</p>
          <p className="item">Item 3</p>
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  flex-direction: ${direction};
}`}</pre>
    </div>
  );
}
