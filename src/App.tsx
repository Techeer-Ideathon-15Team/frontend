import React, { useState } from "react";
import Mainpage from "../src/pages/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </Router>
  );
};

export default App;
