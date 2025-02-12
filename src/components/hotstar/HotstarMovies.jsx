import React from "react";
import { Link } from "react-router";

const HotstarMovies = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <h1>Movies...</h1>
      <ul>
        <li>
          <Link to={"/play/1010"}>ABC</Link>
        </li>
        <li>
          <Link to={"/play/1002"}>XYZ</Link>
        </li>
      </ul>
      {/* <div className="card" style={{ width: "18rem", margin: "auto" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem", margin: "auto", marginTop: "3rem" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default HotstarMovies;
