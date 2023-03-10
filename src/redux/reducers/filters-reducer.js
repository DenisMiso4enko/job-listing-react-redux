import {
  ADD_FILTER,
  DELETE_FILTER,
  CLEAR_FILTER,
} from "../actions/filter-actions";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    }
    case DELETE_FILTER: {
      return state.filter((item) => item !== action.filter);
    }
    case CLEAR_FILTER: {
      return [];
    }

    default:
      return state;
  }
};
