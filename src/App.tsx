import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Mitra from "./pages/Mitra";
import React from "react";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mitra" element={<Mitra />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
