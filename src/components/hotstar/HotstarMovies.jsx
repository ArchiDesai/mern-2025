import React from "react";

const HotstarMovies = () => {
  return (
    <div style={{ backgroundColor: "lightgray", height: "90vh" }}>
      <div className="card" style={{ width: "18rem", margin: "auto" }}>
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
      </div>
    </div>
  );
};

export default HotstarMovies;
