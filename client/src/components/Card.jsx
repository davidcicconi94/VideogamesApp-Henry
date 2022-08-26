import React from "react";

const Card = ({ id, name, img, rating, genres }) => {
  return (
    <div className="card">
      <ul key={id}>
        <h3> {name} </h3>
        <img src={img} alt="" width="400px" height="300px" />
        <p>⭐ {rating} </p>
        <p> {genres} </p>
        <button> Details </button>
      </ul>
    </div>
  );
};

export default Card;
