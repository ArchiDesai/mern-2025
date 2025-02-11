import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Navbar from "./components/Navbar";
// import AboutUs from "./components/AboutUs";
import "./App.css";
// import InputDemo2 from "./components/InputDemo2";
import Navbar from "./components/hotstar/Navbar";
import { Route, Routes } from "react-router";
import Welcome from "./components/hotstar/Welcome";
import HotstarMovies from "./components/hotstar/HotstarMovies";
import Error404 from "./components/hotstar/Error404";
import HotstarHome from "./components/hotstar/HotstarHome";
// import UseState1 from "./components/UseState1";
// import InputDemo1 from "./components/InputDemo1";
// import UseState2 from "./components/UseState2";
// import Array3 from "./components/Array3";
// import Array2 from "./components/Array2";
// import Array1 from "./components/Array1";
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <Navbar />
      <AboutUs /> */}
      {/* <Header />
      <Content />
      <Footer /> */}
      {/* <Array1 /> */}
      {/* <Array2 /> */}
      {/* <Array3 /> */}
      {/* <UseState1 /> */}
      {/* <UseState2 /> */}
      {/* <InputDemo1 /> */}
      {/* <InputDemo2 /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<HotstarHome />}></Route>
        <Route path="/movies" element={<HotstarMovies />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
