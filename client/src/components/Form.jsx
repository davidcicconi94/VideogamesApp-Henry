import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getbyGenres } from "../redux/actions/actions";

const Form = () => {
  const navigate = useNavigate();
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbyGenres());
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
            <option value="" disabled>
              Choose your genre...
            </option>
            {genres.map((gen) => {
              return <option> {gen.name} </option>;
            })}
          </select>
        </p>
      </form>
    </div>
  );
};

export default Form;
