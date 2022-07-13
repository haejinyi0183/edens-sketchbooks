import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Welcome from "./pages/welcomeNewsletter";
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
          <Route path="/welcomeNewsletter" element={<Welcome />} />
          <Route path="/petFinderHome" element={<PetFinderHome />} />
          <Route path="/petfinder" element={<PetFinder />} />
          <Route path="/signOn" element={<SignOn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
