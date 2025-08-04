import React, { useState } from "react";
import "./Demo.scss";

export default function GridAutoPlacementDemo() {
  const [flow, setFlow] = useState("row");
  const [gap, setGap] = useState("1rem");

  const flowOptions = ["row", "column", "row dense", "column dense"];
  const gapOptions = ["0px", "0.5rem", "1rem", "2rem"];

  return (
    <div className="card">
      <h3>Auto-placement & Gap</h3>
      <div className="demo">
        {/* Colonne gauche : boutons */}
        <div className="buttons">
          <p><strong>grid-auto-flow</strong></p>
          {flowOptions.map((opt) => (
            <button
              key={opt}
              className={flow === opt ? "active" : ""}
              onClick={() => setFlow(opt)}
            >
              {opt}
            </button>
          ))}

          <p><strong>gap</strong></p>
          {gapOptions.map((opt) => (
            <button
              key={opt}
              className={gap === opt ? "active" : ""}
              onClick={() => setGap(opt)}
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
            gridAutoFlow: flow,
            gap,
            gridTemplateColumns: "repeat(3, 100px)",
            gridAutoRows: "80px"
          }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div className="item" key={i}>Item {i + 1}</div>
          ))}
        </div>
      </div>

      {/* Code affiché */}
      <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: 80px;
  grid-auto-flow: ${flow};
  gap: ${gap};
}`}</pre>
    </div>
  );
}
