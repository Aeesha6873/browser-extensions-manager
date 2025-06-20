import React from "react";
import Devlens from "./images/logo-devlens.svg";
import Button from "./Button";
import Toggle from "./images/Toggle";

export default function Card({ img, title, paragraph }) {
  return (
    <div className="card">
      <div className="card-contents">
        <img src={img} alt="" />
        <div>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="card-buttons">
        <Button>Remove</Button>
        <Toggle></Toggle>
      </div>
    </div>
  );
}
