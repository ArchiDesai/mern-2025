import React from "react";

const Array1 = () => {
  const users = ["abc", "def", "mno", "pqr", "xyz"];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "blue" }}>Array</h1>
      {users.map((user) => {
        return <li>{user}</li>;
      })}
    </div>
  );
};

export default Array1;
