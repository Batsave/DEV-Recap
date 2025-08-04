import React, { useState } from "react";
import "./Demo.scss";

export default function GapDemo() {
  const [gap, setGap] = useState("0px");
  const options = ["0px", "8px", "16px", "32px"];

  return (
    <div className="card">
      <div className="demo" style={{ gridTemplateColumns: "80px 1fr" }}>
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={gap === opt ? "active" : ""}
              onClick={() => setGap(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ gap }}>
          {Array.from({ length: 5 }, (_, i) => (
            <p className="item" key={i}>Item {i + 1}</p>
          ))}
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  gap: ${gap};
}`}</pre>
    </div>
  );
}
