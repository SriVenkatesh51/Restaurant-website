import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Headder from "./components/Headder";
import Fotter from "./components/Fotter";
import Menu from "./components/Menue";
import Contact from "./components/Contact";
import Location from "./components/Location";

function App() {
  return (
    <Router>
      <>
        <Headder />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Fotter />
      </>
    </Router>
  );
}

export default App;
