import React, { useState } from "react";
import Mainpage from "../src/pages/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profe from "../src/pages/Profe";
import Family from "./pages/Family";
import Freind from "./pages/Freind";
import Girlf from "./pages/Girlf";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/profe" element={<Profe />} />
        <Route path="/family" element={<Family />} />
        <Route path="/freind" element={<Freind />} />
        <Route path="/girlf" element={<Girlf />} />
      </Routes>
    </Router>
  );
};

export default App;
