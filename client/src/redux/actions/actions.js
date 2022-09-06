import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY = "ORDER_BY";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_BY_GENRES = "GET_BY_GENRES";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const CREATE_GAME = "CREATE_GAME";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";

export const getvideogames = () => {
  return async function (dispatch) {
    try {
      let url = "http://localhost:3001/videogames";
      const { data } = await axios.get(url);
      return dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    try {
      let url = "http://localhost:3001/videogames?name=" + name;

      const { data } = await axios.get(url);

      return dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.error(error);
      return dispatch({
        type: GET_BY_NAME,
        payload: [],
      });
    }
  };
};

export const orderBy = (order) => {
  return {
    type: ORDER_BY,
    payload: order,
  };
};

export const getbyGenres = () => {
  return async (dispatch) => {
    try {
      let url = "http://localhost:3001/genres";
      const { data } = await axios.get(url);

      return dispatch({
        type: GET_BY_GENRES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterByGenre = (genre) => {
  return {
    type: FILTER_BY_GENRES,
    payload: genre,
  };
};

export const filterByOrigin = (origin) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
};

export const getVgDetail = (id) => {
  return async (dispatch) => {
    let url = `http://localhost:3001/videogames/${id}`;
    try {
      const { data } = await axios.get(url);
      console.log("Esta es la data", data);
      return dispatch({
        type: GET_VIDEOGAME,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    const url = await axios.get("http://localhost:3001/platforms");
    console.log(url);

    return dispatch({
      type: GET_PLATFORMS,
      payload: url.data,
    });
  };
};

export const createGame = (newGame) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/videogames",
        newGame
      );

      alert("Congratulations, the game was successfully created.");

      return dispatch({
        type: CREATE_GAME,
        payload: data,
      });
    } catch (error) {
      alert("Juego no creado, Error 400");
    }
  };
};
