import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames } from "../redux/actions/actions";
import Card from "./Card";
import Loading from "./Loading";
import Pagination from "./Pagination";

const Videogames = ({ currentGames }) => {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllVideogames()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {currentGames.length > 0
        ? currentGames.map(({ name, image, id, rating, genres }) => (
            <Card
              id={id}
              name={name}
              img={image}
              rating={rating}
              genres={genres
                ?.map((e) => (typeof e === "object" ? e.name : e))
                .join(", ")}
            />
          ))
        : console.log("error")}
    </div>
  );
};

export default Videogames;
