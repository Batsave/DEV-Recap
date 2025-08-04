import React, { useState } from "react";
import "./Demo.scss";

export default function OrderDemo() {
  const [orders, setOrders] = useState({ item1: 0, item2: 0, item3: 0 });

  const reset = () => setOrders({ item1: 0, item2: 0, item3: 0 });

  const setOrder = (id, value) => setOrders((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="card">
      <div className="demo">
        <div className="buttons">
          <button onClick={reset}>Ordre normal</button>
          <button onClick={() => setOrder("item1", 3)}>Item 1 → 3</button>
          <button onClick={() => setOrder("item2", -1)}>Item 2 → -1</button>
          <button onClick={() => setOrder("item3", 5)}>Item 3 → 5</button>
        </div>
        <div className="container" style={{ justifyContent: "flex-start", alignItems: "center" }}>
          <div className="item" style={{ order: orders.item1 }}>Item 1</div>
          <div className="item" style={{ order: orders.item2 }}>Item 2</div>
          <div className="item" style={{ order: orders.item3 }}>Item 3</div>
        </div>
      </div>
      <pre>{`.item {
  order: ${orders.item1 || orders.item2 || orders.item3 ? JSON.stringify(orders) : "0"}; 
}`}</pre>
    </div>
  );
}
