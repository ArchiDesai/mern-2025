import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Navbar from "./components/Navbar";
// import AboutUs from "./components/AboutUs";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/hotstar/Navbar";
import Welcome from "./components/hotstar/Welcome";
import HotstarMovies from "./components/hotstar/HotstarMovies";
import Error404 from "./components/hotstar/Error404";
import HotstarHome from "./components/hotstar/HotstarHome";
import Play from "./components/hotstar/Play";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
// import UseState1 from "./components/UseState1";
// import UseState2 from "./components/UseState2";
// import InputDemo1 from "./components/InputDemo1";
// import InputDemo2 from "./components/InputDemo2";
// import Array1 from "./components/Array1";
// import Array2 from "./components/Array2";
// import Array3 from "./components/Array3";
// import Array4 from "./components/Array4";
// import Array5 from "./components/Array5";
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
      {/* <Array4 /> */}
      {/* <Array5 /> */}
      {/* <UseState1 /> */}
      {/* <UseState2 /> */}
      {/* <InputDemo1 /> */}
      {/* <InputDemo2 /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<HotstarHome />}></Route>
        <Route path="/play/:id" element={<Play />}></Route>
        <Route path="/movies" element={<HotstarMovies />}></Route>
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
