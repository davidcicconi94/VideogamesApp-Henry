import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ASCENDENT, DESCENDENT } from "../constant/order";
import { getAllVideogames, orderBy } from "../redux/actions/actions";

const Order = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  console.log(genres);

  const selectChange = (e) => {
    dispatch(orderBy(e.target.value));
  };

  return (
    // ORDENAR
    <div>
      <select name="byname" onChange={selectChange}>
        <option disabled selected value>
          -- Order by --
        </option>
        <option value={ASCENDENT}>A-Z</option>
        <option value={DESCENDENT}>Z-A</option>

        <option value="asc"> + Rating </option>
        <option value="desc"> - Rating </option>
      </select>
      <select name="">
        <option disabled selected value>
          -- Filter by --
        </option>
        <option value="genre">Genre</option>
        {genres &&
          genres.map((gen) => {
            return (
              <option key={gen.id} value={gen.name}>
                {gen.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Order;
