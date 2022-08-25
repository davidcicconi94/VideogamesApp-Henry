import { GET_ALL_VIDEOGAMES, GET_BY_NAME } from "../actions/actions";

const initialState = {
  videogames: [],
  genres: [],
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return state;
  }
};

export default reducerFunction;
