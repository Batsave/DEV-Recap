import React, { useState } from "react";
import "./Demo.scss";

export default function AlignItemsDemo() {
  const [alignItems, setAlignItems] = useState("stretch");

  const options = ["flex-start", "flex-end", "center", "baseline", "stretch"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={alignItems === opt ? "active" : ""}
              onClick={() => setAlignItems(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ alignItems, justifyContent: "center" }}>
          <p className="item baseline-text">Item 1</p>
          <p className="item">Item 2</p>
          <p className="item baseline-text">Item 3</p>
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  align-items: ${alignItems};
}`}</pre>
    </div>
  );
}
