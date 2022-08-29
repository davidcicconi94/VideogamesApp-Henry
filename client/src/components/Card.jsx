import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.style.css";

const Card = ({ id, name, img, rating, genres }) => {
  return (
    <div className="card">
      <ul key={id}>
        <h3> {name} </h3>
        <div className="imgVg">
          <img src={img} alt="" width="400px" height="300px" />
        </div>
        <div className="genres">
          <p> {genres} </p>
        </div>
        <div className="rating">
          <p>⭐ {rating} </p>
        </div>
        <div className="btn-details">
          <Link to={`/details/${id}`}>Details</Link>
        </div>
      </ul>
    </div>
  );
};

export default Card;
