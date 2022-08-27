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
  getAllVideogames,
  orderBy,
  filterByGenre,
} from "../redux/actions/actions";

const Order = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  console.log(genres);

  useEffect(() => {
    dispatch(getbyGenres());
  }, [dispatch]);

  const selectChange = (e) => {
    dispatch(orderBy(e.target.value));
  };

  function handleFilter(e) {
    console.log(e.target.value);
    e.preventDefault();
    if (e.target.value === "") {
      dispatch(getAllVideogames());
    } else {
      dispatch(filterByGenre(e.target.value));
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
      <select name="">
        <option disabled selected value>
          -- Filter by --
        </option>
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
