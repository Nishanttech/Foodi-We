import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
