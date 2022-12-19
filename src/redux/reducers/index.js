import { combineReducers } from "redux";
import { filterReducer } from "./filters-reducer";
import { jobsReducer } from "./jobs-reducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  filters: filterReducer,
});
