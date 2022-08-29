import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ASCENDENT,
  DESCENDENT,
  ASCENDENT_RAT,
  DESCENDENT_RAT,
} from "../constant/order";
import {
  getbyGenres,
  getvideogames,
  orderBy,
  filterByGenre,
  filterByOrigin,
} from "../redux/actions/actions";

const Order = () => {
  const genres = useSelector((state) => state.genres);
  const allGames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbyGenres());
  }, [dispatch]);

  const selectChange = (e) => {
    dispatch(orderBy(e.target.value));
  };

  function handleFilter(e) {
    e.preventDefault();
    if (e.target.value === "") {
      dispatch(getvideogames());
    } else {
      dispatch(filterByGenre(e.target.value));
    }
  }

  function handleOrigin(e) {
    e.preventDefault();

    if (e.target.value === "") {
      dispatch(getvideogames());
    } else {
      dispatch(filterByOrigin(e.target.value));
    }
  }

  return (
    // ORDENAR
    <div>
      <select name="byname" onChange={selectChange}>
        <option disabled selected value>
          -- Order by --
        </option>
        <option value={ASCENDENT}>A-Z</option>
        <option value={DESCENDENT}>Z-A</option>

        <option value={ASCENDENT_RAT}> - Rating </option>
        <option value={DESCENDENT_RAT}> + Rating </option>
      </select>
      <select name="" onChange={handleOrigin}>
        <option disabled selected value>
          -- Filter by --
        </option>
        <option value="rawg"> Rawg Games</option>
        <option value="myGames"> My Games</option>
      </select>

      <select onChange={handleFilter}>
        <option disabled selected value>
          -- Genres --
        </option>
        {genres &&
          genres.map((g) => {
            return (
              <option key={g.id} value={g.name}>
                {g.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Order;
