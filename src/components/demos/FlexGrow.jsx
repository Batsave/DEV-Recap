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
          <p className="item">Item 1</p>
          <p className="item" style={{ flex: `0 0 100px`, flexGrow: grow }}>Item 2</p>
          <p className="item">Item 3</p>
        </div>
      </div>
      <pre>{`#growItem {
  flex: 0 0 100px;
  flex-grow: ${grow};
}`}</pre>
    </div>
  );
}
