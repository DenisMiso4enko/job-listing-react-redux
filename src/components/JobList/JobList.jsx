import React from "react";
import data from "../../api/data.json";
import JobListItem from "../JobListItem/JobListItem";
import "./JobList.scss";

const JobList = () => {
  return (
    <div className="job-list">
      {data.map((job) => (
        <JobListItem key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
