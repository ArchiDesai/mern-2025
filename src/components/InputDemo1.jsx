import React, { useState } from "react";

const InputDemo1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Input Demo 1</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name: "
          onChange={(e) => {
            nameChange(e);
          }}
        />
        <h3>{name}</h3>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default InputDemo1;
