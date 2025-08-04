import React from "react";
import "./Demo.scss";

export default function GridAlignDemo() {
  return (
    <div className="example">
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gridTemplateRows: "100px",
        justifyItems: "center",
        alignItems: "start",
        gap: "1rem"
      }}>
        <p className="item">1</p>
        <p className="item">2</p>
        <p className="item" style={{ alignSelf: "end" }}>3</p>
      </div>
    </div>
  );
}
