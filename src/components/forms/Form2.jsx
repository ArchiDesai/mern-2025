import React from "react";
import { useForm } from "react-hook-form";

const Form2 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "100%",
        fontFamily: "Outfit,serif",
      }}
    >
      <h1>Online Shopping Form</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{ fontSize: "20px", fontWeight: "600", marginTop: "2rem" }}
      >
        <h3>Personal Information</h3>
        <div style={{ marginTop: "1.5rem" }}>
          Name
          <div className="row" style={{ width: "40rem", margin: "auto" }}>
            <div className="col">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="name"
                {...register("name")}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Email
          <div
            className="col-sm-10"
            style={{ margin: "auto", width: "40.3rem" }}
          >
            <input
              required
              type="email"
              className="form-control"
              id="colFormLabel"
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Phone Number
          <div
            className="col-sm-10"
            style={{ margin: "auto", width: "40.3rem" }}
          >
            <input
              required
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Phone Number"
              {...register("phone no")}
            />
          </div>
        </div>
        <h3 style={{ marginTop: "2rem" }}>Shipping Address</h3>
        <div style={{ marginTop: "1.5rem" }}>
          Address
          <div className="row" style={{ width: "40rem", margin: "auto" }}>
            <div className="col">
              <textarea
                required
                rows="3"
                type="text"
                className="form-control"
                placeholder="Address"
                aria-label="add"
                {...register("add")}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "1.5rem auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "16rem",
          }}
        >
          <div className="col-sm-10">
            City
            <input
              required
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="city"
              {...register("city")}
            />
          </div>
          <div className="col-sm-10">
            State
            <input
              required
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="state"
              {...register("state")}
            />
          </div>
          <div className="col-sm-10">
            Postal code
            <input
              required
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="postal code"
              {...register("postal code")}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Place Order"
          style={{ width: "15rem", margin: "2rem 0", fontWeight: "700" }}
        />
      </form>
    </div>
  );
};

export default Form2;
