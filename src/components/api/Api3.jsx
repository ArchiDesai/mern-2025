import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Api3 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    const res = await axios.post("https://node5.onrender.com/user/user", data);
    console.log(res.data.data);
    if (res.status == 201) {
      alert("User Added......");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API 3</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Age" {...register("age")} />
        <input type="text" placeholder="isActive" {...register("isActive")} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Api3;
