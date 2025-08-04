import React, { useState } from "react";
import "./Demo.scss";

export default function FlexBasisDemo() {
  const [basis, setBasis] = useState("100px");
  const options = ["50px", "100px", "150px", "200px", "auto"];

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          {options.map((opt) => (
            <button
              key={opt}
              className={basis === opt ? "active" : ""}
              onClick={() => setBasis(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="container">
          <div className="item">Item 1</div>
          <div className="item" style={{ flexBasis: basis }}>Item 2</div>
          <div className="item">Item 3</div>
        </div>
      </div>
      <pre>{`#basisItem {
  flex: 0 0 ${basis};
  flex-basis: ${basis};
}`}</pre>
    </div>
  );
}
