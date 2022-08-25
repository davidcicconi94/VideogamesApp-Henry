import React from "react";

const Card = ({ id, name, img, rating }) => {
  return (
    <ul key={id}>
      <li> {name} </li>
      <li> {rating} </li>
      <img src={img} alt="" width="400px" height="300px" />
    </ul>
  );
};

export default Card;
