import React, { useState } from "react";
import "./Demo.scss";

export default function FlexGrowDemo() {
  const [grow, setGrow] = useState(0);
  const options = [0, 1, 2];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={grow === opt ? "active" : ""}
              onClick={() => setGrow(opt)}
            >
              flex-grow: {opt}
            </button>
          ))}
        </div>
        <div className="container">
          <div className="item">Item 1</div>
          <div className="item" style={{ flex: `0 0 100px`, flexGrow: grow }}>Item 2</div>
          <div className="item">Item 3</div>
        </div>
      </div>
      <pre>{`#growItem {
  flex: 0 0 100px;
  flex-grow: ${grow};
}`}</pre>
    </div>
  );
}
