import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

const MovieDetail2 = () => {
  const id = useParams().id;

  const [detail, setDetail] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const getMovieDetail = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=c9807183&i=${id}`
    );
    console.log(res.data);
    setDetail(res.data);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "45em",
      }}
    >
      <h1>Movie Detail</h1>
      <button
        className="btn btn-secondary"
        onClick={() => {
          getMovieDetail();
        }}
        style={{ marginTop: "1rem" }}
      >
        Get
      </button>
      {submitted === true ? (
        <div style={{ marginTop: "2rem" }}>
          <div style={{ backgroundColor: "gray" }}>
            <div>
              <h2>{detail.Title}</h2>
              <h6>
                {detail.Year} . {detail.Type} . {detail.Runtime}
              </h6>
            </div>
            {/* <div>
              <button type="button" className="btn btn-secondary btns">
                Overview
              </button>
              <button type="button" className="btn btn-secondary btns">
                Cast
              </button>
              <button type="button" className="btn btn-secondary btns">
                Watch Movie
              </button>
              <button type="button" className="btn btn-secondary btns">
                Reviews
              </button>
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="image" style={{ marginTop: "3rem" }}>
              <img
                src={detail.Poster}
                alt=""
                style={{ borderRadius: "2rem" }}
              />
            </div>
            <div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4> Cast : {detail.Actors}</h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4> Released : {detail.Released}</h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4> Genre : {detail.Genre}</h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4>Language : {detail?.Language}</h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4>
                  Rate :
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="10"
                    id="customRange2"
                    style={{ width: "20rem" }}
                    value={detail.imdbRating}
                  />
                  {detail.imdbRating}
                </h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4> Writer= {detail?.Writer}</h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4> Director= {detail?.Director}</h4>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <h4> Country= {detail?.Country}</h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieDetail2;
