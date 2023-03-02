import React from "react";
import "./button.css";
const Button = ({title}) => {
  return (
    <div>
      <button className="button-82-pushable" role="button">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">{title}</span>
      </button>
    </div>
  );
};

export default Button;