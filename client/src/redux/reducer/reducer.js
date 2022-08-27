import {
  GET_ALL_VIDEOGAMES,
  GET_BY_NAME,
  ORDER_BY,
  GET_BY_GENRES,
} from "../actions/actions";
import {
  ASCENDENT,
  DESCENDENT,
  DESCENDENT_RAT,
  ASCENDENT_RAT,
} from "../../constant/order";

const initialState = {
  videogames: [],
  filteredVideogames: [],
  genres: [],
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filteredVideogames: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };

    case ORDER_BY:
      let vgCopy = [...state.videogames];
      let order;

      switch (action.payload) {
        case ASCENDENT:
          order = vgCopy.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          break;

        case DESCENDENT:
          order = vgCopy.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          break;

        case ASCENDENT_RAT:
          order = vgCopy.sort(function (a, b) {
            return a.rating - b.rating;
          });
          break;
        case DESCENDENT_RAT:
          order = vgCopy.sort(function (a, b) {
            return b.rating - a.rating;
          });
          break;

        default:
          order = vgCopy;
          break;
      }

      return {
        ...state,
        videogames: order,
      };

    case GET_BY_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default reducerFunction;
