import React from "react";
import { useForm } from "react-hook-form";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("errors", errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationScheme = {
    fnameValidator: {
      required: { value: true, message: "first name is required" },
    },
    lnameValidator: {
      required: { value: true, message: "last name is required" },
    },
    emailValidator: {
      required: { value: true, message: "email is required" },
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
      <h1>Makeup Artist Estimate Form</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{ fontSize: "20px", fontWeight: "600", marginTop: "2rem" }}
      >
        <div>
          Name
          <div className="row" style={{ width: "40rem", margin: "auto" }}>
            <div className="col">
              <input
                // required
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                {...register("fname", validationScheme.fnameValidator)}
              />
              <span style={{ color: "red" }}>{errors.fname?.message}</span>
            </div>
            <div className="col">
              <input
                // required
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                {...register("lname", validationScheme.lnameValidator)}
              />
              <span style={{ color: "red" }}>{errors.lname?.message}</span>
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
              {...register("email", validationScheme.emailValidator)}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Please select the type of make-up you are looking for
          <select
            // required
            className="form-control"
            aria-label="Large select example"
            style={{ margin: "auto", width: "38.5rem" }}
            {...register("makeup type")}
          >
            <option>Please Select</option>
            <option defaultValue="1">Bridal and bridal party makeup</option>
            <option defaultValue="2">Bachelorette party makeup</option>
            <option defaultValue="3">DIY workshops/makeup classes</option>
            <option defaultValue="3">Skincare consultations</option>
            <option defaultValue="3">Hairstyling services</option>
            <option defaultValue="3">Fashion styling services</option>
            <option defaultValue="3">Virtual makeup services</option>
          </select>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          What service do you require ?
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
                value="location1"
                id="flexRadioDefault1"
                {...register("service")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                At Salon
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="location2"
                id="flexRadioDefault2"
                {...register("service")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Coming to your locations
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
                Trial Session
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
                Skin Prep & Facial Mask
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
                Tattoo Cover-up
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          At what date and time?
          <div>
            <input
              // required
              type="date"
              name="date"
              id="date"
              className="form-control"
              aria-label="Large select example"
              style={{ margin: "auto", width: "38.5rem" }}
            />
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <input
              // required
              type="time"
              name="date"
              id="date"
              className="form-control"
              aria-label="Large select example"
              style={{ margin: "auto", width: "38.5rem" }}
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            style={{ width: "8rem", margin: "2rem 0", fontWeight: "700" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form1;
