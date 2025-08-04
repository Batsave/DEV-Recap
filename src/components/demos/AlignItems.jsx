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
          <div className="item baseline-text">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item baseline-text">Item 3</div>
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  align-items: ${alignItems};
}`}</pre>
    </div>
  );
}
