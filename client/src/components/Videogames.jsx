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
      {videogames.map(({ name, image, id, rating, genres }) => (
        <Card
          id={id}
          name={name}
          img={image}
          rating={rating}
          genres={genres
            ?.map((e) => (typeof e === "object" ? e.name : e))
            .join(", ")}
        />
      ))}
    </div>
  );
};

export default Videogames;
