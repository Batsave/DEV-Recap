import React from "react";
import "./Demo.scss";

export default function GridTemplateDemo() {
  return (
    <div className="card">
      <div className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "100px 200px",
          gap: "1rem"
        }}
      >
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
      </div>

      <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
}`}</pre>
    </div>
  );
}
