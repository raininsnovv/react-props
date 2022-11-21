import React from "react";
import "./css/card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="img" />
      <div className="price">
        <div className="newPrice">{props.newPrice} </div>
        <div className="oldPrice">{props.oldPrice} </div>
      </div>
      <p className="title">{props.title}</p>
      <button className="buyButton">Купить</button>
    </div>
  );
};
export default Card;
