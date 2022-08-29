import React from "react";
import { Link } from "react-router-dom";
import stl from "../styles/LandingPage.style.css";

const LandingPage = () => {
  return (
    <div>
      <h1>Henry Videogames</h1>
      <h3>Landing</h3>

      <Link to="/home">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default LandingPage;
