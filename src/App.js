import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Newsletter from "./pages/newsletter";
import PetFinderHome from "./pages/petFinderHome"
import PetFinder from "./pages/petFinder";
import SignOn from "./pages/signOn";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/petFinderHome" element={<PetFinderHome />} />
          <Route path="/petfinder" element={<PetFinder />} />
          <Route path="/sign-on" element={<SignOn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
