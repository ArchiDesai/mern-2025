import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
  const id = useParams().id;

  const [movieDetail, setMovieDetail] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getDetail = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=c9807183&i=${id}`
    );
    console.log(res.data);
    setMovieDetail(res.data);
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <h1>Movie Detail</h1>
      <button
        className="btn btn-secondary"
        onClick={() => {
          getDetail();
        }}
        style={{ marginTop: "1rem" }}
      >
        Get
      </button>
      {isSubmitted === true ? (
        <div style={{ marginTop: "2rem" }}>
          <img src={movieDetail?.Poster} alt="" className="col-md-2" />
          <h5> Name = {movieDetail?.Title}</h5>
          <h5> Released= {movieDetail?.Released}</h5>
          <h5>Language= {movieDetail?.Language}</h5>
          <h5> Actors = {movieDetail?.Actors}</h5>
          <h5> Writers= {movieDetail?.Writer}</h5>
          <h5> Id = {movieDetail?.imdbID}</h5>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieDetail;
