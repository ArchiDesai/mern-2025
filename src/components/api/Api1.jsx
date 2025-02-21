import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Loader from "./Loader";

const Api1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    setUsers(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    toast("🦄 Data Deleted", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    getData();
  };

  return (
    <div
      style={{
        textAlign: "center",
        height: "90vh",
        fontFamily: "Outfit,serif",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {loading == false && (
        <table className="table table-dark">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
              <td>isActive</td>
              <td>Version</td>
              <td>Action</td>
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
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteData(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
      {loading == true && <Loader />}
    </div>
  );
};

export default Api1;
