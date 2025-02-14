import React from "react";
import { useForm } from "react-hook-form";

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationScheme = {
    numberValidator: {
      required: {
        value: true,
        message: "number is required",
      },
      pattern: {
        value: /[6-9]{1}[0-9]{9}/,
        message: "number is not valid",
      },
      maxLength: {
        value: 10,
        message: "max lengh is 10",
      },
    },
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
                // required
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
              // required
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
              // required
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Phone Number"
              {...register("phoneno", validationScheme.numberValidator)}
            />
            <span style={{ color: "red" }}>{errors.phoneno?.message} </span>
          </div>
        </div>
        <h3 style={{ marginTop: "2rem" }}>Shipping Address</h3>
        <div style={{ marginTop: "1.5rem" }}>
          Address
          <div className="row" style={{ width: "40rem", margin: "auto" }}>
            <div className="col">
              <textarea
                // required
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
        <div style={{ marginTop: "1.5rem" }}>
          Product Categories
          <select
            // required
            className="form-control"
            aria-label="Large select example"
            style={{ margin: "auto", width: "38.5rem" }}
            {...register("product type")}
          >
            <option>Please Select</option>
            <option defaultValue="1">Electronics</option>
            <option defaultValue="2"> Clothing & Accessories</option>
            <option defaultValue="3">Beauty & Personal Care</option>
            <option defaultValue="4">Home & Kitchen</option>
            <option defaultValue="5"> Books & Stationery</option>
            <option defaultValue="6">Sports & Outdoors</option>
            <option defaultValue="7">Toys & Games</option>
          </select>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Shipping Options
          <div
            // required
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5rem",
              columnGap: "2rem",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="shipping1"
                id="flexRadioDefault1"
                {...register("shipping type")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Standard Shipping (5-7 days)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="shipping2"
                id="flexRadioDefault2"
                {...register("shipping type")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Express Shipping (2-3 days)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="shipping3"
                id="flexRadioDefault2"
                {...register("shipping type")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Same-day Delivery
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Additional Services
          <div
            // required
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5rem",
              columnGap: "2rem",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="service1"
                id="flexCheckDefault"
                {...register("add service")}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Gift Wrap
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="service2"
                id="flexCheckChecked"
                {...register("add service")}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Order Insurance
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="service3"
                id="flexCheckChecked"
                {...register("add service")}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Extended Warranty (for electronics)
              </label>
            </div>
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
