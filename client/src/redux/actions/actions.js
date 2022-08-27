import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY = "ORDER_BY";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_BY_GENRES = "GET_BY_GENRES";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";

export const getAllVideogames = () => {
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
