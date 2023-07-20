import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <picture>
        <source srcSet={props.phoneLocation} media="(max-width:750px)" />
        <source srcSet={props.tabLocation} media="(max-width:1100px)" />
        <img src={props.deskLocation} alt="" />
      </picture>
      <h1 className="position">{props.position}</h1>
      <div className="deets">
        <h4>{props.place}</h4>
        <Link to="/portfolio">
          <p className="link">{props.details}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
