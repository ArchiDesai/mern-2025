import React from "react";
import { useForm } from "react-hook-form";

const Form1 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <h1>Form 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name :</label>
          <input type="text" placeholder="Enter Name" {...register("name")} />
        </div>
        <div>
          <label>Age :</label>
          <input type="number" placeholder="Enter Age" {...register("age")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form1;
