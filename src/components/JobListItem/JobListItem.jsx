import React from "react";
import Badge from "../Badge/Badge";
import "./JobListItem.scss";

const JobListItem = ({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleAddFilter,
}) => {
  const allBadges = [].concat(role, level, ...languages, ...tools);
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__avatar">
          <img src={logo} />
        </div>
        <div className="card__content">
          <div className="card__company">
            <p>{company}</p>{" "}
            {isNew && (
              <Badge variant="rounded" colorSchema="green" text="New !" />
            )}{" "}
            {featured && (
              <Badge variant="rounded" colorSchema="dark" text="Featured" />
            )}
          </div>
          <h2 className="card__position">{position}</h2>
          <div className="card__details">
            <div className="card__details-item">{postedAt}</div>
            <div className="card__details-item">{contract}</div>
            <div className="card__details-item">{location}</div>
          </div>
        </div>
      </div>
      <div className="card__badge">
        {allBadges.map((badge, index) => (
          <Badge
            variant="default"
            key={index}
            text={badge}
            onClick={() => handleAddFilter(badge)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobListItem;
