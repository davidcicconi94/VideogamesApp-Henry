import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames } from "../redux/actions/actions";
import Card from "./Card";

const Videogames = () => {
  let dispatch = useDispatch();
  let videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getAllVideogames());
  }, [dispatch]);

  return (
    <div>
      {videogames.map(({ name, image, id, rating }) => (
        <Card id={id} name={name} img={image} rating={rating} />
      ))}
    </div>
  );
};

export default Videogames;
