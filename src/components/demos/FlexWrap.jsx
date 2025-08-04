import React, { useState } from "react";
import "./Demo.scss";

export default function FlexWrapDemo() {
  const [wrap, setWrap] = useState("nowrap");
  const options = ["nowrap", "wrap", "wrap-reverse"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={wrap === opt ? "active" : ""}
              onClick={() => setWrap(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container" style={{ flexWrap: wrap }}>
          {Array.from({ length: 6 }, (_, i) => (
            <div className="item" key={i}>Item {i + 1}</div>
          ))}
        </div>
      </div>
      <pre>{`.container {
  display: flex;
  flex-wrap: ${wrap};
}`}</pre>
    </div>
  );
}
