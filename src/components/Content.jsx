import React from "react";

const Content = () => {
  var name = "xyz";
  var age = 20;
  var isActive = true;

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100%",
        marginTop: "7rem",
        textAlign: "center",
        height: "25rem",
      }}
    >
      <h1>Name = {name}</h1>
      <h2>Age = {age}</h2>
      <h2>Active ? {isActive}</h2>
      <h3>Active = {(isActive = true ? "Active" : "Not Active")}</h3>
    </div>
  );
};

export default Content;
