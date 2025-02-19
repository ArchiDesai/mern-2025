import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const getData = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=c9807183&s=${movieName}`
    );
    console.log(res.data);
    setMovies(res.data.Search);
  };

  return (
    <div
      style={{
        textAlign: "center",
        // backgroundColor: "lightgray",
        // height: "100%",
      }}
    >
      <h1>Search Movie</h1>
      <input
        type="text"
        onChange={(e) => {
          setMovieName(e.target.value);
        }}
      />
      <button
        className="btn btn-info"
        onClick={() => {
          getData();
        }}
      >
        Search
      </button>
      <div className="container mt-4">
        <div className="row">
          {movies?.map((movie) => {
            return (
              <div className="col-md-2">
                <div className="card">
                  {/* <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img
                      src={movie.Poster}
                      className="card-img-top"
                      alt="Card Image"
                    />
                  </Link> */}
                  <Link to={`/moviedetail2/${movie.imdbID}`}>
                    <img
                      src={movie.Poster}
                      className="card-img-top"
                      alt="Card Image"
                    />
                  </Link>
                  <h5 className="card-title"> {movie.Title}</h5>
                  <p className="card-text">{movie.imdbID}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
