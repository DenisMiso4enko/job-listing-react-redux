import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors/filters-select";
import {
  selectJobs,
  selectVisibleJobs,
} from "../../redux/selectors/jobs-selector";
import JobListItem from "../JobListItem/JobListItem";
import { addFilter } from "../../redux/actions/filter-actions";
import "./JobList.scss";

const JobList = () => {
  const filters = useSelector(selectFilters);
  const jobs = useSelector((state) => selectVisibleJobs(state, filters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobListItem key={job.id} {...job} handleAddFilter={handleAddFilter} />
      ))}
    </div>
  );
};

export default JobList;
