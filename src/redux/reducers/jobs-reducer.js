import { ADD_JOBS } from "../actions/jobs-actions";

export const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_JOBS: {
      return action.jobs;
    }
    default:
      return state;
  }
};
