import React, { useState } from "react";
import "./counterapp.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <div className="name">COUNTER</div>
      <div className="count">{count}</div>
      <div className="buttons">
        <div
          className="minus"
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          -
        </div>
        <div className="reset" onClick={() => setCount(0)}>
          RESET
        </div>
        <div
          className="plus"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Counter;
