import React, { useState } from "react";

const UseState1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use State 1</h1>
      <h2>Count= {count}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        click
      </button>
    </div>
  );
};

export default UseState1;
