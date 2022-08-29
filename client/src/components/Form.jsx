import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createGame,
  getbyGenres,
  getPlatforms,
} from "../redux/actions/actions";

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Name is required.";
  } else if (!/^[a-zA-Z0-9-() .]+$/.test(input.name)) {
    errors.name =
      "Only letters, numbers, hyphens and parentheses are accepted.";
  }

  if (
    input.image.length !== 0 &&
    !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)
  ) {
    errors.image = "Invalid URL";
  }

  if (!input.description) {
    errors.description = "Description is required.";
  } else if (input.description.length > 100) {
    errors.description = "Description is too long. (Max = 100 characters)";
  }

  if (!input.released) {
    errors.released = "Release date is required.";
  }

  if (!input.rating) {
    errors.rating = "Rating is required.";
  } else if (input.rating > 5) {
    errors.rating = "Raiting musn't be heigher than 5.";
  } else if (input.rating < 0) {
    errors.rating = "Rating musn't be a negative number.";
  }

  return errors; //la funcion validate devuelve el objeto errors, ya sea vacio o con alguna propiedad si es q encuentra un error
}

const Form = () => {
  const navigate = useNavigate();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const allGames = useSelector((state) => state.videogames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbyGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
  });

  // Objeto de errores
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
  }

  function handleGenres(e) {
    if (!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }
  }

  function handlePlat(e) {
    if (!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    }
  }

  function handleDeleteGenres(genre) {
    setInput({
      ...input,
      genres: input.genres.filter((gen) => gen !== genre),
    });
  }

  function handleDeletePlatform(platform) {
    setInput({
      ...input,
      platforms: input.platforms.filter((pl) => pl !== platform),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let noRepeat = allGames.filter((game) => game.name === input.name);
    if (noRepeat.length !== 0) {
      alert("Ya existe un juego con ese nombre, por favor elija otro");
    } else {
      let error = Object.keys(validate(input));
      if (
        error.length !== 0 ||
        !input.genres.length ||
        !input.platforms.length
      ) {
        alert("Llene los campos correctamente");
        return;
      } else {
        dispatch(createGame(input));
        setInput({
          name: "",
          image: "",
          description: "",
          released: "",
          rating: "",
          genres: [],
          platforms: [],
        });
        alert("Felicidades, el juego fue creado exitosamente.");
      }
      navigate("/home");
    }
  }

  return (
    <div>
      <div className="title">
        <h2>Create your game!</h2>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            value={input.name}
            type="text"
            required
            name="name"
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            required
            value={input.image}
            onChange={handleChange}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>

        <div>
          <label>Release date:</label>
          <input type="date" name="released" onChange={handleChange} />
          {errors.released && <p> {errors.released} </p>}
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="number"
            placeholder="0-5"
            required
            name="rating"
            onChange={handleChange}
            value={input.rating}
          />
          {errors.rating && <p>{errors.rating}</p>}
        </div>

        <div>
          <label>Genres:</label>
          <select name="genres" onChange={(e) => handleGenres(e)}>
            <option disabled selected>
              ---
            </option>
            {genres.map((gen) => {
              return (
                <option key={gen.id} value={gen.name}>
                  {gen.name}
                </option>
              );
            })}
          </select>
          {input.genres.map((gen) => (
            <p>
              <span key={gen.id} className="op-title">
                {gen}
              </span>
              <span>
                <button onClick={() => handleDeleteGenres(gen)} value={gen}>
                  x
                </button>
              </span>
            </p>
          ))}
        </div>

        <div>
          <label>Platforms:</label>
          <select
            name="platforms"
            id="platforms"
            onChange={(e) => handlePlat(e)}
          >
            <option disabled selected>
              ---
            </option>
            {platforms.map((plat) => {
              return (
                <option value={plat} key={plat}>
                  {plat}
                </option>
              );
            })}
          </select>
          {input.platforms.map((pl) => (
            <p>
              <span className="op-title">{pl}</span>
              <span>
                <button onClick={() => handleDeletePlatform(pl)}>x</button>
              </span>
            </p>
          ))}
        </div>

        <div>
          <textarea
            placeholder="Description..."
            required
            name="description"
            value={input.description}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div>
          <button type="submit">Create Game</button>
          <button>Back</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
