import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About/About";
import Addmission from "./Addmission/Addmission"
import './index.css';

function ReactTest() {
  const [value, setvalue] = useState(10);

  return (
    <Router>
      <main className="main-div">
        <h1>value of {value} </h1>
        <button type="button" onClick={() => setvalue(200)}>click here</button>

        <h1>links </h1>
          <Link to= "/About">click</Link><br />
          <Link to= "/Addmission">click</Link>
          
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Addmission" element={<Addmission />} />

        </Routes>
      </main>
    </Router>
  );
}

export default ReactTest;
