import React from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import imagen from "../images/videogame.png";
import "../styles/NavBar.style.css";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
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
