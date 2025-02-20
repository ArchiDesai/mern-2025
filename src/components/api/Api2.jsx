import axios from "axios";
import React from "react";

const Api2 = () => {
  const userObj = {
    name: "xyz",
    email: "xyz@gmail.com",
    age: 20,
    isActive: true,
  };

  const postData = async () => {
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res.data.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API 2</h1>
      <button
        onClick={() => {
          postData();
        }}
        style={{ padding: "0 1rem" }}
      >
        Post
      </button>
    </div>
  );
};

export default Api2;
