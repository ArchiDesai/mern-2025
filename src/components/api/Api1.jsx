import axios from "axios";
import React, { useState } from "react";

const Api1 = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setMessage(res.data.message);
    setUsers(res.data.data);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "90vh",
        fontFamily: "Outfit,serif",
      }}
    >
      <h1>API 1</h1>
      <button
        onClick={() => {
          getData();
        }}
        style={{ padding: "1px 20px" }}
      >
        Get
      </button>
      <div>{message}</div>
      <table className="table table-dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            <td>isActive</td>
            <td>Version</td>
          </tr>
        </thead>
        {users?.map((user) => {
          return (
            <tbody>
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive === true ? "true" : "false"}</td>
                <td>{user.__v}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      ;
    </div>
  );
};

export default Api1;
