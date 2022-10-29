import React from "react";
import ReactDOM from "react-dom";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from "./component/About";

import App from "./App.jsx";
import Navbar from "./component/NavBar.js";
import "./index.css";


const bar = document.getElementById("navbar");
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  bar
);

//Router navigation
const root = document.getElementById("router");
ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={  <App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </React.StrictMode>,
  root
);




