import React from "react";
import "./button.css";
const Button = ({title,onClick}) => {
  return (
    <div>
      <button className="button-82-pushable"  onClick={onClick}>
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">{title}</span>
      </button>
    </div>
  );
};

export default Button;
