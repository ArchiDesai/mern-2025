import React from "react";
import { useParams } from "react-router";

const Play = () => {
  const id = useParams().id;

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <h1>Playing..{id}</h1>
    </div>
  );
};

export default Play;
