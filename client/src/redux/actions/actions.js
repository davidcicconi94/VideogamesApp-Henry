import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY = "ORDER_BY";

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
      console.log(error);
    }
  };
};

export const orderBy = (order) => {
  return {
    type: ORDER_BY,
    payload: order,
  };
};
