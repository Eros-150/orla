import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/addProjects/login";
import CompleteOrla from "./components/Orla/CompleteOrla";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import About from "./components/about/About";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orla" element={<CompleteOrla />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
