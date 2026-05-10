import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mitra from "./pages/Mitra";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mitra" element={<Mitra />} />
      </Routes>
    </Router>
  );
}

export default App;
