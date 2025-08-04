import React, { useState } from "react";
import "./Demo.scss";

export default function AlignContentDemo() {
  const [alignContent, setAlignContent] = useState("stretch");

  const options = ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={alignContent === opt ? "active" : ""}
              onClick={() => setAlignContent(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ flexWrap: "wrap", alignContent }}>
          {Array.from({ length: 6 }, (_, i) => (
            <div className="item" key={i}>Item {i + 1}</div>
          ))}
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  flex-wrap: wrap;
  align-content: ${alignContent};
}`}</pre>
    </div>
  );
}
