import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, deleteFilter } from "../../redux/actions/filter-actions";
import { selectFilters } from "../../redux/selectors/filters-select";
import Badge from "../Badge/Badge";
import "./FilterBar.scss";

const FilterBar = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleClearFilters = () => {
    dispatch(clearFilter());
  };

  const handleDeleteFilter = (filter) => {
    dispatch(deleteFilter(filter));
  };

  if (filters.length === 0) return null;

  return (
    <div className="filter-bar">
      <div className="filter-bar__items">
        {filters.map((filter, index) => (
          <Badge
            key={index}
            text={filter}
            variant="clearable"
            onDelete={() => handleDeleteFilter(filter)}
          />
        ))}
      </div>
      <div className="filter-bar__btn">
        <button className="btn-clear" onClick={handleClearFilters}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
