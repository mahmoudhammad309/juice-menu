import React from "react";
import "../JuiceCards.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.title} />
      <div className="title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
