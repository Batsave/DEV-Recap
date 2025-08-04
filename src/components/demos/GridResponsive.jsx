import React, { useState } from "react";
import "./Demo.scss";

export default function GridResponsiveLayoutDemo() {
  const [layout, setLayout] = useState("3cols");

  const layouts = {
    "1col": {
      title: "1 colonne fluide",
      style: { gridTemplateColumns: "1fr" },
      code: `grid-template-columns: 1fr;`
    },
    "3cols": {
      title: "1 à 3 colonnes (responsive)",
      style: { gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" },
      code: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`
    },
    "12cols": {
      title: "Système 12 colonnes",
      style: { gridTemplateColumns: "repeat(12, 1fr)" },
      code: `grid-template-columns: repeat(12, 1fr);`
    },
    "products": {
      title: "Auto-placement produits",
      style: {
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gridAutoRows: "120px"
      },
      code: `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
grid-auto-rows: 120px;`
    }
  };

  return (
    <div className="card">
      <div className="demo">
        {/* Colonne gauche : choix du layout */}
        <div className="buttons">
          {Object.keys(layouts).map((key) => (
            <button
              key={key}
              className={layout === key ? "active" : ""}
              onClick={() => setLayout(key)}
            >
              {layouts[key].title}
            </button>
          ))}
        </div>

        {/* Colonne droite : rendu */}
        <div
          className="container"
          style={{
            display: "grid",
            gap: "1rem",
            ...layouts[layout].style
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <div className="item" key={i}>
              {layout === "12cols" ? `Col ${i + 1}` : `Item ${i + 1}`}
            </div>
          ))}
        </div>
      </div>

      {/* Code affiché */}
      <pre>{`.container {
  display: grid;
  gap: 1rem;
  ${layouts[layout].code}
}`}</pre>
    </div>
  );
}
