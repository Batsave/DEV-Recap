import React, { useState } from "react";
import "./Demo.scss";

export default function GridAlignSelfDemo() {
  const [justifyItems, setJustifyItems] = useState("center");
  const [alignItems, setAlignItems] = useState("start");
  const [alignSelf, setAlignSelf] = useState("auto");

  const options = ["start", "end", "center", "stretch"];

  return (
    <div className="card">
      <div className="demo">
        {/* Colonne gauche : boutons */}
        <div className="buttons">
          <p><strong>justify-items</strong></p>
          {options.map((opt) => (
            <button
              key={`ji-${opt}`}
              className={justifyItems === opt ? "active" : ""}
              onClick={() => setJustifyItems(opt)}
            >
              {opt}
            </button>
          ))}

          <p><strong>align-items</strong></p>
          {options.map((opt) => (
            <button
              key={`ai-${opt}`}
              className={alignItems === opt ? "active" : ""}
              onClick={() => setAlignItems(opt)}
            >
              {opt}
            </button>
          ))}

          <p><strong>align-self (Item 5)</strong></p>
          {["auto", ...options].map((opt) => (
            <button
              key={`as-${opt}`}
              className={alignSelf === opt ? "active" : ""}
              onClick={() => setAlignSelf(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Colonne droite : rendu */}
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)",
            gridTemplateRows: "repeat(2, 80px)",
            gap: "0.5rem",
            justifyItems,
            alignItems,
          }}
        >
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item" style={{ alignSelf }}>5 (self)</div>
          <div className="item">6</div>
        </div>
      </div>

      {/* Code affiché */}
      <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 80px);
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}

.item:nth-child(5) {
  align-self: ${alignSelf};
}`}</pre>
    </div>
  );
}
