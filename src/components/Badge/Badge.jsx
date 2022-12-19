import React from "react";
import "./Badge.scss";

const Badge = ({ text, variant, colorSchema, onClick, onDelete }) => {
  return (
    <div
      className={`badge badge-${variant} badge-${colorSchema} `}
      onClick={onClick}
    >
      <span>{text}</span>
      {variant === "clearable" ? (
        <div onClick={onDelete} className="badge-remove">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            ></path>
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default Badge;
