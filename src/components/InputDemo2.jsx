import React, { useState } from "react";
import "../assets/inputDemo2.css";

const InputDemo2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [no, setNo] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "5px 0px" }}>Provide Information</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        {name}
        <br />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        {email}
        <br />
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <br />
        {city}
        <br />
        <label>Age</label>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        {age}
        <br />
        <label>Mobile No.</label>
        <input
          type="text"
          placeholder="Mobile No."
          onChange={(e) => {
            setNo(e.target.value);
          }}
        />
        <br />
        {no}
        <br />
      </div>
    </div>
  );
};

export default InputDemo2;
