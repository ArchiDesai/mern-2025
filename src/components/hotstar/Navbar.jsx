import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form1">
              Form1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form2">
              Form2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/api1">
              API 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/api2">
              API 2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/api3">
              API 3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
