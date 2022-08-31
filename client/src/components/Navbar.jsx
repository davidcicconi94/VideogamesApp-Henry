import React from "react";
import SearchBar from "./SearchBar";
import imagen from "../images/videogame.png";
import "../styles/NavBar.style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <button className="logout">Game Over</button>
      </NavLink>
      <div className="img">
        <img src={imagen} alt="mario" height="200px" />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
