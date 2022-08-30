import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NotFound.style.css";

const NotFound = () => {
  return (
    <div className="all-not">
      <div className="notFound">
        <h2>Page not fond!</h2>
        <div>
          <NavLink to={"/home"}>
            <button>Go Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
