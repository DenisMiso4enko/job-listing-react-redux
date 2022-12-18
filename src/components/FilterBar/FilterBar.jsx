import React from "react";
import Badge from "../Badge/Badge";
import "./FilterBar.scss";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__items">
        <Badge text={"jasssss"} variant="clearable" />
        <Badge text={"jasssss"} variant="clearable" />
        <Badge text={"jasssss"} variant="clearable" />
        <Badge text={"jasssss"} variant="clearable" />
      </div>
      <div className="filter-bar__btn">
        <button className="btn-clear">Clear</button>
      </div>
    </div>
  );
};

export default FilterBar;
