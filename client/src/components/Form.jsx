import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getbyGenres, getPlatforms } from "../redux/actions/actions";

const Form = () => {
  const navigate = useNavigate();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbyGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div>
      <div className="title">
        <h2>Create your game!</h2>
      </div>
      <form>
        <p>
          <label>Name:</label>
          <input type="text" />
        </p>

        <p>
          <label>Image URL:</label>
          <input type="text" />
        </p>

        <p>
          <label>Release date:</label>
          <input type="date" />
        </p>

        <p>
          <label>Rating:</label>
          <input type="number" placeholder="0-5" />
        </p>

        <p>
          <label>Genres:</label>
          <select name="genres" id="genres">
            <option disabled selected>
              ---
            </option>
            {genres.map((gen) => {
              return <option> {gen.name} </option>;
            })}
          </select>
        </p>

        <p>
          <label>Platforms:</label>
          <select name="platforms" id="platforms">
            <option disabled selected>
              ---
            </option>
            {platforms.map((plat) => {
              return <option> {plat} </option>;
            })}
          </select>
        </p>
      </form>
    </div>
  );
};

export default Form;
