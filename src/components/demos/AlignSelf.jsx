import React, { useState } from "react";
import "./Demo.scss";

export default function AlignSelfDemo() {
  const [alignSelf, setAlignSelf] = useState("auto");

  const options = ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={alignSelf === opt ? "active" : ""}
              onClick={() => setAlignSelf(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ alignItems: "center" }}>
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item" style={{ alignSelf }}>Item 3</div>
          <div className="item">Item 4</div>
        </div>
      </div>
      <pre>{`#selfItem {
  align-self: ${alignSelf};
}`}</pre>
    </div>
  );
}
