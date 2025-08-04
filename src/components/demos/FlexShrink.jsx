import React, { useState } from "react";
import "./Demo.scss";

export default function FlexShrinkDemo() {
  const [shrink, setShrink] = useState(1);
  const options = [1, 0, 2];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={shrink === opt ? "active" : ""}
              onClick={() => setShrink(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container shrink-demo ">
          <p className="item">Item 1</p>
          <p className="item" style={{ flex: "0 0 150px", flexShrink: shrink }}>Item 2</p>
          <p className="item">Item 3</p>
        </div>
      </div>
      <pre>{`#shrinkItem {
  flex: 0 0 150px;
  flex-shrink: ${shrink};
}`}</pre>
    </div>
  );
}
