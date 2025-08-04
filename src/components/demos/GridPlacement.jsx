import React from "react";
import "./Demo.scss";

export default function GridPlacementDemo() {
  return (
    <div className="card">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          gridTemplateRows: "repeat(3, 80px)",
          gap: "0.5rem",
        }}
      >
        {/* Item normal */}
        <div className="item">1</div>

        {/* Item qui occupe 2 colonnes */}
        <div className="item" style={{ gridColumn: "2 / 4" }}>
          2 (grid-column: 2 / 4)
        </div>

        {/* Item qui occupe 2 lignes */}
        <div className="item" style={{ gridRow: "1 / 3" }}>
          3 (grid-row: 1 / 3)
        </div>

        {/* Item avec grid-area */}
        <div
          className="item"
          style={{ gridArea: "2 / 3 / 4 / 5" }} // row-start / col-start / row-end / col-end
        >
          4 (grid-area: 2 / 3 / 4 / 5)
        </div>

        {/* Autres items pour remplir */}
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
      </div>

      <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 80px);
  gap: 0.5rem;
}

.item:nth-child(2) {
  grid-column: 2 / 4;
}

.item:nth-child(3) {
  grid-row: 1 / 3;
}

.item:nth-child(4) {
  grid-area: 2 / 3 / 4 / 5;
}`}</pre>
    </div>
  );
}
