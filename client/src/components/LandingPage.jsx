import React from "react";
import { Link } from "react-router-dom";
import stl from "../styles/LandingPage.style.css";

const LandingPage = () => {
  return (
    <div className="full">
      <div className="all">
        <div className="content">
          <h1 className="title">Videogames APP</h1>
          <Link to="/home">
            <button className="btn">
              <span> START </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
