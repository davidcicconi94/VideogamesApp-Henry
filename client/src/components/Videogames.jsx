import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getvideogames } from "../redux/actions/actions";
import Card from "./Card";
import Loading from "./Loading";

const Videogames = ({ currentGames }) => {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getvideogames()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="body-cards">
      {currentGames.length > 0
        ? currentGames?.map(({ name, image, id, rating, genres }) => (
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
