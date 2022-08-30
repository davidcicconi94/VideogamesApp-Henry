import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NotFound.style.css";

const NotFound = () => {
  return (
    <div>
      <h1 className="title">ERROR 404: Page not found</h1>
      <h2 className="question">Go Home?</h2>
      <div className="answer">
        <NavLink to={"/home"} className="nav">
          <span className="option">YES</span>
        </NavLink>
        <NavLink to={"/"} className="nav">
          <span className="option">NO</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
