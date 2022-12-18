import React from "react";
import "./Badge.scss";

const Badge = ({ text, variant, colorSchema }) => {
  return (
    <div className={`badge badge-${variant} badge-${colorSchema} `}>
      <span>{text}</span>
      {variant === "clearable" ? <div className="badge-remove">X</div> : null}
    </div>
  );
};

export default Badge;
