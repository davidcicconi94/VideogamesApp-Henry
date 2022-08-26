import { GET_ALL_VIDEOGAMES, GET_BY_NAME, ORDER_BY } from "../actions/actions";
import { ASCENDENT, DESCENDENT } from "../../constant/order";

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
        filteredVideogames: action.payload,
      };

    case ORDER_BY:
      let orderedGames = [...state.videogames];
      orderedGames = orderedGames.sort((a, b) => {
        if (a.name > b.name) {
          return action.payload === ASCENDENT ? 1 : -1;
        }
        if (a.name < b.name) {
          return action.payload === ASCENDENT ? -1 : 1;
        }
        return 0;
      });

      return {
        ...state,
        videogames: orderedGames,
      };

    default:
      return state;
  }
};

export default reducerFunction;
