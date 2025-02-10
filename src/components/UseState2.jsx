import React, { useState } from "react";

const UseState2 = () => {
  const [isLoading, setIsLoading] = useState(true);

  const stop = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use State 2</h1>
      <h1>{isLoading == true ? "Loading..." : ""}</h1>
      <button
        onClick={() => {
          stop();
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default UseState2;
